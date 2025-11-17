import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL("/services", req.url);
    return Response.redirect(url, 301);
  },
};

export default function Removed() {
  return null;
}
