import { Handlers } from "$fresh/server.ts";
import { isSubscribed, unsubscribe } from "../../utils/newsletter_kv.ts";

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

      const active = await isSubscribed(email);
      if (!active) {
        return new Response(
          JSON.stringify({ error: "We couldn't find this email in our active briefing list. You may have already unsubscribed or were never registered." }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      await unsubscribe(email);

      return new Response(
        JSON.stringify({ message: "You have been unsubscribed ✅" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } catch (_err) {
      return new Response(JSON.stringify({ error: "Failed to unsubscribe" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
