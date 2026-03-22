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
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      }
    });
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

/**
 * Main sync function.
 */
export async function syncLinkedInPosts() {
  console.log("Starting LinkedIn sync...");

  // Purge old assets from cache
  const cacheDir = "static/insights_cache";
  try {
    await Deno.remove(cacheDir, { recursive: true });
    console.log("Cache purged.");
  } catch (_e) {
    // ignore if not exists
  }
  await Deno.mkdir(cacheDir, { recursive: true });

  // Clear KV database
  await clearAllInsights();

  /**
   * Verified Airisa Content Catalog (True Synch)
   */
  const realPosts = [
    // --- IMAGES ---
    {
      id: "li_post_masterclass_2026",
      title: "𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗹𝗲 𝗠𝗼𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗠𝗮𝘀𝘁𝗲𝗿𝗰𝗹𝗮𝘀𝘀",
      type: "Image" as const,
      text: "Designing E-mobility Projects in Africa: From Idea to Impact",
      extendedContent: "Join our masterclass on Friday, March 27, 2026. Learn how to transform mobility ideas into climate and social impact.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQG4o2nLxSJcgA/feedshare-shrink_2048_1536/B4DZz1ptK9GsAg-/0/1773647877138?e=1775692800&v=beta&t=H3LGYivLtw1QOCZCtOaymHFDqHy-IOf3qb_k5Ac3xz0",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_electric-projectdesign-management-activity-7439218390541672450-yEgf",
      timestamp: 1773648000000,
    },
    {
      id: "li_post_mentorship",
      title: "Passing the Torch: Mentorship for Future Leaders",
      type: "Image" as const,
      text: "Mentorship is at the heart of Airisa's mission to empower the next generation of sustainability leaders.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQGXYn1yOq8KNA/feedshare-shrink_800/B4DZq_c8gzGkAg-/0/1764148656508?e=1775692800&v=beta&t=D-l0wp21Yncsae51dSet2zax8yRRB27bzMgX59kcih4",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_wyreday2-mentorship-passing-activity-7399375777005453312-rzkT",
      timestamp: 1739937600000,
    },
    {
      id: "li_post_mazingira",
      title: "Mazingira Day: Climate Action & Sustainability",
      type: "Image" as const,
      text: "Celebrating environmental stewardship and the community-led initiatives driving green change in Kenya.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQGQ0uqOFevd2w/feedshare-shrink_2048_1536/B4DZnNx1h6GwA4-/0/1760094039050?e=2147483647&v=beta&t=Fj9wnTpRkniRkZmZJdN4Cpc6dng4vgzotW2JiZk1ls4",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_mazingiraday-climateaction-sustainability-activity-7382369472566673409-8djN",
      timestamp: 1738236900000,
    },
    {
      id: "li_post_inclusion",
      title: "Inclusive Design: Mobility for Pregnant Parents & Elderly",
      type: "Image" as const,
      text: "Addressing the specific challenges faced by vulnerable groups in urban transit systems.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQEw-UXRzI-m5A/feedshare-shrink_1280/B4DZin0cOiGgAk-/0/1755162203881?e=2147483647&v=beta&t=SMhBkfqn5jcyg8NganrKivG1oWQuutk9oYrO0dId4DU",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_pregnant-parents-elderly-activity-7361683862751457280-5NlN",
      timestamp: 1736168400000,
    },
    {
      id: "li_post_challenges",
      title: "Distinct Challenges & Opportunities in Emerging Markets",
      type: "Image" as const,
      text: "Navigating the unique policy and infrastructure landscapes of sub-Saharan Africa.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQGDbO82Ym6UbQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733165421206?e=2147483647&v=beta&t=w7z6fbzmx2MUdAeUAWIq5oKaGeTi-7POViQEHnCFdXw",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_distinct-challenges-opportunities-activity-7269422663440232448-PhPI",
      timestamp: 1726942200000,
    },
    {
      id: "li_post_global",
      title: "Europe, Africa & Asia: Parallel Transitions",
      type: "Image" as const,
      text: "Comparative insights on the global shift toward low-carbon mobility systems.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQGS6dpAzjM8DA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732189511502?e=2147483647&v=beta&t=sHiBZ0PIT5ClUCPlFXe1B10enhiF2uUgObfomqKXMHA",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_europe-africa-asia-activity-7265329403163725825-bcmw",
      timestamp: 1726532900000,
    },
    {
      id: "li_post_future",
      title: "e-Mobility & The Future of African Transport",
      type: "Image" as const,
      text: "Smart cities and sustainable transit: the roadmap for 2030 and beyond.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQGjRehiqSpu8w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726749205350?e=2147483647&v=beta&t=C-b-1o7uGZnSQG_zHdr0wZMgJ4rkxvlwtRpVzPWK1Mo",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_electricmobility-futureoftransport-smartcities-activity-7242511104961114113-HZ90",
      timestamp: 1724251100000,
    },
    {
      id: "li_post_asi",
      title: "The ASI Framework: Avoid, Shift, Improve",
      type: "Image" as const,
      text: "Breaking down the core strategic pillar for sustainable transport planning.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D22AQFs-Ymu-8oDpw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1724841677084?e=2147483647&v=beta&t=2hdRhzsCZ7IWVfCUegy3qCwRm2bu5KmOPFdjzx3Cs5A",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_avoid-shift-improve-activity-7234510352019845120-JWl4",
      timestamp: 1723451000000,
    },

    // --- ARTICLES ---
    {
      id: "li_art_ambition",
      title: "e-Mobility: From Ambition to Implementation",
      type: "Article" as const,
      text: "Strategic notes on the gap between government vision and real-world implementation.",
      image_url: "/insights_manual/kenya_policy_cover.jpg",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_emobility-ambition-implementation-activity-7419620063760056320-ZY-G",
      timestamp: 1741962000000,
    },
    {
      id: "li_art_esg",
      title: "ESG, AfCFTA and the African Industrial Future",
      type: "Article" as const,
      text: "How Environmental, Social, and Governance frameworks are reshaping trade under the AfCFTA.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQGPlmJvP_O_lg/article-cover_image-shrink_720_1280/B4DZvGbx5bKoAI-/0/1768560745058?e=2147483647&v=beta&t=yuE1-5IglFRWdzsrL3bo9buznjA58RpHiiMbGzuS5r8",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_esg-african-afcfta-activity-7417883104360452097-5NwG",
      timestamp: 1741788300000,
    },
    {
      id: "li_art_ken_moz",
      title: "Gender-Responsive Transport: Kenya & Mozambique",
      type: "Article" as const,
      text: "Field intelligence and Comparative analysis of gendered mobility patterns in two key markets.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQHV0PxzoRvqVw/article-cover_image-shrink_720_1280/B4DZpdA43sGsAI-/0/1762497107517?e=2147483647&v=beta&t=GweAd_7C5yBwfHFQfJnYLAWrTpb15KeNwAeXJVIls4s",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_kenya-mozambique-genderresponsive-activity-7392465949280587776-qLfo",
      timestamp: 1739246600000,
    },
    {
      id: "li_art_urban",
      title: "Urban Expansion & Rising Motorization in African Cities",
      type: "Article" as const,
      text: "Assessing the impact of rapid growth on transit emissions and congestion.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQG_xlyWFq_BTg/article-cover_image-shrink_720_1280/B4DZYRg._oHAAQ-/0/1744050583383?e=2147483647&v=beta&t=iGNQZQqEf_iO3424QbmF6Iaqfwylqj5UE_ZhkOSgUo0",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_urbanexpansion-risingmotorization-assess-activity-7315267245004234752-s25m",
      timestamp: 1731526700000,
    },
    {
      id: "li_art_resilient",
      title: "Climate Resilient Transport in Africa: Leveraging Tech",
      type: "Article" as const,
      text: "How digitalization and IoT are building resilience in infrastructure.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQF2wauHSm3MQA/article-cover_image-shrink_720_1280/B4DZWLfuS8HYAI-/0/1741802107359?e=2147483647&v=beta&t=n8fEaByfACtgD6NCaVd-396qY8VPmnwjcN1OzQhbxMs",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_climateresilienttransportinafrica-leveragingtechnology-activity-7305845096346771456-Tonj",
      timestamp: 1730584500000,
    },
    {
      id: "li_art_res_part3",
      title: "Climate Resilience in Africa: Ethiopia Insights",
      type: "Article" as const,
      text: "Part 3: Exploring the unique topography and policy challenges of Ethiopia's transit shift.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQHaCm0QmwrHrg/article-cover_image-shrink_720_1280/B4DZVDg_7oG4AI-/0/1740594489290?e=2147483647&v=beta&t=WhJr1Az9u0q1-yFVT7aNVXGc3j2Pt6zv_f_BosQf7dI",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_part3-climateresilienttransportinafrica-ethiopia-activity-7300767867359105024-BYTm",
      timestamp: 1730076800000,
      part: "3",
    },
    {
      id: "li_art_res_part2",
      title: "Climate Resilience: Lagos Urban Impact",
      type: "Article" as const,
      text: "Part 2: Addressing floods and congestion in Nigeria's largest megalopolis.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQGg8lopjwBLvg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1739119589964?e=2147483647&v=beta&t=Rl2afKMZ7PP6RoNLYPm2cHG2wcE56cdmjIBGQ7Z-bVo",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_part2-lagos-impact-activity-7294611108097593344-GjJv",
      timestamp: 1729461100000,
      part: "2",
    },
    {
      id: "li_art_res_main",
      title: "Building Climate-Resilient Infrastructure",
      type: "Article" as const,
      text: "A foundational look at safeguarding transport from climate shocks.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQH2UTTbqSMruQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736932290061?e=2147483647&v=beta&t=S8y9FzWF_h1psp8-q4HAgNsCj-HqykIYwAo16XKqdUM",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_2nd-climateresilienttransportinafrica-activity-7285230715439374336-icUC",
      timestamp: 1728523100000,
    },
    {
      id: "li_art_gender_main",
      title: "Understanding Gender in African Transport Systems",
      type: "Article" as const,
      text: "Why mobility is not gender-neutral: a policy deep-dive.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQELK7pNoLydBw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736418751202?e=2147483647&v=beta&t=8MEX1FEXxmrc2dM7al2iXJX1WE-Cueefhh_rwSNKN_8",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_understandinggenderinafricantransport-activity-7283073997947232256-1eX6",
      timestamp: 1728307400000,
    },
    {
      id: "li_art_gender_part3",
      title: "The Gendered City: African Perspectives",
      type: "Article" as const,
      text: "Part 3: Practical solutions for inclusive station design and planning.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQEFJbv7HjDivg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1734630019143?e=2147483647&v=beta&t=VUacR7Ws1lpkzPKFJGJXeTamcz0MLjTRjF1fmuJnYN0",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_part3-gender-transport-activity-7275759366903918592-3fr4",
      timestamp: 1727575900000,
      part: "3",
    },
    {
      id: "li_art_women_safety",
      title: "Addressing Safety Challenges for Women in Transit",
      type: "Article" as const,
      text: "Assessing the social barriers to equitable mobility.",
      image_url: "https://media.licdn.com/dms/image/v2/D4D12AQFlaFmFA70trQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1734420803885?e=2147483647&v=beta&t=n11AUqOKJG7v7VlgftP0P3bjBBDkXSwcfsqZXgHLZm0",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_women-safety-challenges-activity-7274692641047392256-kNkk",
      timestamp: 1727469300000,
    },
    {
      id: "li_art_zero_promise",
      title: "Beneath the Promise of Zero-Emission Transit",
      type: "Article" as const,
      text: "Beyond technical specs: understanding the social and economic shifts of electrified transport.",
      image_url: "https://media.licdn.com/dms/image/v2/D4E12AQGU1yzrBeCIyA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732703038395?e=2147483647&v=beta&t=VJ0CHEEUEQ0D689w3wcd4roIVWQEXitZAcjJdXko-YU",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_beneath-the-promise-of-zero-emission-transportation-activity-7267486548894404610-nhWU",
      timestamp: 1726748700000,
    },

    // --- DOCUMENTS ---
    {
      id: "li_doc_kenya_policy",
      title: "Kenya's National Electric Mobility Policy",
      type: "Document" as const,
      text: "A defining milestone in the country’s transition toward cleaner, more efficient, and climate-resilient transport. The policy sets out a comprehensive framework to accelerate EV adoption and expand charging infrastructure.",
      extendedContent: "Importantly, #PolicyStatement12 commits the Government to enhancing gender equality and social inclusion in the e-Mobility ecosystem: a critical step toward ensuring that the transition is not only green but equitable.",
      image_url: "/insights_manual/kenya_policy_cover.jpg",
      file_url: "/documents/kenya_emobility_policy.pdf",
      post_url: "https://www.linkedin.com/posts/airisa-green-consulting_kenyas-national-electric-mobility-policy-activity-7427334967136870402-SlMd",
      timestamp: 1742733500000,
    },
  ];

  for (const post of realPosts as any[]) {
    console.log(`Processing [${post.type}]: ${post.title}`);
    
    // Auto-transform logic
    const insight: DynamicInsight = {
      id: post.id,
      title: post.title,
      summary: post.text,
      extendedContent: post.extendedContent || post.text,
      pillar: "Insight", // Default
      image: await rehostImage(post.image_url, post.id),
      href: post.post_url,
      type: post.type as DynamicInsight["type"],
      timestamp: post.timestamp,
      part: post.part,
      fileUrl: post.file_url,
    };

    await saveInsight(insight);
  }

  console.log("LinkedIn sync completed.");
}
