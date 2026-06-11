export type ProjectVariant = 'feature' | 'card' | 'wide';

export interface Project {
  variant: ProjectVariant;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageFilter?: string;
  stat?: { value: string; label: string };
  cta?: string;
}

export const projects: Project[] = [
  {
    variant: 'feature',
    tag: 'MBA Capstone',
    title: 'Global Market Penetration Strategy',
    description:
      'Comprehensive analysis and go-to-market framework developed for a Series B fintech startup, resulting in a streamlined expansion roadmap across EMEA regions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    stat: { value: '32%', label: 'Projected Growth' },
  },
  {
    variant: 'card',
    tag: 'Business Analysis',
    title: 'Operational Efficiency Audit',
    description: 'Data-driven optimization of supply chain logistics utilizing predictive modeling.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    imageFilter: 'grayscale(100%) contrast(1.2) brightness(0.5)',
  },
  {
    variant: 'card',
    tag: 'Photography',
    title: 'Urban Brutalism Series',
    description:
      'A visual study of geometric concrete structures and light interplay in metropolitan environments.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    variant: 'wide',
    tag: 'Web Architecture',
    title: 'SaaS Platform Redesign',
    description:
      'End-to-end UX/UI overhaul for a B2B analytics dashboard, increasing user retention by 40% through cognitive load reduction and streamlined workflows.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    cta: 'Explore Case Study',
  },
];
