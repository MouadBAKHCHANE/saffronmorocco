import type { Locale } from "./dictionaries";
import type { LocalizedRoute } from "./routing";

/**
 * Per-locale title and description for every localized route.
 *
 * These are written for each market's search terms, not translated from the
 * English. French buyers search "safran maroc" and "safran taliouine";
 * Spanish buyers search "azafrán marroquí". Translating the English titles
 * literally would target terms nobody types.
 */
type Meta = { title: string; description: string };

const BRAND = "iD BAKHCHANE";

export const SEO: Record<Locale, Record<LocalizedRoute, Meta>> = {
  en: {
    "": {
      title: `Buy Premium Moroccan Saffron Online | AOP Taliouine | ${BRAND}`,
      description:
        "Premium Moroccan saffron from Taliouine, Morocco. AOP certified, ISO 3632 Category I. Hand-harvested threads, lab-tested, shipped worldwide.",
    },
    "/about": {
      title: `About | Women's Saffron Cooperative in Taliouine | ${BRAND}`,
      description:
        "The story of the Bakhchane Cooperative: women hand-harvesting AOP-certified saffron in Taliouine, Morocco.",
    },
    "/heritage": {
      title: `How Moroccan Saffron Is Made | Harvest to Thread | ${BRAND}`,
      description:
        "From Crocus sativus flower to crimson thread: harvest, separation, drying and the AOP process in Taliouine.",
    },
    "/products": {
      title: `Buy Moroccan Saffron Online | AOP Taliouine | ${BRAND}`,
      description:
        "Shop premium Moroccan saffron direct from Taliouine. AOP certified threads, tea infusions and gift bundles. ISO 3632 Category I.",
    },
    "/tea": {
      title: `Saffron Tea | Sencha, Rooibos & Chai | ${BRAND}`,
      description:
        "Saffron tea infusions: green sencha, caffeine-free rooibos and spiced chai, blended with Taliouine saffron threads.",
    },
    "/bundles": {
      title: `Saffron Gift Sets & Gourmet Bundles | ${BRAND}`,
      description:
        "Curated gift sets of AOP-certified Moroccan saffron from the Bakhchane Cooperative in Taliouine.",
    },
    "/bulk": {
      title: `Wholesale Moroccan Saffron | Bulk 50g-500g | ${BRAND}`,
      description:
        "Wholesale Moroccan saffron from 50g to 500g for chefs, brands and distributors. Direct from the cooperative, ISO 3632 Category I.",
    },
    "/contact": {
      title: `Contact | Wholesale Moroccan Saffron Inquiries | ${BRAND}`,
      description:
        "Contact the Bakhchane Cooperative in Taliouine for wholesale, partnerships and retail inquiries.",
    },
    "/privacy": { title: `Privacy Policy | ${BRAND}`, description: "How iD BAKHCHANE collects, uses and safeguards your personal data." },
    "/terms": { title: `Terms of Service | ${BRAND}`, description: "The terms governing purchases and use of saffronmorocco.com." },
    "/shipping": { title: `Shipping Policy | ${BRAND}`, description: "Worldwide shipping, delivery times and customs information for saffron orders." },
  },

  fr: {
    "": {
      title: `Safran du Maroc AOP de Taliouine | Achat direct | ${BRAND}`,
      description:
        "Safran marocain premium de Taliouine. AOP, ISO 3632 catégorie I, récolté à la main et analysé en laboratoire. Achat direct à la coopérative, livraison mondiale.",
    },
    "/about": {
      title: `La coopérative | Femmes productrices de safran à Taliouine | ${BRAND}`,
      description:
        "L'histoire de la coopérative Bakhchane : des femmes récoltent à la main le safran AOP de Taliouine, au Maroc.",
    },
    "/heritage": {
      title: `Comment se fabrique le safran marocain | De la fleur au filament | ${BRAND}`,
      description:
        "De la fleur de Crocus sativus au filament rouge : récolte à l'aube, émondage, séchage et certification AOP à Taliouine.",
    },
    "/products": {
      title: `Acheter du safran marocain en ligne | AOP Taliouine | ${BRAND}`,
      description:
        "Safran de Taliouine en filaments, infusions et coffrets cadeaux. AOP, ISO 3632 catégorie I, directement de la coopérative.",
    },
    "/tea": {
      title: `Thé au safran | Sencha, rooibos et chaï | ${BRAND}`,
      description:
        "Infusions au safran : sencha vert, rooibos sans théine et chaï épicé, mêlés aux filaments de safran de Taliouine.",
    },
    "/bundles": {
      title: `Coffrets cadeaux au safran marocain | ${BRAND}`,
      description:
        "Coffrets cadeaux de safran marocain AOP, composés par la coopérative Bakhchane à Taliouine.",
    },
    "/bulk": {
      title: `Safran marocain en gros | 50 g à 500 g | ${BRAND}`,
      description:
        "Safran marocain en gros de 50 g à 500 g pour chefs, marques et distributeurs. Direct coopérative, ISO 3632 catégorie I.",
    },
    "/contact": {
      title: `Contact | Demandes de safran en gros | ${BRAND}`,
      description:
        "Contactez la coopérative Bakhchane à Taliouine pour vos demandes de gros, partenariats et commandes.",
    },
    "/privacy": { title: `Politique de confidentialité | ${BRAND}`, description: "Comment iD BAKHCHANE collecte, utilise et protège vos données personnelles." },
    "/terms": { title: `Conditions générales | ${BRAND}`, description: "Les conditions régissant les achats et l'usage de saffronmorocco.com." },
    "/shipping": { title: `Livraison | ${BRAND}`, description: "Livraison mondiale, délais et informations douanières pour les commandes de safran." },
  },

  es: {
    "": {
      title: `Azafrán de Marruecos DOP de Taliouine | Compra directa | ${BRAND}`,
      description:
        "Azafrán marroquí premium de Taliouine. DOP, ISO 3632 categoría I, recolectado a mano y analizado en laboratorio. Compra directa a la cooperativa.",
    },
    "/about": {
      title: `La cooperativa | Mujeres productoras de azafrán en Taliouine | ${BRAND}`,
      description:
        "La historia de la cooperativa Bakhchane: mujeres que recolectan a mano el azafrán DOP de Taliouine, Marruecos.",
    },
    "/heritage": {
      title: `Cómo se produce el azafrán marroquí | De la flor a la hebra | ${BRAND}`,
      description:
        "De la flor de Crocus sativus a la hebra roja: recolección al alba, separación, secado y certificación DOP en Taliouine.",
    },
    "/products": {
      title: `Comprar azafrán marroquí online | DOP Taliouine | ${BRAND}`,
      description:
        "Azafrán de Taliouine en hebras, infusiones y estuches de regalo. DOP, ISO 3632 categoría I, directo de la cooperativa.",
    },
    "/tea": {
      title: `Té con azafrán | Sencha, rooibos y chai | ${BRAND}`,
      description:
        "Infusiones con azafrán: sencha verde, rooibos sin teína y chai especiado, con hebras de azafrán de Taliouine.",
    },
    "/bundles": {
      title: `Estuches de regalo de azafrán marroquí | ${BRAND}`,
      description:
        "Estuches de regalo de azafrán marroquí DOP, compuestos por la cooperativa Bakhchane en Taliouine.",
    },
    "/bulk": {
      title: `Azafrán marroquí al por mayor | 50 g a 500 g | ${BRAND}`,
      description:
        "Azafrán marroquí al por mayor de 50 g a 500 g para chefs, marcas y distribuidores. Directo de la cooperativa.",
    },
    "/contact": {
      title: `Contacto | Consultas de azafrán al por mayor | ${BRAND}`,
      description:
        "Contacte con la cooperativa Bakhchane en Taliouine para pedidos al por mayor, colaboraciones y consultas.",
    },
    "/privacy": { title: `Política de privacidad | ${BRAND}`, description: "Cómo iD BAKHCHANE recopila, usa y protege sus datos personales." },
    "/terms": { title: `Términos del servicio | ${BRAND}`, description: "Los términos que rigen las compras y el uso de saffronmorocco.com." },
    "/shipping": { title: `Envíos | ${BRAND}`, description: "Envío mundial, plazos de entrega e información aduanera para pedidos de azafrán." },
  },
};

export function seoFor(route: LocalizedRoute, locale: Locale): Meta {
  return SEO[locale][route] ?? SEO.en[route];
}

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
};
