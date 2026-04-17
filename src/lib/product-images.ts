const VIAL_WEIGHTS = ["1g", "2g", "5g", "10g"] as const;
const POUCH_WEIGHTS = ["50g", "100g", "250g", "500g"] as const;

const POUCH_IMAGE = "/images/pdt-pouch.png";
export const VIAL_IMAGES = {
  "1g": "/images/pdt2.webp",
  "2g": "/images/pdt-2g.png",
  "5g": "/images/pdt-5g.png",
  "10g": "/images/pdt-10g.png",
} as const;

function normalize(weight?: string): string {
  if (!weight) return "";
  return weight.toLowerCase().replace(/\s+/g, "").replace(/[^0-9a-z.]/g, "");
}

export function getProductImageForWeight(
  weight: string | undefined,
  fallback: string
): string {
  const w = normalize(weight) as keyof typeof VIAL_IMAGES;
  if (!w) return fallback || VIAL_IMAGES["1g"];

  if ((POUCH_WEIGHTS as readonly string[]).includes(w)) {
    return POUCH_IMAGE;
  }

  if (VIAL_IMAGES[w]) {
    return VIAL_IMAGES[w];
  }

  return fallback || VIAL_IMAGES["1g"];
}

export function isPouchWeight(weight: string | undefined): boolean {
  const w = normalize(weight);
  return (POUCH_WEIGHTS as readonly string[]).includes(w);
}

export const VIAL_VARIANTS = VIAL_WEIGHTS;
export const POUCH_VARIANTS = POUCH_WEIGHTS;

export const GALLERY_LIFESTYLE = [
  "/images/close-up-utensils-full-saffron.webp",
  "/images/aromatic-saffron-still-life-composition.webp",
  "/images/saffron-harvest-hands.webp",
  "/images/aromatic-saffron-still-life-arrangement.webp",
] as const;

export function getProductGallery(
  weight: string | undefined,
  fallback: string
): string[] {
  const main = getProductImageForWeight(weight, fallback);
  // Default secondary to the lifestyle shot of hands opening a tin
  const secondary = "/images/pdt1.webp";
  return [main, secondary, ...GALLERY_LIFESTYLE.slice(0, 2)];
}

export const ALL_WEIGHTS = [...VIAL_WEIGHTS, ...POUCH_WEIGHTS] as const;
