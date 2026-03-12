export interface Service {
  title: string;
  desc: string;
  image?: string;
  icon?: string;
  animationEffect?: "zoom-in" | "pan" | "zoom-out" | "blur";
}

export const services: Service[] = [
  {
    title: "Research",
    desc: "Feasibility & Baseline studies, Market Research & Surveys,",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    animationEffect: "zoom-in",
  },
  {
    title: "Project Management",
    desc: "Design to Implementation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    animationEffect: "pan",
  },
  {
    title: "Gender & Inclusion Advisory",
    desc: "Embedding gender-responsive and inclusive approaches in mobility and climate programs.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    animationEffect: "pan",
  },
  {
    title: "Monitoring, Evaluation, Accountability & Learning (MEAL)",
    desc: "Systems design, framework development, and tool deployment for effective program tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    animationEffect: "zoom-out",
  },
  {
    title: "Environmental and Social Impact Assessments (ESIA) & Environmental Audits (EA)",
    desc: "Regulatory compliance and impact oversight for sustainable project delivery.",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
    animationEffect: "blur",
  },
  {
    title: "ESG Strategy Development",
    desc: "Materiality, governance alignment, and sustainability roadmap creation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    animationEffect: "zoom-in",
  },
  {
    title: "Stakeholder engagement and technical capacity building",
    desc: "Designing and delivering interactive workshops and coordinated stakeholder processes.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    animationEffect: "zoom-out",
  },
  {
    title: "Business Development & Consulting",
    desc: "Bid support, partnership structuring, and resource mobilization for viable program scaling.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    animationEffect: "blur",
  },
];
