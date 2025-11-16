import { Handlers } from "$fresh/server.ts";

// Simple rule-based AI for starter
const aiResponses: Record<string, string> = {
  "services":
    "We offer ESG Strategy, Carbon Project Development, Sustainability Compliance, Climate Risk Assessment, Green Financing Advisory, and Capacity Building. Which area interests you?",
  "esg":
    "Our ESG services include framework development, sustainability reporting, investor communications, and compliance with global standards like GRI and SASB.",
  "carbon":
    "We help develop carbon projects from feasibility to verification, focusing on African contexts like agriculture, forestry, and renewable energy.",
  "pricing":
    "We offer customized pricing based on your specific needs. Would you like to schedule a free consultation to discuss your requirements?",
  "contact":
    "You can reach us at e.gathua@airisagreenconsulting.com or book a consultation through our contact page.",
  "default":
    "I specialize in ESG, carbon markets, and sustainability consulting for African businesses. How can I help you today? You can ask about services, pricing, or case studies.",
};

export const handler: Handlers = {
  async POST(req) {
    const { prompt } = await req.json();
    const lowerPrompt = prompt.toLowerCase();

    let response = aiResponses.default;

    if (
      lowerPrompt.includes("service") ||
      lowerPrompt.includes("what do you offer")
    ) {
      response = aiResponses.services;
    } else if (lowerPrompt.includes("esg")) {
      response = aiResponses.esg;
    } else if (
      lowerPrompt.includes("carbon") || lowerPrompt.includes("credit")
    ) {
      response = aiResponses.carbon;
    } else if (lowerPrompt.includes("price") || lowerPrompt.includes("cost")) {
      response = aiResponses.pricing;
    } else if (
      lowerPrompt.includes("contact") || lowerPrompt.includes("email") ||
      lowerPrompt.includes("call")
    ) {
      response = aiResponses.contact;
    }

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return new Response(JSON.stringify({ reply: response }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
