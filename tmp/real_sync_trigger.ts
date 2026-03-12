import { syncLinkedInPosts } from "../utils/insights_sync.ts";
import { clearAllInsights } from "../utils/insights_kv.ts";

console.log("Cleaning up old mock data...");
try {
  await clearAllInsights();
  console.log("Database cleared.");

  console.log("Triggering real-time sync with extracted LinkedIn posts...");
  await syncLinkedInPosts();
  console.log("Real-time sync completed successfully.");
} catch (e) {
  console.error("Sync process failed:", e);
  Deno.exit(1);
}
Deno.exit(0);
