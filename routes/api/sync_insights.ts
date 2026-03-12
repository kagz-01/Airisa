import { Handlers } from "$fresh/server.ts";
import { syncLinkedInPosts } from "../../utils/insights_sync.ts";

export const handler: Handlers = {
  async POST(req) {
    // Basic protection: check for a secret header if provided in env
    const secret = Deno.env.get("SYNC_SECRET");
    const receivedSecret = req.headers.get("x-sync-secret");

    if (secret && secret !== receivedSecret) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      await syncLinkedInPosts();
      return new Response(
        JSON.stringify({ success: true, message: "Sync triggered" }),
        {
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (error) {
      console.error("Sync failed:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
};
