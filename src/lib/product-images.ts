const VIAL_WEIGHTS = ["1g", "2g", "5g", "10g"] as const;
const POUCH_WEIGHTS = ["50g", "100g", "250g", "500g"] as const;

const POUCH_IMAGE = "/images/pdt-pouch.png";
const VIAL_IMAGES = ["/images/pdt1.webp", "/images/pdt2.webp"] as const;

function normalize(weight?: string): string {
  if (!weight) return "";
  return weight.toLowerCase().replace(/\s+/g, "").replace(/[^0-9a-z.]/g, "");
}

export function getProductImageForWeight(
  weight: string | undefined,
  fallback: string
): string {
  const w = normalize(weight);
  if (!w) return fallback || VIAL_IMAGES[0];

  if ((POUCH_WEIGHTS as readonly string[]).includes(w)) {
    return POUCH_IMAGE;
  }

  if ((VIAL_WEIGHTS as readonly string[]).includes(w)) {
    return VIAL_IMAGES[0];
  }

  return fallback || VIAL_IMAGES[0];
}

export function isPouchWeight(weight: string | undefined): boolean {
  const w = normalize(weight);
  return (POUCH_WEIGHTS as readonly string[]).includes(w);
}

export const VIAL_VARIANTS = VIAL_WEIGHTS;
export const POUCH_VARIANTS = POUCH_WEIGHTS;

const GALLERY_LIFESTYLE = [
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
  const secondary = main === VIAL_IMAGES[0] ? VIAL_IMAGES[1] : VIAL_IMAGES[0];
  return [main, secondary, ...GALLERY_LIFESTYLE.slice(0, 2)];
}

export const ALL_WEIGHTS = [...VIAL_WEIGHTS, ...POUCH_WEIGHTS] as const;
