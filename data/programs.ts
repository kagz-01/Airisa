export interface Program {
  title: string;
  pillar: string;
  desc: string;
  image: string;
  animation?: string;
  tag?: string;
}

export const namedPrograms: Program[] = [
  {
    title: "Mama Mwendo",
    pillar: "Social Impact",
    desc:
      "Mama Mwendo strengthens women’s participation and leadership in the mobility and climate sectors by offering curated learning, mentorship, and professional growth opportunities. The program builds a community of women committed to shaping sustainable and inclusive transport futures in Africa.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
    tag: "Women in Mobility",
  },
  {
    title: "Sauti za Barabarani",
    pillar: "Social Impact",
    desc:
      "Sauti za Barabarani brings communities and decision-makers together to reimagine mobility systems through an inclusion-focused lens. The program surfaces lived experiences, amplifies marginalized voices, and supports counties in embedding equity and safety in transport planning.",
    image:
      "https://images.unsplash.com/photo-1566454825481-67011d0e9cc0?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
    tag: "Community-led",
  },
  {
    title: "Sustainable Mobility Literacy & Adoption Program (SUMLAP)",
    pillar: "Social Impact",
    desc:
      "SMLAP promotes awareness and adoption of sustainable mobility solutions by enhancing public understanding of electric mobility, active mobility, and low-carbon transport options. The program equips communities and counties with foundational knowledge that supports informed choices, safer practices, and broader acceptance of modern mobility innovations.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
    tag: "Public Awareness",
  },
  {
    title: "Resilient Transport Labs",
    pillar: "Social Impact",
    desc:
      "Resilient Transport Labs help counties and cities explore how climate risks affect mobility and what opportunities exist for adaptation. The program equips stakeholders with a resilience mindset and supports long-term planning for climate-smart mobility.",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
    tag: "Technical Adaptation",
  },
  {
    title: "Community Climate Champions (C3 Program)",
    pillar: "Social Impact",
    desc:
      "The Community Climate Champions Program nurtures local leadership in climate action through awareness, engagement, and community-driven initiatives. It inspires meaningful participation in environmental stewardship.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
    tag: "Local Leadership",
  },
];

export const capacityBuilding = [
  {
    title: "Curriculum Co-creation",
    pillar: "Capacity Building",
    desc:
      "Co-creating curricula with academic and industry partners to address real-world challenges",
    image:
      "https://images.unsplash.com/photo-1540339832862-4745998078ef?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
    tag: "Foundational",
  },
  {
    title: "Workshops & Trainings",
    pillar: "Capacity Building",
    desc:
      "Designing and delivering interactive workshops and training programs",
    image:
      "https://images.unsplash.com/photo-1544928147-79723ec42ba1?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
    tag: "Interactive",
  },
  {
    title: "Mentorship",
    pillar: "Capacity Building",
    desc: "Providing mentorship to nurture emerging talent in the sector",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
    tag: "Professional",
  },
  {
    title: "Speaking & Moderation",
    pillar: "Capacity Building",
    desc: "Sharing expertise through speaking engagements and event moderation",
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
    tag: "Thought Leadership",
  },
];
