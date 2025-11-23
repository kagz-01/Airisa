import { Handlers } from "$fresh/server.ts";
import { buildAnswer, retrieveContext } from "../../data/airisaKnowledge.ts";
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

      // 2. Construct the system prompt
      const systemPrompt =
        `You are ARIA (Airisa Assistive), a helpful and professional AI assistant for Airisa Green Consulting.\nAirisa is a consultancy advancing inclusive mobility, climate resilience, and environmental sustainability in Africa.\n\nYour goal is to answer user questions based on the provided context about Airisa.\nIf the user asks a general question (e.g. "how are you", "what is the date"), answer it naturally and briefly, but try to pivot back to Airisa's mission if appropriate.\nIf the user asks about Airisa, use the provided context to answer accurately.\nDo not invent facts about Airisa. If the context doesn't contain the answer, say you don't have that specific information and suggest contacting the team.\nKeep answers concise, professional, and engaging. Use emojis sparingly but effectively (like 🌿, 🌍).\n\nCONTEXT ABOUT AIRISA:\n${context}\n`;

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
