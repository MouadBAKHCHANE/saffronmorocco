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
    readMore: string;
    viewAll: string;
    discoverStory: string;
    learnAboutSaffron: string;
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

  /* Home page sections */
  heritageSection: {
    overline: string;
    title: string;
    titleAccent: string;
    paragraph1: string;
    paragraph2: string;
    statLabel: string;
  };
  harvestGrid: {
    overline: string;
    title: string;
    subtitle: string;
    octoberLabel: string;
    dawnGathering: string;
    dawnGatheringDesc: string;
    flowersCount: string;
    flowersLabel: string;
    flowersFor: string;
    qualityControl: string;
    manualPrecision: string;
    manualPrecisionDesc: string;
  };
  sustainability: {
    overline: string;
    title: string;
    description: string;
    qualityTitle: string;
    qualityDesc: string;
    communityTitle: string;
    communityDesc: string;
    organicTitle: string;
    organicDesc: string;
  };
  benefits: {
    intro: string;
    depression: string;
    immune: string;
    acne: string;
    pms: string;
    bloodPressure: string;
  };
  origin: {
    overline: string;
    titleCity: string;
    titleCountry: string;
    description: string;
    crocineTitle: string;
    crocineSub: string;
    crocineDesc: string;
    safranalTitle: string;
    safranalSub: string;
    safranalDesc: string;
    terroirTitle: string;
    terroirDesc: string;
    originPoint: string;
  };
  blogSection: {
    overline: string;
    titleLine1: string;
    titleAccent: string;
    viewAll: string;
  };
  quote: {
    text: string;
    attribution: string;
  };

  /* Bulk page */
  bulk: {
    overline: string;
    titleBrand: string;
    titleAccent: string;
    selectQuantity: string;
    save: string;
    requestQuote: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    technicalSpecs: string;
    description: string;
    qty50Desc: string;
    qty100Desc: string;
    qty250Desc: string;
    qty500Desc: string;
    spec1: string;
    spec2: string;
    spec3: string;
    spec4: string;
    spec5: string;
    spec6: string;
  };

  /* Tea page */
  teaPage: {
    overline: string;
    titleLine1: string;
    titleAccent: string;
    quote: string;
    perTin: string;
    availableBlends: string;
    senchaName: string;
    senchaType: string;
    rooibosName: string;
    rooibosType: string;
    chaiName: string;
    chaiType: string;
    description: string;
    spec1: string;
    spec2: string;
    spec3: string;
    spec4: string;
    spec5: string;
    spec6: string;
  };

  /* Bundles page */
  bundlesPage: {
    overline: string;
    title: string;
    titleAccent: string;
    selectBundle: string;
    includes: string;
    requestBundle: string;
  };

  /* Contact page */
  contactPage: {
    overline: string;
    title: string;
    subtitle: string;
    visitUs: string;
    callUs: string;
    emailUs: string;
    whatsapp: string;
    hours: string;
    hoursValue: string;
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
    overline: "Moroccan",
    titleLine1: "Premium",
    titleLine2: "Saffron",
    subtitle: "We provide what the world's finest kitchens desire.",
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
    readMore: "Read More",
    viewAll: "View All Articles",
    discoverStory: "Discover Our Story",
    learnAboutSaffron: "Learn About Saffron",
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
  heritageSection: {
    overline: "About Saffron",
    title: "The",
    titleAccent: "Origin",
    paragraph1:
      "Nestled between the High-Atlas and the Anti-Atlas mountains, Taliouine is the heart of Moroccan saffron. Here, the altitude and unique volcanic soil create a terroir unlike any other.",
    paragraph2:
      "iD BAKHCHANE is more than a cooperative; it is a lineage of stewards protecting a 1,000-year-old tradition.",
    statLabel: "Terroir",
  },
  harvestGrid: {
    overline: "The Process",
    title: "The Art of the Harvest",
    subtitle: "A race against the sun",
    octoberLabel: "October",
    dawnGathering: "The Dawn Gathering",
    dawnGatheringDesc:
      "Flowers that are picked before the sun fully opens them to the saffron-scented morning air.",
    flowersCount: "150,000",
    flowersLabel: "Flowers",
    flowersFor: "Required for 1kg of Saffron",
    qualityControl: "Quality Control",
    manualPrecision: "Manual Precision",
    manualPrecisionDesc:
      "No machinery can replicate the gentle touch of our community's artisans. Every thread is handled with reverence.",
  },
  sustainability: {
    overline: "Our Promise",
    title: "Sustainability & The Circle of Life",
    description:
      "Our cooperative ensures that the wealth generated by the 'Red Gold' returns directly to the families of Taliouine, funding education and water conservation projects.",
    qualityTitle: "Uncompromising Quality",
    qualityDesc:
      "Strict adherence to ISO 3632 standards. Every batch is lab-tested for its safranal, crocin, and picrocrocin levels.",
    communityTitle: "Community First",
    communityDesc:
      "We provide fair wages that are 30% higher than the market average, empowering women in the East Taliouine region.",
    organicTitle: "Organic Stewardship",
    organicDesc:
      "Zero chemical pesticides. We use ancestral composting techniques that honor the earth's natural rhythms.",
  },
  benefits: {
    intro:
      "Rich in antioxidants, vitamins, and minerals, saffron has been used in various medicinal traditions for:",
    depression: "Depression & Anxiety",
    immune: "Immune Function",
    acne: "Acne & Hyperpigmentation",
    pms: "Menstrual Discomfort / PMS",
    bloodPressure: "High Blood Pressure",
  },
  origin: {
    overline: "The Origin Point",
    titleCity: "Taliouine,",
    titleCountry: "Morocco",
    description:
      "The Taliouine and Taznakhte regions are the historical heart of Morocco's saffron culture, providing the unique volcanic soil where the majority of the country's red gold is born.",
    crocineTitle: "Crocine",
    crocineSub: "Tinting Strength",
    crocineDesc: "Record-high concentrations verified by Grade I ISO standards.",
    safranalTitle: "Safranal",
    safranalSub: "Aromatic profile",
    safranalDesc: "Deep fragrance profile perfected at 1,500m altitude.",
    terroirTitle: "Terroir of Excellence",
    terroirDesc:
      "Historical XVIth-century land deeds verify this timeless legacy of saffron cultivation, which iD BAKHCHANE continues to safeguard through meticulous hand-harvesting.",
    originPoint: "Origin Point",
  },
  blogSection: {
    overline: "Editorial Insights",
    titleLine1: "Latest from the",
    titleAccent: "Bakhchane Magazine",
    viewAll: "View All Articles",
  },
  quote: {
    text:
      '"We do not just harvest saffron; we preserve the light of our ancestors and the fragrance of our mountains."',
    attribution: "iD BAKHCHANE Cooperative Members",
  },
  bulk: {
    overline: "Cooperative Collection",
    titleBrand: "iD BAKHCHANE",
    titleAccent: "Bulk Selection",
    selectQuantity: "Select Quantity",
    save: "Save",
    requestQuote: "Request Wholesale Quote",
    feature1Title: "Global DHL Express",
    feature1Desc: "Secure shipping to 200+ countries.",
    feature2Title: "Quality Certified",
    feature2Desc: "Batch ISO 3632 certification included.",
    technicalSpecs: "Technical Specifications",
    description:
      "Directly from our family cooperative in Taliouine. Premium Grade A saffron threads, hand-harvested and dried to preserve intense aroma and deep crimson hue.",
    qty50Desc: "Personal Reserva",
    qty100Desc: "Culinary Professional",
    qty250Desc: "Restaurant Bulk",
    qty500Desc: "Wholesale Partner",
    spec1: "Grade 1 (Negin)",
    spec2: "100% Traceable",
    spec3: "Latest 2025 Harvest",
    spec4: "Taliouine Origin",
    spec5: "Moisture < 12%",
    spec6: "Purity Verified",
  },
  teaPage: {
    overline: "The Infusion Series",
    titleLine1: "Saffron",
    titleAccent: "Infusion Collection",
    quote:
      '"A symphony of world-class tea leaves and the legendary saffron of Taliouine."',
    perTin: "Per 12-Sachet Tin",
    availableBlends: "Available Blends",
    senchaName: "Saffron Sencha",
    senchaType: "Premium Green Tea Blend",
    rooibosName: "Saffron Rooibos",
    rooibosType: "Organic Herbal Blend (Caffeine-Free)",
    chaiName: "Saffron Chai",
    chaiType: "Spiced Black Tea Blend",
    description:
      "Our pyramid tea bags allow for full leaf expansion, ensuring a deep extraction of both the tea and the saffron threads. Each blend is carefully balanced to highlight the aromatic complexity of our cooperative's saffron.",
    spec1: "Organic Leaf Tea",
    spec2: "Grade A Saffron",
    spec3: "Eco-friendly Bags",
    spec4: "Artisanal Blends",
    spec5: "Resealable Tin",
    spec6: "Pure Aroma",
  },
  bundlesPage: {
    overline: "Curated Sets",
    title: "Premium Saffron",
    titleAccent: "Gift Bundles",
    selectBundle: "Select Bundle",
    includes: "What's Included",
    requestBundle: "Request This Bundle",
  },
  contactPage: {
    overline: "Get in Touch",
    title: "Contact Us",
    subtitle:
      "We value our connections across the globe. Reach out for partnerships, wholesale inquiries, or just to say hello.",
    visitUs: "Visit Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    whatsapp: "WhatsApp",
    hours: "Working Hours",
    hoursValue: "Mon–Sat, 9:00 – 18:00 (UTC+1)",
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
    overline: "Marocain",
    titleLine1: "Safran",
    titleLine2: "Premium",
    subtitle: "Nous offrons ce que les meilleures cuisines du monde recherchent.",
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
    readMore: "Lire la suite",
    viewAll: "Voir tous les articles",
    discoverStory: "Découvrir notre histoire",
    learnAboutSaffron: "Découvrir le safran",
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
  heritageSection: {
    overline: "À propos du safran",
    title: "L'",
    titleAccent: "Origine",
    paragraph1:
      "Niché entre le Haut-Atlas et l'Anti-Atlas, Taliouine est le cœur du safran marocain. Ici, l'altitude et le sol volcanique unique créent un terroir incomparable.",
    paragraph2:
      "iD BAKHCHANE est plus qu'une coopérative : c'est une lignée de gardiens préservant une tradition millénaire.",
    statLabel: "Terroir",
  },
  harvestGrid: {
    overline: "Le Procédé",
    title: "L'Art de la Récolte",
    subtitle: "Une course contre le soleil",
    octoberLabel: "Octobre",
    dawnGathering: "La Cueillette à l'Aube",
    dawnGatheringDesc:
      "Des fleurs cueillies avant que le soleil ne les ouvre pleinement à l'air matinal parfumé de safran.",
    flowersCount: "150 000",
    flowersLabel: "Fleurs",
    flowersFor: "Pour 1 kg de safran",
    qualityControl: "Contrôle qualité",
    manualPrecision: "Précision manuelle",
    manualPrecisionDesc:
      "Aucune machine ne peut reproduire le geste délicat des artisanes de notre communauté. Chaque filament est manipulé avec révérence.",
  },
  sustainability: {
    overline: "Notre engagement",
    title: "Durabilité & le cycle du vivant",
    description:
      "Notre coopérative veille à ce que la richesse générée par « l'Or Rouge » revienne directement aux familles de Taliouine, finançant l'éducation et la préservation de l'eau.",
    qualityTitle: "Qualité sans compromis",
    qualityDesc:
      "Stricte conformité aux normes ISO 3632. Chaque lot est testé en laboratoire pour ses taux de safranal, crocine et picrocrocine.",
    communityTitle: "La communauté d'abord",
    communityDesc:
      "Nous offrons des salaires équitables 30 % supérieurs au marché, en autonomisant les femmes de la région de Taliouine Est.",
    organicTitle: "Démarche biologique",
    organicDesc:
      "Zéro pesticide chimique. Nous utilisons des techniques de compostage ancestrales qui respectent les rythmes naturels de la terre.",
  },
  benefits: {
    intro:
      "Riche en antioxydants, vitamines et minéraux, le safran est utilisé depuis des siècles dans diverses traditions médicinales pour :",
    depression: "Dépression & anxiété",
    immune: "Fonction immunitaire",
    acne: "Acné & hyperpigmentation",
    pms: "Inconfort menstruel / SPM",
    bloodPressure: "Hypertension artérielle",
  },
  origin: {
    overline: "Le point d'origine",
    titleCity: "Taliouine,",
    titleCountry: "Maroc",
    description:
      "Les régions de Taliouine et Taznakhte sont le cœur historique de la culture du safran au Maroc, offrant le sol volcanique unique d'où naît la majorité de l'or rouge du pays.",
    crocineTitle: "Crocine",
    crocineSub: "Pouvoir colorant",
    crocineDesc:
      "Concentrations record vérifiées selon les normes ISO Catégorie I.",
    safranalTitle: "Safranal",
    safranalSub: "Profil aromatique",
    safranalDesc:
      "Profil parfumé profond perfectionné à 1 500 m d'altitude.",
    terroirTitle: "Terroir d'Excellence",
    terroirDesc:
      "Des actes fonciers du XVIᵉ siècle attestent de cet héritage intemporel de la culture du safran, qu'iD BAKHCHANE perpétue par une cueillette manuelle méticuleuse.",
    originPoint: "Point d'origine",
  },
  blogSection: {
    overline: "Insights éditoriaux",
    titleLine1: "Les dernières du",
    titleAccent: "Magazine Bakhchane",
    viewAll: "Voir tous les articles",
  },
  quote: {
    text:
      "« Nous ne récoltons pas seulement le safran ; nous préservons la lumière de nos ancêtres et le parfum de nos montagnes. »",
    attribution: "Membres de la coopérative iD BAKHCHANE",
  },
  bulk: {
    overline: "Collection coopérative",
    titleBrand: "iD BAKHCHANE",
    titleAccent: "Sélection en gros",
    selectQuantity: "Choisir la quantité",
    save: "Économisez",
    requestQuote: "Demander un devis grossiste",
    feature1Title: "DHL Express International",
    feature1Desc: "Livraison sécurisée vers 200+ pays.",
    feature2Title: "Qualité certifiée",
    feature2Desc: "Certification ISO 3632 incluse pour chaque lot.",
    technicalSpecs: "Spécifications techniques",
    description:
      "Directement de notre coopérative familiale à Taliouine. Filaments de safran Grade A premium, cueillis et séchés à la main pour préserver leur arôme intense et leur teinte cramoisie.",
    qty50Desc: "Réserve personnelle",
    qty100Desc: "Professionnel culinaire",
    qty250Desc: "Vrac restaurant",
    qty500Desc: "Partenaire grossiste",
    spec1: "Catégorie 1 (Negin)",
    spec2: "100 % traçable",
    spec3: "Récolte 2025",
    spec4: "Origine Taliouine",
    spec5: "Humidité < 12 %",
    spec6: "Pureté vérifiée",
  },
  teaPage: {
    overline: "La série Infusion",
    titleLine1: "Collection",
    titleAccent: "Thé au Safran",
    quote:
      "« Une symphonie de thés d'exception et du safran légendaire de Taliouine. »",
    perTin: "Par boîte de 12 sachets",
    availableBlends: "Mélanges disponibles",
    senchaName: "Sencha au Safran",
    senchaType: "Mélange de thé vert premium",
    rooibosName: "Rooibos au Safran",
    rooibosType: "Mélange biologique (sans caféine)",
    chaiName: "Chai au Safran",
    chaiType: "Mélange épicé au thé noir",
    description:
      "Nos sachets pyramidaux permettent une expansion complète des feuilles, assurant une extraction profonde du thé comme du safran. Chaque mélange est soigneusement équilibré pour mettre en valeur la complexité aromatique du safran de notre coopérative.",
    spec1: "Thé en feuilles bio",
    spec2: "Safran Grade A",
    spec3: "Sachets éco-responsables",
    spec4: "Mélanges artisanaux",
    spec5: "Boîte refermable",
    spec6: "Arôme pur",
  },
  bundlesPage: {
    overline: "Coffrets composés",
    title: "Coffrets cadeaux",
    titleAccent: "de safran premium",
    selectBundle: "Choisir le coffret",
    includes: "Contenu",
    requestBundle: "Commander ce coffret",
  },
  contactPage: {
    overline: "Nous contacter",
    title: "Contactez-nous",
    subtitle:
      "Nous valorisons nos liens à travers le monde. Contactez-nous pour partenariats, demandes de gros, ou simplement pour dire bonjour.",
    visitUs: "Nous rendre visite",
    callUs: "Appelez-nous",
    emailUs: "Écrivez-nous",
    whatsapp: "WhatsApp",
    hours: "Horaires",
    hoursValue: "Lun–Sam, 9 h 00 – 18 h 00 (UTC+1)",
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
    overline: "Marroquí",
    titleLine1: "Azafrán",
    titleLine2: "Premium",
    subtitle: "Ofrecemos lo que las mejores cocinas del mundo desean.",
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
    readMore: "Leer más",
    viewAll: "Ver todos los artículos",
    discoverStory: "Descubrir nuestra historia",
    learnAboutSaffron: "Saber más sobre el azafrán",
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
  heritageSection: {
    overline: "Sobre el azafrán",
    title: "El",
    titleAccent: "Origen",
    paragraph1:
      "Enclavada entre el Alto Atlas y el Anti-Atlas, Taliouine es el corazón del azafrán marroquí. Aquí, la altitud y el suelo volcánico único crean un terruño incomparable.",
    paragraph2:
      "iD BAKHCHANE es más que una cooperativa: es un linaje de guardianes que protegen una tradición milenaria.",
    statLabel: "Terruño",
  },
  harvestGrid: {
    overline: "El proceso",
    title: "El arte de la cosecha",
    subtitle: "Una carrera contra el sol",
    octoberLabel: "Octubre",
    dawnGathering: "La recolección al alba",
    dawnGatheringDesc:
      "Flores recolectadas antes de que el sol las abra completamente al aire matinal perfumado de azafrán.",
    flowersCount: "150.000",
    flowersLabel: "Flores",
    flowersFor: "Necesarias para 1 kg de azafrán",
    qualityControl: "Control de calidad",
    manualPrecision: "Precisión manual",
    manualPrecisionDesc:
      "Ninguna máquina puede replicar el toque delicado de las artesanas de nuestra comunidad. Cada hebra se manipula con reverencia.",
  },
  sustainability: {
    overline: "Nuestro compromiso",
    title: "Sostenibilidad y el círculo de la vida",
    description:
      "Nuestra cooperativa garantiza que la riqueza generada por el «Oro Rojo» regrese directamente a las familias de Taliouine, financiando educación y proyectos de conservación del agua.",
    qualityTitle: "Calidad sin concesiones",
    qualityDesc:
      "Estricto cumplimiento de las normas ISO 3632. Cada lote se analiza en laboratorio para sus niveles de safranal, crocina y picrocrocina.",
    communityTitle: "La comunidad primero",
    communityDesc:
      "Ofrecemos salarios justos un 30 % superiores al promedio del mercado, empoderando a las mujeres de la región del este de Taliouine.",
    organicTitle: "Cuidado orgánico",
    organicDesc:
      "Cero pesticidas químicos. Usamos técnicas ancestrales de compostaje que honran los ritmos naturales de la tierra.",
  },
  benefits: {
    intro:
      "Rico en antioxidantes, vitaminas y minerales, el azafrán se ha utilizado en diversas tradiciones medicinales para:",
    depression: "Depresión y ansiedad",
    immune: "Función inmunológica",
    acne: "Acné e hiperpigmentación",
    pms: "Molestias menstruales / SPM",
    bloodPressure: "Presión arterial alta",
  },
  origin: {
    overline: "El punto de origen",
    titleCity: "Taliouine,",
    titleCountry: "Marruecos",
    description:
      "Las regiones de Taliouine y Taznakhte son el corazón histórico de la cultura del azafrán en Marruecos, ofreciendo el suelo volcánico único donde nace la mayoría del oro rojo del país.",
    crocineTitle: "Crocina",
    crocineSub: "Poder colorante",
    crocineDesc:
      "Concentraciones récord verificadas según las normas ISO Categoría I.",
    safranalTitle: "Safranal",
    safranalSub: "Perfil aromático",
    safranalDesc:
      "Perfil aromático profundo perfeccionado a 1500 m de altitud.",
    terroirTitle: "Terruño de excelencia",
    terroirDesc:
      "Escrituras de tierras del siglo XVI verifican este legado atemporal del cultivo del azafrán, que iD BAKHCHANE preserva mediante la cosecha manual meticulosa.",
    originPoint: "Punto de origen",
  },
  blogSection: {
    overline: "Insights editoriales",
    titleLine1: "Lo último de la",
    titleAccent: "Revista Bakhchane",
    viewAll: "Ver todos los artículos",
  },
  quote: {
    text:
      "«No solo cosechamos azafrán; preservamos la luz de nuestros ancestros y la fragancia de nuestras montañas.»",
    attribution: "Miembros de la cooperativa iD BAKHCHANE",
  },
  bulk: {
    overline: "Colección cooperativa",
    titleBrand: "iD BAKHCHANE",
    titleAccent: "Selección mayorista",
    selectQuantity: "Seleccionar cantidad",
    save: "Ahorra",
    requestQuote: "Solicitar cotización mayorista",
    feature1Title: "DHL Express Internacional",
    feature1Desc: "Envíos seguros a más de 200 países.",
    feature2Title: "Calidad certificada",
    feature2Desc: "Certificación ISO 3632 por lote incluida.",
    technicalSpecs: "Especificaciones técnicas",
    description:
      "Directo desde nuestra cooperativa familiar en Taliouine. Hebras de azafrán Grado A premium, cosechadas a mano y secadas para preservar su intenso aroma y profundo tono carmesí.",
    qty50Desc: "Reserva personal",
    qty100Desc: "Profesional culinario",
    qty250Desc: "Restaurante mayorista",
    qty500Desc: "Socio mayorista",
    spec1: "Categoría 1 (Negin)",
    spec2: "100 % trazable",
    spec3: "Cosecha 2025",
    spec4: "Origen Taliouine",
    spec5: "Humedad < 12 %",
    spec6: "Pureza verificada",
  },
  teaPage: {
    overline: "La serie de infusiones",
    titleLine1: "Colección",
    titleAccent: "Té de Azafrán",
    quote:
      "«Una sinfonía de tés de clase mundial y el azafrán legendario de Taliouine.»",
    perTin: "Por lata de 12 sobres",
    availableBlends: "Mezclas disponibles",
    senchaName: "Sencha con Azafrán",
    senchaType: "Mezcla premium de té verde",
    rooibosName: "Rooibos con Azafrán",
    rooibosType: "Mezcla orgánica (sin cafeína)",
    chaiName: "Chai con Azafrán",
    chaiType: "Mezcla especiada de té negro",
    description:
      "Nuestras bolsitas piramidales permiten la expansión completa de las hojas, asegurando una extracción profunda tanto del té como de las hebras de azafrán. Cada mezcla está cuidadosamente equilibrada para destacar la complejidad aromática del azafrán de nuestra cooperativa.",
    spec1: "Té en hoja orgánico",
    spec2: "Azafrán Grado A",
    spec3: "Bolsitas eco",
    spec4: "Mezclas artesanales",
    spec5: "Lata resellable",
    spec6: "Aroma puro",
  },
  bundlesPage: {
    overline: "Sets seleccionados",
    title: "Sets de regalo",
    titleAccent: "de azafrán premium",
    selectBundle: "Elegir el set",
    includes: "Qué incluye",
    requestBundle: "Solicitar este set",
  },
  contactPage: {
    overline: "Ponte en contacto",
    title: "Contáctanos",
    subtitle:
      "Valoramos nuestras conexiones en todo el mundo. Contáctanos para asociaciones, consultas mayoristas, o simplemente para saludar.",
    visitUs: "Visítanos",
    callUs: "Llámanos",
    emailUs: "Escríbenos",
    whatsapp: "WhatsApp",
    hours: "Horario",
    hoursValue: "Lun–Sáb, 9:00 – 18:00 (UTC+1)",
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
