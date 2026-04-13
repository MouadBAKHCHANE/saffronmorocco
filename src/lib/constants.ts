export const SITE_NAME = "iD BAKHCHANE";
export const SITE_DESCRIPTION =
  "Premium Moroccan Saffron from the heart of Taliouine. Hand-harvested by the Bakhchane Cooperative of local farmers.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Saffron", href: "/about-saffron" },
  { label: "Heritage", href: "/heritage" },
  { label: "Products", href: "/products" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_INFO = {
  phone: "+212 611 714 711",
  email: "bakhchanemouad@gmail.com",
  whatsapp: "https://wa.me/212611714711",
  address: [
    "Douar Ighri, Commune Sidi Hsaine",
    "Taliouine, Morocco",
  ],
  googleMaps: "https://www.google.com/maps/place/COOPIRATIVA+ID+BAKHCHANE/@30.4698792,-7.7299441,15z/data=!4m15!1m8!3m7!1s0xdba77423ef11ccf:0xf0f65afeb31d3586!2sIghri!3b1!8m2!3d30.4713532!4d-7.7185712!16s%2Fg%2F1v44rsfk!3m5!1s0xdba77cf39b7dc11:0xa565161396552e21!8m2!3d30.4711324!4d-7.7170078!16s%2Fg%2F11mvg2vnb6",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/idbakhchane", platform: "instagram" },
  { label: "Facebook", href: "https://facebook.com/idbakhchane", platform: "facebook" },
  { label: "WhatsApp", href: CONTACT_INFO.whatsapp, platform: "whatsapp" },
] as const;

const BASE = "/images";

export const IMAGE_URLS = {
  heroVideo: `${BASE}/herogif.mp4`,
  heroPoster: `${BASE}/hero-saffron-threads.webp`,
  harvestHands: `${BASE}/saffron-harvest-hands.webp`,
  bowlDark: `${BASE}/saffron-flower-macro.webp`,
  saffronFlower: `${BASE}/saffron-crocus-flower.webp`,
  product1: `${BASE}/saffron-bowl-dark.webp`,
  product2: `${BASE}/saffron-bowl-dark.webp`,
  product3: `${BASE}/saffron-bowl-dark.webp`,
  taliouineVillage: `${BASE}/taliouine-village.webp`,
  taliouinePanorama: `${BASE}/taliouine-panorama.webp`,
  moroccoMap: `${BASE}/morocco-map.png`,
  taliouineMap: `${BASE}/taliouine-map.png`,
  moroccoPremium: `${BASE}/morocco-map-premium2.webp`,
  qualityLab: `${BASE}/labo.webp`,
  productsHero: `${BASE}/hero-products.webp`,
  iconManual: '/manual_precision_icon_v2_png_1776039248513-removebg-preview.png',
  iconQuality: '/quality_lab_icon_v2_png_1776039259987-removebg-preview.png',
  iconCommunity: '/community_icon_v2_png_1776039270588-removebg-preview.png',
  iconOrganic: '/organic_leaf_icon_v2_png_1776039283063-removebg-preview.png',
  iconPrecision: `${BASE}/precision-icon2.webp`,
  logoColor: `${BASE}/logo-color.webp`,
  logoWhite: `${BASE}/logo-white.webp`,
  certAop: `${BASE}/logo-color.webp`,
  certOrganic: `${BASE}/logo-color.webp`,
  certIndh: `${BASE}/logo-color.webp`,
  heritageOrigin: `${BASE}/The Heritage-The Origin.webp`,
  heritageOrigin2: `${BASE}/The Heritage-The Origin2.webp`,
  aboutHero: `${BASE}/aromatic-saffron-still-life-composition.webp`,
  aboutBotany: `${BASE}/saffron-botany-arrangement.webp`,
  aboutTerroir: `${BASE}/aromatic-saffron-still-life-arrangement (1).webp`,
  aboutHarvest: `${BASE}/close-up-hand-with-saffron.webp`,
  aboutHarvestDetail: `${BASE}/close-up-hand-with-saffron (1).webp`,
  aboutPurity: `${BASE}/close-up-utensils-full-saffron.webp`,
  blogSkincare: `${BASE}/aromatic-saffron-still-life-arrangement.webp`,
} as const;
