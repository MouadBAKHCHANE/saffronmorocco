const SMALL_WEIGHTS = ["1g", "2g", "5g", "10g"] as const;
const LARGE_WEIGHTS = ["50g", "100g", "250g", "500g"] as const;

const POUCH_IMAGE = "/images/pdt-pouch.png";
const SMALL_IMAGES = ["/images/pdt1.webp", "/images/pdt2.webp"] as const;

function normalize(weight?: string): string {
  if (!weight) return "";
  return weight.toLowerCase().replace(/\s+/g, "").replace(/[^0-9a-z.]/g, "");
}

export function getProductImageForWeight(
  weight: string | undefined,
  fallback: string
): string {
  const w = normalize(weight);
  if (!w) return fallback || SMALL_IMAGES[0];

  if ((LARGE_WEIGHTS as readonly string[]).includes(w)) {
    return POUCH_IMAGE;
  }

  const idx = (SMALL_WEIGHTS as readonly string[]).indexOf(w);
  if (idx >= 0) {
    return SMALL_IMAGES[idx % SMALL_IMAGES.length];
  }

  return fallback || SMALL_IMAGES[0];
}

export function isPouchWeight(weight: string | undefined): boolean {
  const w = normalize(weight);
  return (LARGE_WEIGHTS as readonly string[]).includes(w);
}
