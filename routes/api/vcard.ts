import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Evelyn Gathua
ORG:Airisa Green Consulting
TITLE:Founder & Sustainability Consultant
TEL;TYPE=WORK,VOICE:
EMAIL:e.gathua@airisagreenconsulting.com
URL:https://airisagreenconsulting.com
URL:https://linkedin.com/in/evelyn-gathua-a40887112
ADR;TYPE=WORK:;;Nairobi;Kenya;
NOTE:Expert in ESG, Carbon Markets, and Climate Policy for African businesses. Specializing in sustainability consulting, carbon project development, and ESG reporting.
END:VCARD`;

    return new Response(vCard, {
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": 'attachment; filename="evelyn-gathua.vcf"',
      },
    });
  },
};
