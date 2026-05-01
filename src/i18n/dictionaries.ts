/**
 * Multilingual UI strings for iD BAKHCHANE — English, French, Spanish.
 *
 * Use via the LocaleContext + useT() hook:
 *
 *   const t = useT();
 *   <h1>{t("hero.title")}</h1>
 *
 * Static UI strings live here. WordPress content (blog posts,
 * product titles/descriptions) is translated separately at the CMS layer.
 */

export type Locale = "en" | "fr" | "es";

export const LOCALES: Locale[] = ["en", "fr", "es"];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export const LOCALE_FLAG: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
};

type Dictionary = {
  nav: {
    home: string;
    about: string;
    heritage: string;
    products: string;
    blog: string;
    contact: string;
    bulk: string;
    tea: string;
    bundles: string;
  };
  blogChildren: {
    inCosmetics: string;
    inMedicine: string;
    inTheKitchen: string;
    saffronKnowledge: string;
  };
  hero: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaShop: string;
    ctaStory: string;
  };
  cta: {
    inquireNow: string;
    requestQuote: string;
    requestAvailability: string;
    readArticle: string;
    backToBlog: string;
    learnMore: string;
    discover: string;
    explore: string;
    shopAll: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    customerCare: string;
    connect: string;
    newsletter: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    rights: string;
    privacy: string;
    terms: string;
    shipping: string;
  };
  product: {
    weight: string;
    quantity: string;
    grade: string;
    origin: string;
    ingredients: string;
    netWeight: string;
    certification: string;
    inclTax: string;
    youMayAlsoLike: string;
    moreFromCollection: string;
    fromOurBlog: string;
    latestArticle: string;
    productDetails: string;
    selectQuantity: string;
    technicalSpecs: string;
  };
  trust: {
    labTested: string;
    gradeIso: string;
    organic: string;
    globalShip: string;
    aopCertified: string;
    iso3632: string;
  };
  filters: {
    allProducts: string;
    spice: string;
    tea: string;
    bundles: string;
    wholesale: string;
    noProducts: string;
  };
  contact: {
    title: string;
    subjectGeneral: string;
    subjectWholesale: string;
    subjectPartnership: string;
    subjectOther: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    sendMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    responseTime: string;
  };
  search: {
    placeholder: string;
    noResults: string;
    searching: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  language: {
    select: string;
  };
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    heritage: "Heritage",
    products: "Products",
    blog: "Blog",
    contact: "Contact",
    bulk: "Wholesale",
    tea: "Tea",
    bundles: "Bundles",
  },
  blogChildren: {
    inCosmetics: "In Cosmetics",
    inMedicine: "In Medicine",
    inTheKitchen: "In the Kitchen",
    saffronKnowledge: "Saffron Knowledge",
  },
  hero: {
    overline: "Cooperative Collection",
    titleLine1: "Curated Saffron,",
    titleLine2: "By the Gram.",
    subtitle:
      "Premium Moroccan saffron, hand-harvested in Taliouine. AOP certified, ISO 3632 Category I.",
    ctaShop: "Shop the Collection",
    ctaStory: "Our Story",
  },
  cta: {
    inquireNow: "Inquire Now",
    requestQuote: "Request Wholesale Quote",
    requestAvailability: "Request Availability",
    readArticle: "Read Article",
    backToBlog: "Back to Blog",
    learnMore: "Learn More",
    discover: "Discover",
    explore: "Explore",
    shopAll: "Shop All",
  },
  footer: {
    tagline:
      "Premium Moroccan saffron from the heart of Taliouine, hand-harvested by the Bakhchane Cooperative.",
    quickLinks: "Quick Links",
    customerCare: "Customer Care",
    connect: "Connect",
    newsletter: "The Saffron Letter",
    newsletterDesc:
      "Stories, recipes, and harvest reports from Taliouine. No spam, ever.",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    shipping: "Shipping",
  },
  product: {
    weight: "Weight",
    quantity: "Quantity",
    grade: "Grade",
    origin: "Origins",
    ingredients: "Ingredients",
    netWeight: "Net Weight",
    certification: "Certification",
    inclTax: "Incl. Tax",
    youMayAlsoLike: "You May Also Like",
    moreFromCollection: "More From The Collection",
    fromOurBlog: "From Our Blog",
    latestArticle: "Latest Article",
    productDetails: "Product Details",
    selectQuantity: "Select Quantity",
    technicalSpecs: "Technical Specifications",
  },
  trust: {
    labTested: "Lab Tested",
    gradeIso: "Grade I ISO",
    organic: "100% Organic",
    globalShip: "Global Ship",
    aopCertified: "AOP Certified",
    iso3632: "ISO 3632 Cat I",
  },
  filters: {
    allProducts: "All Products",
    spice: "Spice",
    tea: "Tea",
    bundles: "Bundles",
    wholesale: "Wholesale",
    noProducts: "No products found in this selection.",
  },
  contact: {
    title: "Get in Touch",
    subjectGeneral: "General Inquiry",
    subjectWholesale: "Wholesale Order",
    subjectPartnership: "Partnership",
    subjectOther: "Other",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sendMessage: "Send Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell us how we can help…",
    responseTime: "Our team typically responds within 2 hours.",
  },
  search: {
    placeholder: "Search products and articles…",
    noResults: "No results found.",
    searching: "Searching…",
  },
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  language: {
    select: "Select language",
  },
};

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    about: "À propos",
    heritage: "Héritage",
    products: "Produits",
    blog: "Journal",
    contact: "Contact",
    bulk: "Vente en gros",
    tea: "Thé",
    bundles: "Coffrets",
  },
  blogChildren: {
    inCosmetics: "En cosmétique",
    inMedicine: "En médecine",
    inTheKitchen: "En cuisine",
    saffronKnowledge: "Savoir du safran",
  },
  hero: {
    overline: "Collection coopérative",
    titleLine1: "Safran d'exception,",
    titleLine2: "au gramme près.",
    subtitle:
      "Safran marocain premium, récolté à la main à Taliouine. Certifié AOP, ISO 3632 Catégorie I.",
    ctaShop: "Découvrir la collection",
    ctaStory: "Notre histoire",
  },
  cta: {
    inquireNow: "Nous contacter",
    requestQuote: "Demander un devis grossiste",
    requestAvailability: "Demander la disponibilité",
    readArticle: "Lire l'article",
    backToBlog: "Retour au journal",
    learnMore: "En savoir plus",
    discover: "Découvrir",
    explore: "Explorer",
    shopAll: "Voir tout",
  },
  footer: {
    tagline:
      "Safran marocain premium au cœur de Taliouine, récolté à la main par la Coopérative Bakhchane.",
    quickLinks: "Liens rapides",
    customerCare: "Service client",
    connect: "Suivez-nous",
    newsletter: "La Lettre du Safran",
    newsletterDesc:
      "Récits, recettes et chroniques de la récolte à Taliouine. Aucun spam, jamais.",
    emailPlaceholder: "Votre adresse e-mail",
    subscribe: "S'abonner",
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
    shipping: "Livraison",
  },
  product: {
    weight: "Poids",
    quantity: "Quantité",
    grade: "Catégorie",
    origin: "Origine",
    ingredients: "Ingrédients",
    netWeight: "Poids net",
    certification: "Certification",
    inclTax: "TTC",
    youMayAlsoLike: "Vous aimerez aussi",
    moreFromCollection: "Plus de la collection",
    fromOurBlog: "Sur le journal",
    latestArticle: "Dernier article",
    productDetails: "Détails du produit",
    selectQuantity: "Choisir la quantité",
    technicalSpecs: "Spécifications techniques",
  },
  trust: {
    labTested: "Testé en labo",
    gradeIso: "ISO Catégorie I",
    organic: "100% Bio",
    globalShip: "Livraison mondiale",
    aopCertified: "Certifié AOP",
    iso3632: "ISO 3632 Cat. I",
  },
  filters: {
    allProducts: "Tous les produits",
    spice: "Épice",
    tea: "Thé",
    bundles: "Coffrets",
    wholesale: "Vente en gros",
    noProducts: "Aucun produit dans cette sélection.",
  },
  contact: {
    title: "Nous contacter",
    subjectGeneral: "Demande générale",
    subjectWholesale: "Commande en gros",
    subjectPartnership: "Partenariat",
    subjectOther: "Autre",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    message: "Message",
    sendMessage: "Envoyer le message",
    namePlaceholder: "Votre nom complet",
    emailPlaceholder: "vous@exemple.com",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    responseTime: "Notre équipe répond généralement sous 2 heures.",
  },
  search: {
    placeholder: "Rechercher produits et articles…",
    noResults: "Aucun résultat.",
    searching: "Recherche en cours…",
  },
  theme: {
    switchToLight: "Passer en mode clair",
    switchToDark: "Passer en mode sombre",
  },
  language: {
    select: "Choisir la langue",
  },
};

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Sobre nosotros",
    heritage: "Patrimonio",
    products: "Productos",
    blog: "Blog",
    contact: "Contacto",
    bulk: "Mayorista",
    tea: "Té",
    bundles: "Sets de regalo",
  },
  blogChildren: {
    inCosmetics: "En cosmética",
    inMedicine: "En medicina",
    inTheKitchen: "En la cocina",
    saffronKnowledge: "Saber del azafrán",
  },
  hero: {
    overline: "Colección cooperativa",
    titleLine1: "Azafrán selecto,",
    titleLine2: "gramo a gramo.",
    subtitle:
      "Azafrán marroquí premium, cosechado a mano en Taliouine. Certificado AOP, ISO 3632 Categoría I.",
    ctaShop: "Ver la colección",
    ctaStory: "Nuestra historia",
  },
  cta: {
    inquireNow: "Consultar ahora",
    requestQuote: "Solicitar cotización mayorista",
    requestAvailability: "Solicitar disponibilidad",
    readArticle: "Leer artículo",
    backToBlog: "Volver al blog",
    learnMore: "Más información",
    discover: "Descubrir",
    explore: "Explorar",
    shopAll: "Ver todo",
  },
  footer: {
    tagline:
      "Azafrán marroquí premium del corazón de Taliouine, cosechado a mano por la Cooperativa Bakhchane.",
    quickLinks: "Enlaces rápidos",
    customerCare: "Atención al cliente",
    connect: "Síguenos",
    newsletter: "La Carta del Azafrán",
    newsletterDesc:
      "Historias, recetas y reportes de cosecha desde Taliouine. Sin spam, nunca.",
    emailPlaceholder: "Tu correo electrónico",
    subscribe: "Suscribirse",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    shipping: "Envíos",
  },
  product: {
    weight: "Peso",
    quantity: "Cantidad",
    grade: "Categoría",
    origin: "Origen",
    ingredients: "Ingredientes",
    netWeight: "Peso neto",
    certification: "Certificación",
    inclTax: "IVA incl.",
    youMayAlsoLike: "También te puede gustar",
    moreFromCollection: "Más de la colección",
    fromOurBlog: "Del blog",
    latestArticle: "Último artículo",
    productDetails: "Detalles del producto",
    selectQuantity: "Seleccionar cantidad",
    technicalSpecs: "Especificaciones técnicas",
  },
  trust: {
    labTested: "Analizado en lab",
    gradeIso: "Categoría I ISO",
    organic: "100% Orgánico",
    globalShip: "Envío mundial",
    aopCertified: "Certificado AOP",
    iso3632: "ISO 3632 Cat. I",
  },
  filters: {
    allProducts: "Todos los productos",
    spice: "Especia",
    tea: "Té",
    bundles: "Sets",
    wholesale: "Mayorista",
    noProducts: "No se encontraron productos en esta selección.",
  },
  contact: {
    title: "Contáctanos",
    subjectGeneral: "Consulta general",
    subjectWholesale: "Pedido mayorista",
    subjectPartnership: "Colaboración",
    subjectOther: "Otro",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    sendMessage: "Enviar mensaje",
    namePlaceholder: "Tu nombre completo",
    emailPlaceholder: "tu@ejemplo.com",
    messagePlaceholder: "Cuéntanos cómo podemos ayudarte…",
    responseTime: "Nuestro equipo suele responder en 2 horas.",
  },
  search: {
    placeholder: "Buscar productos y artículos…",
    noResults: "Sin resultados.",
    searching: "Buscando…",
  },
  theme: {
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
  },
  language: {
    select: "Seleccionar idioma",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, fr, es };

/** Look up a nested dot-path key like "footer.subscribe". */
export function lookup(dict: Dictionary, key: string): string {
  const parts = key.split(".");
  let cur: unknown = dict;
  for (const p of parts) {
    if (typeof cur === "object" && cur !== null && p in (cur as object)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
}

export type { Dictionary };
