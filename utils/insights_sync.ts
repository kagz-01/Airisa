import {
  TransformedInsight,
  transformLinkedInToInsight,
} from "./insights_ai.ts";
import { saveInsight } from "./insights_kv.ts";

/**
 * Orchestrator for LinkedIn Sync.
 */

/**
 * Helper to rehost social images locally for permanence.
 */
async function rehostImage(url: string, id: string): Promise<string> {
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

  // Create cache dir if it doesn't exist
  try {
    await Deno.mkdir("static/insights_cache", { recursive: true });
  } catch (_) {
    // Ignore if exists
  }

  const realPosts = [
    {
      id: "li_post_roadmap_2026",
      title:
        "From Convergence to Action: A Policy Roadmap for Africa’s E-Mobility Transition",
      text:
        "In Part 1, we explored how the convergence of ESG frameworks and the African Continental Free Trade Area (AfCFTA) is creating unprecedented conditions for Africa’s e-mobility transition. But convergence alone does not guarantee transformation. Bridging the gap between strategic alignment and real-world impact requires deliberate, coordinated action across policy, infrastructure, finance, and human capital.",
      extendedContent:
        "The Implementation Reality Check. Despite the compelling strategic case, several structural barriers persist.\n\n1. The infrastructure paradox. Nearly 600 million Africans still lack electricity. At first glance, this raises a fundamental question: how can charging networks be deployed without reliable power? Yet this challenge also presents a strategic opportunity for Africa to leapfrog directly into distributed, renewable-powered charging systems, integrating solar and mini-grids as core components of e-mobility infrastructure from the outset.",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D12AQFRdDcFOaK06g/article-cover_image-shrink_720_1280/B4DZvbGjOaIgAM-/0/1768907507434?e=2147483647&v=beta&t=vHze1NDmckSyer5gkKrxnSTDEwO6xvLc7PyauNHearA",
      post_url:
        "https://www.linkedin.com/pulse/from-convergence-action-policy-roadmap-africas-transition-airisa-green-consulting/",
      timestamp: 1737417600000,
      part: "2",
      seriesTitle: "Policy Roadmap for Africa",
    },
    {
      id: "li_post_esg_2026",
      title: "ESG, AfCFTA and the Future of Africa's E-Mobility Transition",
      text:
        "Three powerful forces are reshaping Africa's industrial and environmental future: Environmental, Social and Governance (ESG) frameworks, the AfCFTA, and the global shift to electric mobility. At their intersection lies a transformative opportunity for Africa’s mobility systems, one that goes beyond cleaner vehicles to redefine industrialization, trade, and investment pathways.",
      extendedContent:
        "1. The AfCFTA: Creating the Policy and Market Foundation. The AfCFTA connects over 1.3 billion people into a single economic bloc, opening new possibilities for e-mobility scale and integration.\n\nRegional value chains become viable: Rather than each country trying to build complete EV ecosystems independently, AfCFTA enables specialization, e.g., lithium extraction and processing in the DRC, battery assembly in South Africa, vehicle assembly in Kenya, software development in Rwanda, and deployment across the continent. Materials and components flow efficiently under harmonized trade rules rather than hitting tariff walls at every border.",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D12AQGPlmJvP_O_lg/article-cover_image-shrink_720_1280/B4DZvGbx5bKoAI-/0/1768560745058?e=2147483647&v=beta&t=yuE1-5IglFRWdzsrL3bo9buznjA58RpHiiMbGzuS5r8",
      post_url:
        "https://www.linkedin.com/pulse/esg-afcfta-future-africas-e-mobility-transition-airisa-green-consulting/",
      timestamp: 1736985600000,
      part: "1",
      seriesTitle: "Policy Roadmap for Africa",
    },
    {
      id: "li_post_women_2025",
      title: "Why Women's Mobility Needs Matter",
      text:
        "We have often heard that transport is not gender-neutral—but what does this really mean? It means that men and women experience transportation systems differently. They travel at different times, for different reasons, and face different dangers. Yet, most transport systems remain designed for a “typical” commuter: a man traveling from home to work in the morning and returning in the evening.",
      extendedContent:
        "For millions of women in Kenya and Mozambique, this model simply doesn’t fit. Women’s mobility is shaped by care responsibilities, safety fears, and access barriers that profoundly affect their ability to move freely and safely. When mobility is compromised, so too is women’s access to education, healthcare, and livelihoods.\n\n1) The Complex Reality of Women’s Mobility. Women’s travel patterns are distinct. They engage in trip chaining, i.e., making multiple short trips for different purposes within a single journey: dropping children at school, visiting clinics, buying or selling goods at the market, and then heading to work. This reflects women’s broader roles in caregiving and household management.",
      image_url:
        "https://media.licdn.com/dms/image/v2/D4D12AQHV0PxzoRvqVw/article-cover_image-shrink_720_1280/B4DZpdA43sGsAI-/0/1762497107517?e=2147483647&v=beta&t=GweAd_7C5yBwfHFQfJnYLAWrTpb15KeNwAeXJVIls4s",
      post_url:
        "https://www.linkedin.com/pulse/why-womens-mobility-needs-matter-airisa-green-consulting/",
      timestamp: 1730937600000,
    },
  ];

  for (const post of realPosts) {
    const transformed = await transformLinkedInToInsight(post);

    if (transformed.image) {
      transformed.image = await rehostImage(transformed.image, transformed.id);
    }

    // Pass along extended metadata
    const finalInsight = {
      ...transformed,
      extendedContent: post.extendedContent,
      part: "part" in post ? post.part : undefined,
      seriesTitle: "seriesTitle" in post ? post.seriesTitle : undefined,
    };

    await saveInsight(finalInsight);
  }

  console.log("LinkedIn sync completed.");
}
