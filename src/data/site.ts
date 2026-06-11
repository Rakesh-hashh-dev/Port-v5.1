export interface NavSection {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'twitter' | 'github' | 'gitlab';
}

export interface HeroBadge {
  label: string;
  className: string;
}

export const site = {
  name: 'Rakesh Kumar Behera',
  brand: 'AETHER',
  tagline: 'MBA Candidate | Strategy | Operations | Product | Creator',
  availability: 'Available for Hire',
  location: 'BASE: TOKYO',
  copyright: '\u00a9 2026 Aether Digital Craftsmanship. All rights reserved.',
  heroBadges: [
    { label: 'Strategy & Ops', className: 'left-12 top-1/3 -rotate-12 delay-200' },
    { label: 'Fintech', className: 'right-16 top-1/4 rotate-6 delay-300' },
    { label: 'Product Management', className: 'right-24 bottom-1/3 -rotate-6 delay-400' },
  ] as HeroBadge[],
  navSections: [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'photography', label: 'Photography' },
  ] as NavSection[],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
    { label: 'GitHub', href: 'https://github.com/Rakesh-hashh-dev', icon: 'github' },
    { label: 'GitLab', href: 'https://gitlab.com/rraku04', icon: 'gitlab' },
  ] as SocialLink[],
};
