export type PhotoSize = 'normal' | 'tall' | 'wide';

export interface Photo {
  size: PhotoSize;
  location: string;
  title: string;
  src: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    size: 'tall',
    location: 'TOKYO, JP',
    title: 'Neon Canopy',
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop',
    alt: 'Cyberpunk city street drenched in neon light',
  },
  {
    size: 'wide',
    location: 'BERLIN, DE',
    title: 'Brutalist Geometry',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern brutalist architecture with strong geometric lines',
  },
  {
    size: 'normal',
    location: 'SAN FRANCISCO, CA',
    title: 'Data Streams',
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    alt: 'Abstract data visualization light streams',
  },
  {
    size: 'tall',
    location: 'ICELAND',
    title: 'Void Horizons',
    src: 'https://images.unsplash.com/photo-1470770903672-7cda0ceddf79?q=80&w=600&auto=format&fit=crop',
    alt: 'Icelandic landscape with a vast empty horizon',
  },
  {
    size: 'normal',
    location: 'ORBIT',
    title: 'Global Nodes',
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    alt: 'Earth seen from orbit with glowing network nodes',
  },
];
