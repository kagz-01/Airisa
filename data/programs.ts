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
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
    tag: "Women in Mobility",
  },
  {
    title: "Sauti za Barabarani",
    pillar: "Social Impact",
    desc:
      "Sauti za Barabarani brings communities and decision-makers together to reimagine mobility systems through an inclusion-focused lens. The program surfaces lived experiences, amplifies marginalized voices, and supports counties in embedding equity and safety in transport planning.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
    tag: "Community-led",
  },
  {
    title: "Sustainable Mobility Literacy & Adoption Program (SUMLAP)",
    pillar: "Social Impact",
    desc:
      "SMLAP promotes awareness and adoption of sustainable mobility solutions by enhancing public understanding of electric mobility, active mobility, and low-carbon transport options. The program equips communities and counties with foundational knowledge that supports informed choices, safer practices, and broader acceptance of modern mobility innovations.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
    tag: "Public Awareness",
  },
  {
    title: "Resilient Transport Labs",
    pillar: "Social Impact",
    desc:
      "Resilient Transport Labs help counties and cities explore how climate risks affect mobility and what opportunities exist for adaptation. The program equips stakeholders with a resilience mindset and supports long-term planning for climate-smart mobility.",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
    tag: "Technical Adaptation",
  },
  {
    title: "Community Climate Champions (C3 Program)",
    pillar: "Social Impact",
    desc:
      "The Community Climate Champions Program nurtures local leadership in climate action through awareness, engagement, and community-driven initiatives. It inspires meaningful participation in environmental stewardship.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
    tag: "Foundational",
  },
  {
    title: "Workshops & Trainings",
    pillar: "Capacity Building",
    desc:
      "Designing and delivering interactive workshops and training programs",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
    tag: "Interactive",
  },
  {
    title: "Mentorship",
    pillar: "Capacity Building",
    desc: "Providing mentorship to nurture emerging talent in the sector",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
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
