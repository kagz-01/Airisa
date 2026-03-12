// Structured knowledge base extracted from company profile
// Lightweight rule-based retrieval (no embeddings) for ARIA assistant.

export interface Fact {
  id: string;
  category: string;
  keywords: string[];
  text: string;
}

const vision =
  `To be Africa’s leading consultancy advancing inclusive mobility, climate resilience, and environmental sustainability through research, policy innovation, and community‑centered implementation.`;
const mission =
  `To transform mobility systems through research excellence, gender-inclusive advocacy, and collaborative partnerships bridging the gap between policy and implementation while fostering innovation in emerging markets' transport sectors.`;

const pillars: Fact[] = [
  {
    id: "pillar_insight",
    category: "pillars",
    keywords: ["insight", "evidence", "diagnostic", "baseline", "assessments"],
    text:
      "INSIGHT: Evidence generation & diagnostics (baseline studies, Theory of Change, gender-disaggregated data, stakeholder mapping, transport trends) informing policy, design & investment decisions.",
  },
  {
    id: "pillar_strategy",
    category: "pillars",
    keywords: ["strategy", "feasibility", "investment", "planning", "roadmap"],
    text:
      "STRATEGY: Inclusive, implementable mobility & climate strategies (feasibility studies, gender-responsive planning, adaptation strategies, advocacy roadmaps, institutional strengthening, implementation blueprints).",
  },
  {
    id: "pillar_sustainability",
    category: "pillars",
    keywords: [
      "sustainability",
      "impact",
      "monitoring",
      "resilience",
      "evaluation",
    ],
    text:
      "SUSTAINABILITY: Long-term impact systems (ESIA frameworks, MEL, inclusion metrics, performance tools, evaluation methodologies, community-centered adaptation & resilience).",
  },
];

const values: Fact[] = [
  {
    id: "values",
    category: "values",
    keywords: ["values", "principles", "culture"],
    text:
      "Values: Research Excellence, Inclusivity, Innovation, Collaboration, Impact.",
  },
];

const services: Fact[] = [
  {
    id: "service_research",
    category: "services",
    keywords: ["research", "baseline", "feasibility", "market", "survey"],
    text:
      "Research: Feasibility & baseline studies, market research & surveys, diagnostics, best practice analysis.",
  },
  {
    id: "service_pm",
    category: "services",
    keywords: ["project", "management", "delivery"],
    text:
      "Project Management: End-to-end oversight from design through implementation with quality & safeguards.",
  },
  {
    id: "service_meal",
    category: "services",
    keywords: ["meal", "monitoring", "evaluation", "learning"],
    text:
      "MEAL Systems: Monitoring, Evaluation, Accountability & Learning frameworks and tool deployment.",
  },
  {
    id: "service_esia",
    category: "services",
    keywords: ["esia", "audit", "environmental", "social"],
    text:
      "ESIA & Audits: Environmental & Social Impact Assessments and Environmental Audits aligned to regulations.",
  },
  {
    id: "service_esg",
    category: "services",
    keywords: ["esg", "strategy", "materiality", "governance", "reporting"],
    text:
      "ESG Strategy Development: Materiality, governance alignment, KPI definition, investor-grade reporting support.",
  },
  {
    id: "service_gender",
    category: "services",
    keywords: ["gender", "inclusion", "equity"],
    text:
      "Gender & Inclusion Advisory: Embedding gender-responsive and inclusive approaches in mobility & climate programs.",
  },
  {
    id: "service_stakeholder",
    category: "services",
    keywords: ["stakeholder", "capacity", "engagement", "training"],
    text:
      "Stakeholder Engagement & Capacity: Coordinated stakeholder processes and technical capacity building for sustainable adoption.",
  },
  {
    id: "service_bd",
    category: "services",
    keywords: ["business", "consulting", "bid", "partnership"],
    text:
      "Business Development & Consulting: Bid support, partnership structuring, resource mobilization for scaling.",
  },
  {
    id: "service_blueprints",
    category: "services",
    keywords: ["implementation", "blueprint", "rollout", "milestones"],
    text:
      "Implementation Blueprints: Practical rollout plans with milestones, risk tracking & sustainability integration.",
  },
];

const programs: Fact[] = [
  {
    id: "program_mama_mwendo",
    category: "programs",
    keywords: ["mama", "mwendo", "women", "leadership"],
    text:
      "Mama Mwendo: Strengthens women’s participation & leadership in mobility & climate sectors via learning, mentorship & growth community.",
  },
  {
    id: "program_sauti",
    category: "programs",
    keywords: ["sauti", "barabarani", "voices", "community"],
    text:
      "Sauti za Barabarani: Reimagines mobility through inclusion-focused dialogue; surfaces lived experiences & embeds equity & safety.",
  },
  {
    id: "program_smlap",
    category: "programs",
    keywords: ["smlap", "literacy", "adoption", "awareness"],
    text:
      "SMLAP: Promotes awareness & adoption of electric, active & low‑carbon transport options; foundational public knowledge.",
  },
  {
    id: "program_resilient_labs",
    category: "programs",
    keywords: ["resilient", "transport", "labs", "climate", "risk"],
    text:
      "Resilient Transport Labs: Explores climate risks & adaptation pathways; fosters resilience mindset for long-term planning.",
  },
  {
    id: "program_c3",
    category: "programs",
    keywords: ["community", "climate", "champions", "c3"],
    text:
      "Community Climate Champions (C3): Nurtures local leadership via awareness, engagement & community-driven initiatives.",
  },
];

const capacity: Fact[] = [
  {
    id: "capacity_curricula",
    category: "capacity",
    keywords: ["curriculum", "co-creation", "academic"],
    text:
      "Curriculum co-creation with academic & industry partners addressing real-world challenges.",
  },
  {
    id: "capacity_workshops",
    category: "capacity",
    keywords: ["workshop", "training", "session"],
    text:
      "Workshops & Trainings: Interactive capability development across sustainable mobility & climate topics.",
  },
  {
    id: "capacity_mentorship",
    category: "capacity",
    keywords: ["mentorship", "talent", "support"],
    text: "Mentorship Programs: Nurturing emerging talent in the sector.",
  },
  {
    id: "capacity_speaking",
    category: "capacity",
    keywords: ["speaking", "moderation", "events"],
    text:
      "Speaking & Moderation: Sharing expertise & enabling inclusive discourse.",
  },
];

const team: Fact[] = [
  {
    id: "team_evelyn",
    category: "team",
    keywords: ["evelyn", "gathua", "founder", "managing", "director", "md", "ceo", "lead"],
    text:
      "Evelyn Gathua is the Founder and Managing Director of Airisa Green Consulting. She is a licensed NEMA Associate Expert with deep expertise in sustainable mobility, climate resilience, and gender-inclusive transport policy. She has led projects including the Drive Electric Study (WRI), EV readiness assessments (UNEP), and is a member of the Kenya Bureau of Standards Technical Committee TC 199. She has collaborated with GIZ, Siemens Stiftung, and Greenpeace Africa. Contact Evelyn: e.gathua@airisagreenconsulting.com",
  },
  {
    id: "team_anthony",
    category: "team",
    keywords: ["anthony", "ndolo", "co-founder", "strategy", "director", "operations", "who is anthony"],
    text:
      "Anthony Ndolo is the Co-Founder and Director of Strategy & Operations at Airisa Green Consulting. He is a business systems architect with experience in health-tech, logistics-tech, programme design, and organisational scaling across emerging markets. He founded and led Smatbeba — a digital cargo transportation marketplace across East Africa — and served as Chief Operating Officer at EcoWorld Recycling, managing a USAID-supported plastic circular economy initiative. He has worked as a Programs Manager at an Entrepreneurial Support Organisation (ESO). Anthony is a 2025 Dream VC Fellow and focuses on building markets by aligning incentives, systems, and execution. Contact Anthony: a.ndolo@airisagreenconsulting.com | LinkedIn: https://www.linkedin.com/in/anthony-ndolo-58151b87",
  },
];

const partnerAreas: Fact[] = [
  {
    id: "partner_areas",
    category: "partner",
    keywords: ["partner", "collaborate", "fund", "grant"],
    text:
      "Partnership areas: Joint pilot design & implementation, technical collaboration & knowledge exchange, grant applications & donor-funded programming, research & capacity-building partnerships.",
  },
];

const contact: Fact[] = [
  {
    id: "contact_email",
    category: "contact",
    keywords: ["contact", "email", "reach", "write", "message"],
    text:
      "General enquiries: info@airisagreenconsulting.com | Evelyn Gathua (Founder): e.gathua@airisagreenconsulting.com | Anthony Ndolo (Co-Founder): a.ndolo@airisagreenconsulting.com",
  },
  {
    id: "contact_phone",
    category: "contact",
    keywords: ["phone", "call", "number", "ring", "telephone"],
    text:
      "Company phone: +254 738 573 190. Users can call by clicking the phone icon in the footer, or tapping tel:+254738573190.",
  },
  {
    id: "contact_whatsapp",
    category: "contact",
    keywords: ["whatsapp", "chat", "message", "text", "wa"],
    text:
      "WhatsApp: Chat with us directly on WhatsApp at +254 738 573 190. Use the WhatsApp button in the footer or visit https://wa.me/254738573190",
  },
  {
    id: "contact_location",
    category: "contact",
    keywords: ["location", "address", "where", "nairobi", "office", "kenya", "directions"],
    text:
      "Airisa Green Consulting is based in Nairobi, Kenya, East Africa. For directions or to arrange an in-person meeting, please reach out via email or phone first.",
  },
  {
    id: "contact_linkedin",
    category: "contact",
    keywords: ["linkedin", "social", "follow", "connect"],
    text:
      "Follow Airisa Green Consulting on LinkedIn: https://www.linkedin.com/company/airisa-green-consulting/ | Anthony Ndolo on LinkedIn: https://www.linkedin.com/in/anthony-ndolo-58151b87",
  },
];

const general: Fact[] = [
  {
    id: "general_executive",
    category: "general",
    keywords: ["executive", "summary", "hybrid", "model"],
    text:
      "Airisa operates a hybrid model: professional consulting + impact-driven programs empowering communities, informing policy, and fostering inclusive low‑carbon transport systems.",
  },
];

const visionFact: Fact = {
  id: "meta_vision",
  category: "vision",
  keywords: ["vision", "future", "goal", "aim"],
  text: `Vision: ${vision}`,
};

const missionFact: Fact = {
  id: "meta_mission",
  category: "mission",
  keywords: ["mission", "purpose", "objective"],
  text: `Mission: ${mission}`,
};

export const ALL_FACTS: Fact[] = [
  visionFact,
  missionFact,
  ...pillars,
  ...values,
  ...services,
  ...programs,
  ...capacity,
  ...team,
  ...partnerAreas,
  ...contact,
  ...general,
];

export const META = { vision, mission };

// Basic retrieval: score facts by keyword occurrences in prompt.
// --- Enhanced Retrieval (TF-IDF style keyword+token similarity) ---
// We build a lightweight corpus index the first time retrieval is called.
interface IndexedFact {
  fact: Fact;
  tokenFreq: Map<string, number>; // term frequency per fact
}

let INDEX: IndexedFact[] | null = null;
let IDF: Map<string, number> | null = null;

function tokenize(text: string): string[] {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function buildIndex() {
  const docs: IndexedFact[] = ALL_FACTS.map((fact) => {
    // Combine keywords and fact text for richer representation.
    const tokens = [
      ...fact.keywords.map((k) => k.toLowerCase()),
      ...tokenize(fact.text),
    ];
    const freq = new Map<string, number>();
    tokens.forEach((t) => freq.set(t, (freq.get(t) || 0) + 1));
    return { fact, tokenFreq: freq };
  });
  const df = new Map<string, number>();
  docs.forEach((doc) => {
    for (const token of doc.tokenFreq.keys()) {
      df.set(token, (df.get(token) || 0) + 1);
    }
  });
  const totalDocs = docs.length;
  const idf = new Map<string, number>();
  for (const [token, count] of df.entries()) {
    idf.set(token, Math.log((totalDocs + 1) / (count + 1)) + 1); // smoothed IDF
  }
  INDEX = docs;
  IDF = idf;
}

export function retrieveFacts(prompt: string, limit = 3): Fact[] {
  if (!INDEX || !IDF) buildIndex();
  const queryTokens = tokenize(prompt);
  if (queryTokens.length === 0) return [];
  // Query term frequency
  const qFreq = new Map<string, number>();
  queryTokens.forEach((t) => qFreq.set(t, (qFreq.get(t) || 0) + 1));
  // Compute query vector magnitude components (TF-IDF)
  const qWeights = new Map<string, number>();
  for (const [token, tf] of qFreq.entries()) {
    const idf = IDF!.get(token) || 1;
    qWeights.set(token, tf * idf);
  }

  const scored = INDEX!.map((doc) => {
    let dot = 0;
    let docMagSq = 0;
    for (const [token, tf] of doc.tokenFreq.entries()) {
      const weight = tf * (IDF!.get(token) || 1);
      docMagSq += weight * weight;
      const qWeight = qWeights.get(token);
      if (qWeight) dot += qWeight * weight;
    }
    const qMagSq = Array.from(qWeights.values()).reduce(
      (acc, w) => acc + w * w,
      0,
    );
    const denom = Math.sqrt(docMagSq) * Math.sqrt(qMagSq) || 1;
    const score = dot / denom;
    return { fact: doc.fact, score };
  }).filter((s) => s.score > 0.05); // small threshold to cut noise

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.fact);
}

export function retrieveContext(prompt: string): string {
  const facts = retrieveFacts(prompt, 6);
  if (facts.length === 0) return "";
  return facts.map((f) => `- ${f.text}`).join("\n");
}

export function classifyIntent(prompt: string): string {
  const p = prompt.toLowerCase();
  if (/vision/.test(p)) return "vision";
  if (/mission/.test(p)) return "mission";
  if (/pillar|approach|insight|strategy|sustainability/.test(p)) {
    return "pillars";
  }
  if (/service|offer|capability/.test(p)) return "services";
  if (/program|mama|mwendo|sauti|smlap|resilient|lab|c3/.test(p)) {
    return "programs";
  }
  if (/team|evelyn|anthony|founder/.test(p)) return "team";
  if (/partner|collaborate|grant|donor/.test(p)) return "partner";
  if (/contact|email|location|address|reach|where/.test(p)) return "contact";
  if (/value|principle|culture/.test(p)) return "values";
  return "general";
}

export function buildAnswer(prompt: string): string {
  const intent = classifyIntent(prompt);
  if (intent === "vision") return `🌍 Vision: ${vision}`;
  if (intent === "mission") return `🚀 Mission: ${mission}`;
  const facts = retrieveFacts(prompt, 4);
  if (facts.length === 0) {
    return "I didn't find a direct match in our profile. You can ask about Vision, Mission, Pillars, Services, Programs like 'Tell me about SMLAP', or Team members like Evelyn.";
  }
  const headerEmoji: Record<string, string> = {
    pillars: "🧭",
    services: "🛠️",
    programs: "🎯",
    capacity: "📘",
    team: "👥",
    partner: "🤝",
    contact: "📬",
    values: "✨",
    general: "🌿",
  };
  const intro = headerEmoji[intent] + " " + intent.charAt(0).toUpperCase() +
    intent.slice(1) + ":";
  const body = facts.map((f) => `• ${f.text}`).join("\n");
  // Low-fact fallback linking
  let linkSuggestion = "";
  if (facts.length < 2) {
    const pathMap: Record<string, string> = {
      pillars: "/about",
      services: "/services",
      programs: "/programs",
      team: "/team",
      partner: "/partner",
      contact: "/contact",
      values: "/about",
      general: "/index",
      capacity: "/programs",
    };
    const path = pathMap[intent] || "/";
    linkSuggestion = `\nMore details: ${path}`;
  }
  const suggestions =
    "Ask: 'What is your mission?', 'Programs overview', 'Partner options', or 'Tell me about Anthony'.";
  return `${intro}\n${body}${linkSuggestion}\n\n${suggestions}`;
}
