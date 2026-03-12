import { Handlers } from "$fresh/server.ts";
import { buildAnswer, retrieveContext } from "../../data/airisaKnowledge.ts";
import { getAllDynamicInsights } from "../../utils/insights_kv.ts";
import { load } from "$std/dotenv/mod.ts";

// Try to load .env file (it won't override existing env vars)
try {
  await load({ export: true });
} catch {
  // .env might not exist in production
}

const AI_BASE_URL = Deno.env.get("AI_BASE_URL") ||
  "https://api.groq.com/openai/v1";
const AI_API_KEY = Deno.env.get("AI_API_KEY") || "";
const AI_MODEL = Deno.env.get("AI_MODEL") || "llama3-8b-8192";

export const handler: Handlers = {
  async POST(req) {
    try {
      const { prompt } = await req.json();

      if (!prompt) {
        return new Response(
          JSON.stringify({ reply: "Please ask a question." }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // Fallback to legacy rule-based engine if no API key is set
      if (!AI_API_KEY) {
        const legacyReply = buildAnswer(prompt);
        return new Response(
          JSON.stringify({
            reply: legacyReply +
              "\n\n(Note: AI API Key not configured, running in legacy mode)",
          }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // 1. Retrieve relevant context from Airisa knowledge base
      const context = retrieveContext(prompt);

      // 1b. Pull the latest LinkedIn-cached posts to give ARIA current affairs awareness
      let latestPostsContext = "";
      try {
        const latestPosts = await getAllDynamicInsights();
        if (latestPosts.length > 0) {
          const postLines = latestPosts.slice(0, 5).map(
            (p) => `- "${p.title}": ${p.summary}${p.href ? ` [View post](${p.href})` : ""}`,
          ).join("\n");
          latestPostsContext = `\n\nLATEST AIRISA LINKEDIN POSTS (most recent first):\n${postLines}`;
        }
      } catch {
        // KV not available — skip gracefully
      }

      // 2. Construct the system prompt
      const systemPrompt = `You are ARIA — Airisa's AI assistant, embedded on the Airisa Green Consulting website.

ABOUT AIRISA:
Airisa Green Consulting is a social enterprise and think-tank based in Nairobi, Kenya, advancing inclusive mobility, climate resilience, and environmental sustainability across Africa. They operate through three pillars: Insight (evidence generation), Strategy (inclusive planning), and Sustainability (long-term impact).

THE TEAM (know these deeply):
- Evelyn Gathua: Founder & Managing Director. Licensed NEMA Associate Expert. Expert in sustainable mobility, gender-inclusive transport, and climate policy. Led the Drive Electric Study (WRI), UNEP EV readiness work. Collaborates with GIZ, Siemens Stiftung, Greenpeace Africa. Email: e.gathua@airisagreenconsulting.com
- Anthony Ndolo: Co-Founder & Director of Strategy & Operations. Business systems architect with experience in health-tech, logistics-tech, and organisational scaling in emerging markets. Founded Smatbeba (digital cargo marketplace, East Africa). Former COO at EcoWorld Recycling (USAID-supported). 2025 Dream VC Fellow. Email: a.ndolo@airisagreenconsulting.com | LinkedIn: https://www.linkedin.com/in/anthony-ndolo-58151b87

CONTACT DETAILS:
- General: info@airisagreenconsulting.com
- Phone: +254 738 573 190
- WhatsApp: https://wa.me/254738573190
- Location: Nairobi, Kenya, East Africa
- LinkedIn: https://www.linkedin.com/company/airisa-green-consulting/

WEBSITE PAGES (use Markdown links to guide users):
- Home: [Home](/)
- About us: [About](/about)
- Services: [Services](/services)
- Programs: [Programs](/programs)
- Insights/Articles: [Insights](/insights)
- Meet the team: [Team](/team)
- Partner with us: [Partner](/partner)
- Contact: [Contact](/contact)

YOUR CAPABILITIES — you can help users:
1. Learn about Airisa, the team (Evelyn, Anthony), services, programs, and partnerships
2. CALL THE COMPANY: Provide the clickable link [📞 Call +254 738 573 190](tel:+254738573190)
3. WHATSAPP: Provide [💬 Chat on WhatsApp](https://wa.me/254738573190)
4. EMAIL: Provide [✉️ Email us](mailto:info@airisagreenconsulting.com)
5. EMAIL ANTHONY: [✉️ Email Anthony](mailto:a.ndolo@airisagreenconsulting.com)
6. EMAIL EVELYN: [✉️ Email Evelyn](mailto:e.gathua@airisagreenconsulting.com)
7. NAVIGATE: Guide users to the right page using Markdown links
8. PARTNER: Direct users to [Partner page](/partner) to start a collaboration

TONE: Professional but warm. Concise. Use emojis sparingly (🌿, 🌍, 🚀). Never say you don't know the team — you know them well.

CONTEXT ABOUT AIRISA (from knowledge base):
${context}`;


      // 3. Call the external AI API
      const response = await fetch(`${AI_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${AI_API_KEY}`,
        },
        body: JSON.stringify({
          model: AI_MODEL,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("AI API Error:", errText);
        return new Response(
          JSON.stringify({
            reply:
              "I'm having trouble connecting to my brain right now. Please try again later.",
          }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content ||
        "I didn't get a response.";

      return new Response(JSON.stringify({ reply }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ reply: "An internal error occurred." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
