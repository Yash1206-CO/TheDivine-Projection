export interface Page {
  pageNumber: number;
  title: string;
  subtitle?: string;
  content: string[]; // Rich paragraphs with explanations
  type: 'cover' | 'philosophy' | 'narrative' | 'infographic' | 'manifestation';
  visualElement?: {
    type: 'icon' | 'mandala' | 'yantra' | 'scene';
    iconName?: string;
    details?: string;
  };
}

export type DeityTemplateType = 'A' | 'B' | 'C' | 'Vedic-Elemental';

export interface Deity {
  id: string;
  name: string;
  sanskritName: string;
  title: string;
  tagline: string;
  mantra: string;
  mantraTranslation: string;
  residence: string;
  mount: string; // Vahana
  element: string;
  weapons: string[];
  template: DeityTemplateType;
  category: 'Trideva' | 'Adi Shakti' | 'Vedic Pantheons' | 'Vedic Elements';
  colorTheme: {
    primary: string; // Tailwind color name like 'amber-500' or raw hex
    accent: string;  // Gold/sanskrit accent color
    bgGradient: string; // From-to gradient classes
    cardBg: string; // Slate background
  };
  overview: string;
  pages: Page[];
}
