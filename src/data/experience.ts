export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  current?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  accentClass: string;
}

export const bioChips = ['Production Engineering', 'Strategic Leadership', 'MBA Candidate'];

export const stats: Stat[] = [
  { value: '5+', label: 'Years Cross-Functional Leadership', accentClass: 'bg-secondary' },
  { value: '20+', label: 'Large Scale Events Directed', accentClass: 'bg-primary' },
];

export const timeline: TimelineItem[] = [
  {
    period: '2023 - Present',
    title: 'MBA Strategic Projects',
    description:
      'Leading cross-functional teams in high-stakes case competitions. Focusing on digital transformation frameworks and operational efficiency models for mid-market tech firms.',
    current: true,
  },
  {
    period: '2021 - 2022',
    title: 'Technical Society Secretary',
    description:
      'Orchestrated annual operational plans, managed a $50k budget, and fostered partnerships with industry leaders to bridge the gap between academic theory and practical engineering.',
  },
  {
    period: '2020 - 2021',
    title: 'Cultural Fest Leadership',
    description:
      'Directed logistics and execution for a multi-day cultural festival with 10,000+ attendees. Streamlined vendor management and implemented crisis mitigation protocols.',
  },
];
