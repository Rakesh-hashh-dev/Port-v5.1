export interface Metric {
  value: string;
  suffix: string;
  suffixClass: string;
  label: string;
  description: string;
  accentClass: string;
}

export const metrics: Metric[] = [
  {
    value: '99',
    suffix: '%',
    suffixClass: 'text-primary',
    label: 'System Uptime',
    description: 'Engineered fault-tolerant microservices architecture handling 10M+ daily requests.',
    accentClass: 'bg-secondary',
  },
  {
    value: '1.2',
    suffix: 'M',
    suffixClass: 'text-secondary',
    label: 'Active Users',
    description: 'Scaled primary consumer application userbase through targeted UX optimizations.',
    accentClass: 'bg-primary',
  },
];

export const award = {
  title: 'Awwwards',
  badge: 'Site of the Day',
};
