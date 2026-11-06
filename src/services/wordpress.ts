import { ProjectItem, TestimonialItem } from "@/data/portfolioData";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "";

interface WPProject {
  id: number;
  title: { rendered: string };
  acf: {
    organization: string;
    period: string;
    category_fr: string;
    category_en: string;
    metric_fr: string;
    metric_en: string;
    description_fr: string;
    description_en: string;
    technologies: string;
    role_fr: string;
    role_en: string;
    challenge_fr: string;
    challenge_en: string;
    solution_fr: string;
    solution_en: string;
    highlights_fr: string;
    highlights_en: string;
    database: string;
    pattern: string;
    link?: string;
  };
}

interface WPTestimonial {
  id: number;
  acf: {
    name: string;
    role_fr: string;
    role_en: string;
    company: string;
    initials: string;
    quote_fr: string;
    quote_en: string;
    relation_fr: string;
    relation_en: string;
  };
}

function wpProjectToProjectItem(wp: WPProject): ProjectItem {
  return {
    id: `wp-${wp.id}`,
    title: wp.title.rendered,
    organization: wp.acf.organization,
    period: wp.acf.period,
    category: { fr: wp.acf.category_fr, en: wp.acf.category_en },
    metric: { fr: wp.acf.metric_fr, en: wp.acf.metric_en },
    description: { fr: wp.acf.description_fr, en: wp.acf.description_en },
    technologies: wp.acf.technologies.split(",").map((t) => t.trim()),
    role: { fr: wp.acf.role_fr, en: wp.acf.role_en },
    architectureDetails: {
      challenge: { fr: wp.acf.challenge_fr, en: wp.acf.challenge_en },
      solution: { fr: wp.acf.solution_fr, en: wp.acf.solution_en },
      highlights: {
        fr: wp.acf.highlights_fr.split("\n").filter(Boolean),
        en: wp.acf.highlights_en.split("\n").filter(Boolean),
      },
      database: wp.acf.database,
      pattern: wp.acf.pattern,
    },
    link: wp.acf.link,
  };
}

function wpTestimonialToTestimonialItem(wp: WPTestimonial): TestimonialItem {
  return {
    id: `wp-testimonial-${wp.id}`,
    name: wp.acf.name,
    role: { fr: wp.acf.role_fr, en: wp.acf.role_en },
    company: wp.acf.company,
    initials: wp.acf.initials,
    quote: { fr: wp.acf.quote_fr, en: wp.acf.quote_en },
    relation: { fr: wp.acf.relation_fr, en: wp.acf.relation_en },
  };
}

export async function fetchWPProjects(): Promise<ProjectItem[]> {
  if (!WP_API_URL) return [];
  try {
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/project?per_page=20`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: WPProject[] = await res.json();
    return data.map(wpProjectToProjectItem);
  } catch {
    return [];
  }
}

export async function fetchWPTestimonials(): Promise<TestimonialItem[]> {
  if (!WP_API_URL) return [];
  try {
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/testimonial?per_page=20`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: WPTestimonial[] = await res.json();
    return data.map(wpTestimonialToTestimonialItem);
  } catch {
    return [];
  }
}
