import { Handlers } from "$fresh/server.ts";
import { buildAnswer } from "../../data/airisaKnowledge.ts";

// Lightweight retrieval-based assistant using structured company knowledge.
// Adds playful persona and suggestions.

function generateResponse(prompt: string): string {
  const lower = prompt.toLowerCase();
  // Pricing special-case remains custom as not in profile.
  if (/price|cost|fee|rate/.test(lower)) {
    return "💰 Pricing: We tailor proposals to project scope & partnership structure. Share a bit about your initiative and I can guide next steps or connect you with the team for a detailed quote.";
  }
  // ESG/carbon legacy catch (if user still asks those specifically)
  if (/carbon|credit/.test(lower)) {
    return "⚡ Carbon & Climate: We focus on climate resilience in transport (risk diagnostics, adaptation pathways) and sustainability integration rather than carbon credit project development at this stage.";
  }
  return buildAnswer(prompt);
}

export const handler: Handlers = {
  async POST(req) {
    const { prompt } = await req.json();
    const reply = generateResponse(prompt || "");
    // Simulate processing delay for UX
    await new Promise((resolve) => setTimeout(resolve, 420));
    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
