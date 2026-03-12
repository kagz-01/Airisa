import { load } from "$std/dotenv/mod.ts";

/**
 * AI-driven transformation for LinkedIn posts.
 */

try {
  await load({ export: true });
} catch {
  // Env might not exist in production (e.g. set in Deno Deploy)
}

const AI_BASE_URL = Deno.env.get("AI_BASE_URL") ||
  "https://api.groq.com/openai/v1";
const AI_API_KEY = Deno.env.get("AI_API_KEY") || "";
const AI_MODEL = Deno.env.get("AI_MODEL") || "llama-3.3-70b-versatile";

export interface LinkedInPostRaw {
  id: string;
  text: string;
  image_url?: string;
  post_url: string;
  timestamp: number;
}

export interface TransformedInsight {
  id: string;
  title: string;
  summary: string;
  pillar: "Insight" | "Strategy" | "Sustainability";
  image?: string;
  href: string;
  timestamp: number;
  extendedContent?: string;
}

export async function transformLinkedInToInsight(
  post: LinkedInPostRaw,
): Promise<TransformedInsight> {
  if (!AI_API_KEY) {
    console.warn(
      "AI_API_KEY is not set. Using raw text for insight translation.",
    );
    return {
      id: post.id,
      title: "New LinkedIn Update",
      summary: post.text.slice(0, 150) + "...",
      pillar: "Insight" as const,
      image: post.image_url,
      href: post.post_url,
      timestamp: post.timestamp,
    };
  }

  const systemPrompt =
    `You are an expert content strategist for Airisa Green Consulting.
Airisa is a consultancy advancing inclusive mobility, climate resilience, and environmental sustainability in Africa.

Your task is to take a raw LinkedIn post and transform it into a professional website-ready "Insight" card.
Respond ONLY with a valid JSON object in the following format:
{
  "title": "A catchy, professional, click-worthy title (under 60 chars)",
  "summary": "A concise, engaging 2-sentence summary of the post (under 200 chars)",
  "pillar": "Pick one: 'Insight', 'Strategy', or 'Sustainability' based on content"
}`;

  const userPrompt = `LinkedIn Post Content:
"${post.text}"`;

  try {
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
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API failed: ${await response.text()}`);
    }

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);

    return {
      id: post.id,
      title: content.title || "New Update",
      summary: content.summary || "Latest news from our LinkedIn channel.",
      pillar: (content.pillar || "Insight") as
        | "Insight"
        | "Strategy"
        | "Sustainability",
      image: post.image_url,
      href: post.post_url,
      timestamp: post.timestamp,
    };
  } catch (error) {
    console.error("Failed to transform LinkedIn post with AI:", error);
    return {
      id: post.id,
      title: "LinkedIn Update",
      summary: post.text.slice(0, 150) + "...",
      pillar: "Insight" as const,
      image: post.image_url,
      href: post.post_url,
      timestamp: post.timestamp,
    };
  }
}
