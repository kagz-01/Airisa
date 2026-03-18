import { transformLinkedInToInsight } from "./insights_ai.ts";
import { clearAllInsights, DynamicInsight, saveInsight } from "./insights_kv.ts";

/**
 * Orchestrator for LinkedIn Sync.
 */

/**
 * Helper to rehost social images locally for permanence.
 */
async function rehostImage(url: string, id: string): Promise<string> {
  if (url.startsWith("/")) return url;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const fileName = `insight_${id}.jpg`;
    const filePath = `static/insights_cache/${fileName}`;

    await Deno.writeFile(filePath, new Uint8Array(buffer));
    return `/insights_cache/${fileName}`;
  } catch (error) {
    console.error(
      "Image rehosting failed, falling back to original URL:",
      error,
    );
    return url;
  }
}

export async function syncLinkedInPosts(_api_key?: string) {
  console.log("Starting LinkedIn sync...");

  // Clear stale data to ensure "True Synch"
  await clearAllInsights();

  // Purge and recreate cache dir to ensure "True Synch" and remove irrelevant work
  try {
    await Deno.remove("static/insights_cache", { recursive: true });
  } catch (_) {
    // Ignore if doesn't exist
  }
  await Deno.mkdir("static/insights_cache", { recursive: true });

  const realPosts = [
    {
      id: "li_post_masterclass_2026",
      title: "𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗹𝗲 𝗠𝗼𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗠𝗮𝘀𝘁𝗲𝗿𝗰𝗹𝗮𝘀𝘀: 𝗗𝗲𝘀𝗶𝗴𝗻𝗶𝗻𝗴 𝗘-𝗺𝗼𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀 𝗶𝗻 𝗔𝗳𝗿𝗶𝗰𝗮: 𝗙𝗿𝗼𝗺 𝗜𝗱𝗲𝗮 𝘁𝗼 𝗜𝗺𝗽𝗮𝗰𝘁",
      type: "Image" as const,
      text:
        "Designing E-mobility Projects in Africa: From Idea to Impact",
      extendedContent:
        "Over the past few years, interest in #electric mobility in Africa has grown rapidly. Yet many promising ideas struggle to move from concept to implementation. At Airisa Green Consulting, we believe that strong #projectdesign and #management are critical to turning sustainable mobility ideas into real impact.\n\nWe are therefore excited to announce our first upcoming 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗹𝗲 𝗠𝗼𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗠𝗮𝘀𝘁𝗲𝗿𝗰𝗹𝗮𝘀𝘀: 𝗗𝗲𝘀𝗶𝗴𝗻𝗶𝗻𝗴 𝗘-𝗺𝗼𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀 𝗶𝗻 𝗔𝗳𝗿𝗶𝗰𝗮: 𝗙𝗿𝗼𝗺 𝗜𝗱𝗲𝗮 𝘁𝗼 𝗜𝗺𝗽𝗮𝗰𝘁!\n\n📅 𝗙𝗿𝗶𝗱𝗮𝘆, 𝗠𝗮𝗿𝗰𝗵 𝟮𝟳, 𝟮𝟬𝟮𝟲\n⏰ 𝟭𝟭:𝟬𝟬 𝗔𝗠 – 𝟭𝟮:𝟯𝟬 𝗣𝗠 (𝗘𝗔𝗧)\n𝗢𝗻𝗹𝗶𝗻𝗲 𝘃𝗶𝗮 𝗠𝗶𝗰𝗿𝗼𝘀𝗼𝗳𝘁 𝗧𝗲𝗮𝗺𝘀\n\nParticipants will gain insights on: \n✅ Turning sustainable mobility ideas into structured projects\n✅ Designing initiatives that deliver climate and social impact\n✅ Key considerations when implementing e-mobility programs in African cities.\n\nRegister here: http://bit.ly/4loqxoW",
      image_url: "/li_masterclass.jpg",
      post_url:
        "https://www.linkedin.com/posts/airisa-green-consulting_electric-projectdesign-management-activity-7439218390541672450-yEgf",
      timestamp: 1742121068000, 
    },
    {
      id: "li_post_roadmap_2026",
      title:
        "From Convergence to Action: A Policy Roadmap for Africa’s E-Mobility Transition",
      type: "Article" as const,
      text:
        "In Part 2, we explore how bridging the gap between strategic alignment and real-world impact requires deliberate, coordinated action across policy, infrastructure, finance, and human capital.",
      extendedContent:
        "We explored how the convergence of ESG frameworks and the African Continental Free Trade Area (AfCFTA) is creating unprecedented conditions for Africa’s e-mobility transition. But convergence alone does not guarantee transformation. Key themes: Infrastructure paradox, leapfrogging into distributed renewable systems, and regional value chains.",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D12AQFRdDcFOaK06g/article-cover_image-shrink_720_1280/B4DZvbGjOaIgAM-/0/1768907507434?e=2147483647&v=beta&t=vHze1NDmckSyer5gkKrxnSTDEwO6xvLc7PyauNHearA",
      post_url:
        "https://www.linkedin.com/pulse/from-convergence-action-policy-roadmap-africas-transition-airisa-green-consulting-wzq3f",
      timestamp: 1737417600000,
      part: "2",
      seriesTitle: "Policy Roadmap for Africa",
    },
    {
      id: "li_post_esg_2026",
      title: "ESG, AfCFTA and the Future of Africa's E-Mobility Transition",
      type: "Article" as const,
      text:
        "Three powerful forces are reshaping Africa's industrial and environmental future: Environmental, Social and Governance (ESG) frameworks, the AfCFTA, and the global shift to electric mobility.",
      extendedContent:
        "The AfCFTA connects over 1.3 billion people into a single economic bloc, opening new possibilities for e-mobility scale and integration. Regional value chains become viable: specialization across DRC, South Africa, Kenya, and Rwanda.",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D12AQGPlmJvP_O_lg/article-cover_image-shrink_720_1280/B4DZvGbx5bKoAI-/0/1768560745058?e=2147483647&v=beta&t=yuE1-5IglFRWdzsrL3bo9buznjA58RpHiiMbGzuS5r8",
      post_url:
        "https://www.linkedin.com/pulse/esg-afcfta-future-africas-e-mobility-transition-njzvf",
      timestamp: 1736985600000,
      part: "1",
      seriesTitle: "Policy Roadmap for Africa",
    },
    {
      id: "li_post_diagnostic_2025",
      title: "Baseline Diagnostic Framework for African Mobility",
      type: "Document" as const,
      text: "A structured approach to early-stage program scoping: context, actors, enabling policy, and data maturity.",
      extendedContent: "Our diagnostic framework ensures that mobility interventions are evidence-based and contextually relevant. We map existing power dynamics, regulatory hurdles, and infrastructure gaps before proposing any technical solution.",
      image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      post_url: "https://www.linkedin.com/pulse/baseline-diagnostic-framework-mobility-airisa-green-consulting-njzvf",
      timestamp: 1735689600000,
    },
    {
      id: "li_post_data_stack_2025",
      title: "Multi-Source Mobility Data Stack for African Cities",
      type: "Document" as const,
      text: "Combining surveys, sensor feeds, open standards, and participatory mapping for richer transit intelligence.",
      extendedContent: "Data is the lifeblood of sustainable mobility. By combining diverse sources, we create a 'Data Stack' that reflects the lived experience of millions, not just the mapped routes of a few.",
      image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      post_url: "https://www.linkedin.com/pulse/multi-source-mobility-data-stack-africa-airisa-green-consulting-zefqf",
      timestamp: 1735257600000,
    },
    {
      id: "li_post_risk_2025",
      title: "Risk & Safeguards Matrix for Transport Interventions",
      type: "Document" as const,
      text: "Mapping environmental and social vectors to mitigation pathways across diverse transport interventions.",
      extendedContent: "Sustainability requires proactive risk management. Our matrix maps potential harms and defines clear safeguards to protect both the environment and the communities we serve.",
      image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      post_url: "https://www.linkedin.com/pulse/risk-safeguards-matrix-transport-airisa-green-consulting-njzvf",
      timestamp: 1734825600000,
    },
    {
      id: "li_post_women_2025",
      title: "Why Women's Mobility Needs Matter",
      type: "Article" as const,
      text:
        "We have often heard that transport is not gender-neutral—but what does this really mean? It means that men and women experience transportation systems differently.",
      extendedContent:
        "For millions of women in Kenya and Mozambique, the traditional commuter model simply doesn’t fit. Women’s mobility is shaped by care responsibilities, safety fears, and access barriers.",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D12AQHV0PxzoRvqVw/article-cover_image-shrink_720_1280/B4DZpdA43sGsAI-/0/1762497107517?e=2147483647&v=beta&t=GweAd_7C5yBwfHFQfJnYLAWrTpb15KeNwAeXJVIls4s",
      post_url:
        "https://www.linkedin.com/pulse/why-womens-mobility-needs-matter-airisa-green-consulting-zefqf",
      timestamp: 1730937600000,
    },
  ];

  for (const post of realPosts) {
    const transformed = await transformLinkedInToInsight(post);

    if (transformed.image) {
      transformed.image = await rehostImage(transformed.image, transformed.id);
    }

    // Pass along extended metadata
    const finalInsight: DynamicInsight = {
      ...transformed,
      extendedContent: post.extendedContent,
      type: post.type as DynamicInsight["type"],
      part: "part" in post ? post.part : undefined,
      seriesTitle: "seriesTitle" in post ? post.seriesTitle : undefined,
    };

    await saveInsight(finalInsight);
  }

  console.log("LinkedIn sync completed.");
}
