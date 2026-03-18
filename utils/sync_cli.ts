import { syncLinkedInPosts } from "./insights_sync.ts";

/**
 * CLI Entry point for LinkedIn Sync
 */
if (import.meta.main) {
  try {
    await syncLinkedInPosts();
    Deno.exit(0);
  } catch (error) {
    console.error("Sync failed:", error);
    Deno.exit(1);
  }
}
