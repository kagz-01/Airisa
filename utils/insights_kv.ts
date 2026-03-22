/// <reference lib="deno.unstable" />

/**
 * Deno KV storage layer for LinkedIn dynamic insights.
 */

export interface DynamicInsight {
  id: string; // LinkedIn post ID or hash
  title: string;
  summary: string;
  extendedContent?: string; // Larger portion of the story
  pillar: "Insight" | "Strategy" | "Sustainability";
  image?: string;
  href: string; // Original LinkedIn post URL
  type: "Post" | "Article" | "Narrative" | "Image" | "Video" | "Document";
  timestamp: number;
  part?: string; // e.g. "Part 1"
  seriesTitle?: string; // e.g. "Policy Roadmap for Africa"
  fileUrl?: string; // Local PDF path for downloads
}

let kvInstance: Deno.Kv | null = null;

async function getKv() {
  if (typeof Deno.openKv !== "function") {
    console.warn(
      "Deno.openKv is not available. Falling back to static content. (Hint: run with --unstable-kv)",
    );
    return null;
  }
  if (!kvInstance) {
    kvInstance = await Deno.openKv();
  }
  return kvInstance;
}

export async function saveInsight(insight: DynamicInsight) {
  const kv = await getKv();
  if (!kv) return;
  await kv.set(["insights", insight.id], insight);
}

export async function getAllDynamicInsights(): Promise<DynamicInsight[]> {
  const kv = await getKv();
  if (!kv) return [];
  const iter = kv.list<DynamicInsight>({ prefix: ["insights"] });
  const insights: DynamicInsight[] = [];
  for await (const res of iter) {
    insights.push(res.value);
  }
  return insights.sort((a, b) => b.timestamp - a.timestamp);
}

export async function clearAllInsights() {
  const kv = await getKv();
  if (!kv) return;
  const iter = kv.list({ prefix: ["insights"] });
  for await (const res of iter) {
    await kv.delete(res.key);
 }
}
