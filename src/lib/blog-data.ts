import { IMAGE_URLS } from './constants';

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  slug: string;
  readingTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "In the Kitchen",
    title: "The Golden Risotto: Mastering Saffron Alchemy",
    excerpt: "Discover the secrets to extracting maximum flavor and color from iD BAKHCHANE threads for the perfect Milanese tradition.",
    content: `
      Saffron is the bridge between earth and gold. In the kitchen, it is not just a spice, but an orchestrator of flavor. 
      To master the Golden Risotto, one must first respect the infusion. Never add threads directly to the pan. 
      Instead, crush them gently and steep in warm broth for at least 20 minutes before the first ladle hits the rice.
      The result is a depth of flavor that is both metallic and honey-sweet, a signature of the Taliouine terroir.
    `,
    image: IMAGE_URLS.aboutPurity,
    date: "April 10, 2024",
    slug: "golden-risotto-mastery",
    readingTime: "5 min read"
  },
  {
    category: "In Medicine",
    title: "Science of the Sunshine Spice: Mood & Vitality",
    excerpt: "How a single stigma affects serotonin levels and cellular protection. A deep dive into modern pharmacology.",
    content: `
      Beyond its culinary prestige, Saffron is a potent neuroprotective agent. Modern science confirms what ancestral 
      wisdom has known for centuries: Crocin and Safranal are nature's answer to modern stress. 
      Clinical studies show that high-quality saffron can modulate neurotransmitters as effectively as standard 
      protocols, without the side effects. It is a catalyst for vitality, protecting cells from oxidative stress 
      while lifting the spirit.
    `,
    image: IMAGE_URLS.aboutHarvest,
    date: "April 08, 2024",
    slug: "science-of-sunshine-spice",
    readingTime: "7 min read"
  },
  {
    category: "In Cosmetics",
    title: "Red Gold for Skin: The Eternal Glow Protocol",
    excerpt: "The anti-inflammatory power of crocin in high-end skincare. Why luxury houses are turning to Taliouine.",
    content: `
      The glow of Saffron is not just for the plate—it belongs on the skin. Known for its intense anti-inflammatory 
      and antioxidant properties, saffron is the ultimate ingredient for skin luminosity. 
      By inhibiting tyrosinase, it helps even skin tone and fade pigmentation. Our protocol involves a weekly 
      infusion of threads into cold-pressed oils, creating a serum that repairs UV damage and restores the 
      natural radiance of the complexion.
    `,
    image: IMAGE_URLS.blogSkincare,
    date: "April 05, 2024",
    slug: "red-gold-skincare-protocol",
    readingTime: "4 min read"
  }
];
