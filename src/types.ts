export type ArtworkCategory = 'illustration' | 'packaging' | 'tarot' | 'poster' | 'card' | 'story' | 'content' | 'tshirt';

export interface ArtworkItem {
  id: string;
  title: string;
  category: ArtworkCategory;
  image: string;
  client?: string;
  year?: string;
  description?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface NavItem {
  name: string;
  href: string;
}
