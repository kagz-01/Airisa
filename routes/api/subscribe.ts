import { Handlers } from "$fresh/server.ts";
import { subscribe } from "../../utils/newsletter_kv.ts";

export const handler: Handlers = {
  async POST(req) {
    try {
      const { email } = await req.json();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return new Response(JSON.stringify({ error: "Invalid email address" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      await subscribe(email);

      return new Response(
        JSON.stringify({ message: "Subscription successful ✅" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (_err) {
      return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
