export interface OrbitItem {
  label: string;
  positionClass: string;
  colorClass: string;
}

export interface OrbitRing {
  ringClass: string;
  items: OrbitItem[];
}

export const skillTags = ['MBA Frameworks', 'Data Visualization', 'Agile Delivery'];

export const orbitRings: OrbitRing[] = [
  {
    ringClass: 'orbit-ring-1',
    items: [
      { label: 'Strategy', positionClass: 'ring-1-item-1', colorClass: 'text-primary' },
      { label: 'Operations', positionClass: 'ring-1-item-2', colorClass: 'text-secondary' },
    ],
  },
  {
    ringClass: 'orbit-ring-2',
    items: [
      { label: 'Analytics', positionClass: 'ring-2-item-1', colorClass: 'text-tertiary' },
      { label: 'Leadership', positionClass: 'ring-2-item-2', colorClass: 'text-primary-fixed' },
    ],
  },
  {
    ringClass: 'orbit-ring-3',
    items: [
      {
        label: 'Product Mgmt',
        positionClass: 'ring-3-item-1',
        colorClass: 'text-on-primary-container border-secondary/40',
      },
      {
        label: 'Photography',
        positionClass: 'ring-3-item-2',
        colorClass: 'text-surface-tint border-primary/40',
      },
    ],
  },
];
