import { getAllDynamicInsights } from "../utils/insights_kv.ts";

const insights = await getAllDynamicInsights();
console.log(`Found ${insights.length} insights in KV:`);
insights.forEach((ins, i) => {
  console.log(
    `${i + 1}. ${ins.title} (Has Extended: ${!!ins.extendedContent})`,
  );
});
Deno.exit(0);
