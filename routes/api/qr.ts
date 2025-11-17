import { Handlers } from "$fresh/server.ts";
import QRCode from "https://esm.sh/qrcode@1.5.3";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const data = url.searchParams.get("data") ??
      "https://airisagreenconsulting.com";
    const size = Math.max(
      64,
      Math.min(4096, Number(url.searchParams.get("size") ?? 512)),
    );
    const margin = Math.max(
      0,
      Math.min(10, Number(url.searchParams.get("margin") ?? 2)),
    );
    // Type is fixed to SVG for server-side generation
    // const _type = (url.searchParams.get("type") ?? "svg").toLowerCase();

    try {
      // Generate SVG (works server-side without canvas)
      const svg = await QRCode.toString(data, {
        type: "svg",
        margin,
        width: size,
        color: { dark: "#000000", light: "#ffffff" },
      });
      return new Response(svg, {
        headers: {
          "Content-Type": "image/svg+xml; charset=utf-8",
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch (err) {
      console.error("QR generation error:", err);
      return new Response("Failed to generate QR", { status: 500 });
    }
  },
};
