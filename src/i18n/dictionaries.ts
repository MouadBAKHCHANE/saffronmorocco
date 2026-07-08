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

  /* About page */
  about: {
    heroOverline: string;
    heroSubtitle: string;
    botanyTag: string;
    botanyTitle: string;
    botanyDesc: string;
    purityOverline: string;
    purityTitle: string;
    purityTitleAccent: string;
    purityIntro: string;
    shapeLabel: string;
    shapeDesc: string;
    colorLabel: string;
    colorDesc: string;
    textureLabel: string;
    textureDesc: string;
    wellnessOverline: string;
    wellnessTitle: string;
    wellnessTitleAccent: string;
    wellnessDesc: string;
    ctaTagline: string;
    ctaShop: string;
    ctaHeritage: string;
    moodSubtitle: string;
    moodTitle: string;
    moodDesc: string;
    immuneSubtitle: string;
    immuneTitle: string;
    immuneDesc: string;
    acneSubtitle: string;
    acneTitle: string;
    acneDesc: string;
    pmsSubtitle: string;
    pmsTitle: string;
    pmsDesc: string;
    bpSubtitle: string;
    bpTitle: string;
    bpDesc: string;
  };

  /* Bundles page */
  bundles: {
    overline: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    save: string;
    chooseCollection: string;
    whatsInside: string;
    reserveBundle: string;
    luxuryTag: string;
    savingsTag: string;
    gourmetLabel: string;
    gourmetDesc: string;
    connoisseurLabel: string;
    connoisseurDesc: string;
    heritageLabel: string;
    heritageDesc: string;
  };

  /* Blog page */
  blogPage: {
    overline: string;
    titleLine1: string;
    titleAccent: string;
  };

  /* Products page hero */
  productsPage: {
    overline: string;
    titleLine1: string;
    titleLine2: string;
  };

  /* Contact info */
  contactInfo: {
    reachOutTitle: string;
    reachOutAccent: string;
    reachOutDesc: string;
    origin: string;
    viewMaps: string;
    emailUsLabel: string;
    callOrWhatsApp: string;
    messageOnWhatsApp: string;
  };

  /* Heritage page */
  heritagePage: {
    heroOverline: string;
    heroTitle: string;
    heroAccent: string;
    cultivationStages: string;
    cultivationTitle: string;
    cultivationAccent: string;
    cultivationIntro: string;
    rotationTitle: string;
    rotationDesc: string;
    soilTitle: string;
    soilDesc: string;
    plantationTitle: string;
    plantationDesc: string;
    irrigationTitle: string;
    irrigationDesc: string;
    fertilizationTitle: string;
    fertilizationDesc: string;
    cultivationStepTitle: string;
    cultivationStepDesc: string;
    stage07: string;
    gatheringTitle: string;
    gatheringAccent: string;
    gatheringDesc: string;
    gatheringQuote: string;
    gatheringWindow: string;
    gatheringWindowValue: string;
    gatheringWindowDesc: string;
    stage08: string;
    separationTitle: string;
    separationAccent: string;
    quoteTradition: string;
    quoteExtraction: string;
    stage09: string;
    dryingTitle: string;
    dryingAccent: string;
    dryingStep1: string;
    dryingStep2: string;
    stage10: string;
    purityTitle: string;
    purityAccent: string;
    purityCard1Label: string;
    purityCard1Title: string;
    purityCard1Desc: string;
    purityCard2Label: string;
    purityCard2Title: string;
    purityCard2Desc: string;
    purityCard3Label: string;
    purityCard3Title: string;
    purityCard3Desc: string;
    stage11: string;
    precisionTitle: string;
    precisionAccent: string;
    precisionQuote: string;
    vialSelection: string;
    vialSelectionDesc: string;
    sealedLegacy: string;
    sealedLegacyDesc: string;
    journeyComplete: string;
    enterCollection: string;
    journeyTagline: string;
  };

  /* Legal pages — privacy, terms, shipping */
  legal: {
    privacyTitle: string;
    privacySubtitle: string;
    privacyIntro: string;
    privacyIntroBody: string;
    privacyDataCollection: string;
    privacyDataCollectionBody: string;
    privacyUseInfo: string;
    privacyUseInfo1: string;
    privacyUseInfo2: string;
    privacyUseInfo3: string;
    privacySecurity: string;
    privacySecurityBody: string;

    termsTitle: string;
    termsSubtitle: string;
    termsAcceptance: string;
    termsAcceptanceBody: string;
    termsQuality: string;
    termsQualityBody: string;
    termsConduct: string;
    termsConductBody: string;
    termsModifications: string;
    termsModificationsBody: string;

    shippingTitle: string;
    shippingSubtitle: string;
    shippingOrigin: string;
    shippingOriginBody: string;
    shippingInternational: string;
    shippingInternationalBody: string;
    shippingPackaging: string;
    shippingPackagingBody: string;
    shippingCustoms: string;
    shippingCustomsBody: string;
  };

  /* Blog list */
  blogList: {
    all: string;
    noArticles: string;
    readArticle: string;
    minRead: string;
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
  about: {
    heroOverline: "Understanding & Excellence",
    heroSubtitle: "Discover the soul of Moroccan Red Gold, from its botanical secrets to the sacred terroir of Taliouine.",
    botanyTag: "Botany",
    botanyTitle: "The Enigma of Crocus Sativus",
    botanyDesc: "Saffron is not a mere spice; it is a botanical miracle. Derived from the Crocus Sativus flower, it belongs to the Iridaceae family. Its unique trait? It is sterile. Without the patient intervention of human hands to divide its bulbs, this flower would vanish. It lives against the grain, dormant during the summer heat and only awakening at the first autumn frost.",
    purityOverline: "The Label of Purity",
    purityTitle: "Identify",
    purityTitleAccent: "The Truth",
    purityIntro: "Facing a global fraud estimate of 80%, iD BAKHCHANE is committed to absolute transparency. Here is how to identify our certified ISO 3632 Grade 1 saffron:",
    shapeLabel: "The Shape",
    shapeDesc: "Stigmas must be trumpet-shaped, wide at the top and thin at the base.",
    colorLabel: "The Color",
    colorDesc: "A uniform blood red. No traces of yellow or white, which indicate poor quality.",
    textureLabel: "The Texture",
    textureDesc: "Slightly curved and rigid. They should not feel greasy to the touch.",
    wellnessOverline: "Wellness & Science",
    wellnessTitle: "Benefits &",
    wellnessTitleAccent: "Alchemy",
    wellnessDesc: "Far more than a spice, saffron is an ancestral remedy whose exceptional virtues are confirmed by modern science. It acts as a bridge between age-old wisdom and contemporary pharmacological excellence.",
    ctaTagline: "Excellence within a stigma's reach.",
    ctaShop: "Shop the Collection",
    ctaHeritage: "Our Heritage",
    moodSubtitle: "Mood Regulation",
    moodTitle: "Depression & Anxiety",
    moodDesc: "Known as the 'Sunshine Spice', saffron contains natural compounds that boost serotonin levels, acting as a gentle yet potent emotional stabilizer.",
    immuneSubtitle: "Natural Defense",
    immuneTitle: "Immune Function",
    immuneDesc: "Packed with carotenoids and Vitamin C, it strengthens the body's natural defenses and provides deep cellular protection against oxidative stress.",
    acneSubtitle: "Dermatological Care",
    acneTitle: "Acne & Hyperpigmentation",
    acneDesc: "Its anti-inflammatory and antibacterial properties make it a sacred ingredient for skin health, brightening the complexion and fading dark spots.",
    pmsSubtitle: "Analgesic Support",
    pmsTitle: "Menstrual Discomfort / PMS",
    pmsDesc: "A traditional ally for women's health, it effectively relieves PMS symptoms and menstrual cramps through its antispasmodic properties.",
    bpSubtitle: "Cardiovascular Vitality",
    bpTitle: "High Blood Pressure",
    bpDesc: "The combination of crocin and potassium helps manage blood pressure levels and supports overall heart health and circulation.",
  },
  bundles: {
    overline: "Curated Collections",
    title: "Premium Saffron",
    titleAccent: "Gift Bundles",
    subtitle: "Elevate your culinary journey or surprise a loved one with our meticulously assembled gift sets, bringing the best of our Moroccan cooperative to your door.",
    save: "Save",
    chooseCollection: "Choose Your Collection",
    whatsInside: "What's Inside",
    reserveBundle: "Reserve Gift Bundle",
    luxuryTag: "Luxury Gifting",
    savingsTag: "Bundle Savings",
    gourmetLabel: "Gourmet Discovery",
    gourmetDesc: "The complete introduction to our cooperative's heritage. Perfect for the home chef looking to master saffron.",
    connoisseurLabel: "Tea Connoisseur",
    connoisseurDesc: "A curated set for the ultimate tea ritual, featuring all three of our signature saffron infusions.",
    heritageLabel: "Heritage Gift Set",
    heritageDesc: "Our most prestigious bundle. A comprehensive collection of our finest harvests, packaged in a master-crafted gift box.",
  },
  blogPage: {
    overline: "The Blog",
    titleLine1: "Editorial",
    titleAccent: "Magazine",
  },
  productsPage: {
    overline: "The Collection",
    titleLine1: "Curated Saffron,",
    titleLine2: "By the Gram.",
  },
  contactInfo: {
    reachOutTitle: "Reach",
    reachOutAccent: "Out",
    reachOutDesc: "Whether you're looking for wholesale partnerships or have questions about our artisanal harvest, we are here to assist you.",
    origin: "Our Origin",
    viewMaps: "View on Google Maps →",
    emailUsLabel: "Email Us",
    callOrWhatsApp: "Call or WhatsApp",
    messageOnWhatsApp: "Message on WhatsApp",
  },
  heritagePage: {
    heroOverline: "Tracing the origins of crimson gold",
    heroTitle: "The Artisanal",
    heroAccent: "Journey",
    cultivationStages: "Stages One–Six: Cultivation",
    cultivationTitle: "The Cultivation",
    cultivationAccent: "Cycle",
    cultivationIntro: "From soil to flower, the six agricultural rituals that precede every harvest in the Taliouine highlands.",
    rotationTitle: "Crop Rotation",
    rotationDesc: "Saffron bulbs are rotated every 5–9 years. Fields are regenerated by planting legumes, cereals, or crucifers to restore soil vitality.",
    soilTitle: "Soil Preparation",
    soilDesc: "One month before flowering, the earth is worked by hand with rakes on smaller plots, or mechanically on larger modern fields.",
    plantationTitle: "Plantation",
    plantationDesc: "Planting begins in September at 50–70 bulbs per hectare. All bulbs are produced locally to guarantee the authenticity of Taliouine saffron.",
    irrigationTitle: "Irrigation",
    irrigationDesc: "Traditional gravity irrigation sustains nearly every farm, while drip-irrigation systems are being introduced across select modern fields.",
    fertilizationTitle: "Fertilization",
    fertilizationDesc: "Only organic matter — natural manure and compost — nourishes the soil. No chemical fertilizers or synthetic treatments are ever used.",
    cultivationStepTitle: "Cultivation",
    cultivationStepDesc: "Weeding starts in March, performed entirely by hand. The uprooted weeds are gathered and given to livestock, closing the cycle.",
    stage07: "Stage Seven: Harvesting",
    gatheringTitle: "The Dawn",
    gatheringAccent: "Gathering",
    gatheringDesc: "Before the first ray of sun touches the Taliouine valleys, our harvesters begin their work, picking each Crocus sativus flower by hand while it is still closed, shielding the delicate stigmas within from the heat of the Moroccan sun. This pre-dawn ritual is a delicate, demanding task performed in the cold, and it is carried out almost entirely by women, who make up close to 70% of the pickers.",
    gatheringQuote: "Preserving the soul of the flower.",
    gatheringWindow: "Window",
    gatheringWindowValue: "3 Weeks",
    gatheringWindowDesc: "The fleeting annual window of perfection.",
    stage08: "Stage Eight: Extraction",
    separationTitle: "The",
    separationAccent: "Separation",
    quoteTradition: '"A tradition passed down through generations, performed by expert hands."',
    quoteExtraction: "The delicate extraction of the three red stigmas is performed by the expert hands of our cooperative's women. It takes over 150,000 flowers to produce just one kilogram of iD BAKHCHANE saffron.",
    stage09: "Stage Nine: Preservation",
    dryingTitle: "Drying &",
    dryingAccent: "Curing",
    dryingStep1: "Natural evaporation on fine silk screens in shaded, temperature-controlled rooms, preserving every trace of aroma.",
    dryingStep2: "Storing in airtight containers to reach peak flavor complexity, locking in record-high Crocin levels.",
    stage10: "Stage Ten: Verification",
    purityTitle: "The Standard of",
    purityAccent: "Purity",
    purityCard1Label: "ISO 3632-1",
    purityCard1Title: "Grade I Testing",
    purityCard1Desc: "Rigorously analyzed to exceed international standards for color, flavor, and purity.",
    purityCard2Label: "PURE ORIGIN",
    purityCard2Title: "100% Organic",
    purityCard2Desc: "Zero additives. Zero dyes. Just the pure soil of Taliouine and the morning dew.",
    purityCard3Label: "ETHICAL",
    purityCard3Title: "Social Impact",
    purityCard3Desc: "Directly supporting the women's cooperatives that safeguard this heritage.",
    stage11: "Stage Eleven: Final Perfection",
    precisionTitle: "Art of",
    precisionAccent: "Precision",
    precisionQuote: '"Every gram is weighed with pharmaceutical-grade accuracy, protected in medical-grade glass to preserve it forever."',
    vialSelection: "Vial Selection",
    vialSelectionDesc: "Violet glass protection to block UV rays and lock in potency.",
    sealedLegacy: "Sealed Legacy",
    sealedLegacyDesc: "Individually hand-sealed for guaranteed authenticity.",
    journeyComplete: "The Journey is Complete",
    enterCollection: "Enter the Collection",
    journeyTagline: "Experience the pinnacle of Taliouine's Heritage",
  },
  legal: {
    privacyTitle: "Privacy Policy",
    privacySubtitle: "Last updated: April 2026. Your privacy is fundamental to our relationship.",
    privacyIntro: "Introduction",
    privacyIntroBody: "At iD BAKHCHANE, we respect your privacy and are committed to protecting the personal data you share with us. This policy describes how we collect, use, and safeguard your information when you visit our website or purchase our premium saffron.",
    privacyDataCollection: "Data Collection",
    privacyDataCollectionBody: "We collect personal information that you voluntarily provide, such as your name, email address, shipping address, and payment details when making a purchase. This data is essential for fulfilling your orders and providing exceptional service.",
    privacyUseInfo: "Use of Information",
    privacyUseInfo1: "To process and ship your saffron orders directly from the cooperative.",
    privacyUseInfo2: "To communicate order status and respond to your inquiries.",
    privacyUseInfo3: "To send periodic newsletters or heritage updates if you have opted in.",
    privacySecurity: "Security",
    privacySecurityBody: "We implement industry-standard security measures, including SSL encryption, to protect your sensitive data. We do not sell or trade your personal information to third parties.",

    termsTitle: "Terms of Service",
    termsSubtitle: "Conditions of use for our platform and artisanal services.",
    termsAcceptance: "Acceptance",
    termsAcceptanceBody: "By accessing this website, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
    termsQuality: "Artisanal Quality",
    termsQualityBody: "Every order from iD BAKHCHANE consists of high-quality, hand-harvested saffron. Variations in harvest color and aroma are natural characteristics of the Crocus sativus and a testament to its authentic, organic origin.",
    termsConduct: "User Conduct",
    termsConductBody: "Users are encouraged to explore our heritage and products for personal, non-commercial use. The reproduction of any brand assets, photography, or editorial content without explicit written consent is strictly prohibited.",
    termsModifications: "Modifications",
    termsModificationsBody: "We reserve the right to revise these terms of service at any time without notice. By using this website, you agree to be bound by the then-current version of these terms.",

    shippingTitle: "Shipping Policy",
    shippingSubtitle: "Our journey from the fields of Taliouine to your world.",
    shippingOrigin: "Origin of Shipping",
    shippingOriginBody: "All our saffron is packaged and shipped directly from our cooperative facilities in Morocco. This ensures the integrity of the harvest and supports the local economy of our farmers.",
    shippingInternational: "International Delivery",
    shippingInternationalBody: "We ship globally using premium secure courier services (DHL, FedEx). Delivery times typically range between 5 to 10 business days depending on your location.",
    shippingPackaging: "Packaging & Care",
    shippingPackagingBody: "Our saffron is double-sealed in air-tight, UV-protective jars to preserve aroma and potency during transit. We take extreme care to ensure your order arrives in pristine condition.",
    shippingCustoms: "Customs & Duties",
    shippingCustomsBody: "Please note that international orders may be subject to local import duties and taxes. These charges are the responsibility of the recipient and are not included in our shipping rates.",
  },
  blogList: {
    all: "All",
    noArticles: "No articles in this category yet.",
    readArticle: "Read Article",
    minRead: "min read",
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
  about: {
    heroOverline: "Compréhension & Excellence",
    heroSubtitle: "Découvrez l'âme de l'Or Rouge marocain, de ses secrets botaniques au terroir sacré de Taliouine.",
    botanyTag: "Botanique",
    botanyTitle: "L'Énigme du Crocus Sativus",
    botanyDesc: "Le safran n'est pas une simple épice ; c'est un miracle botanique. Issu de la fleur de Crocus Sativus, il appartient à la famille des Iridacées. Sa particularité ? Il est stérile. Sans l'intervention patiente des mains humaines pour diviser ses bulbes, cette fleur disparaîtrait. Elle vit à contre-courant, dormante sous la chaleur estivale et ne s'éveillant qu'aux premières gelées d'automne.",
    purityOverline: "Le Label de Pureté",
    purityTitle: "Identifier",
    purityTitleAccent: "La Vérité",
    purityIntro: "Face à une estimation mondiale de fraude de 80 %, iD BAKHCHANE s'engage à une transparence absolue. Voici comment identifier notre safran certifié ISO 3632 Grade 1 :",
    shapeLabel: "La Forme",
    shapeDesc: "Les stigmates doivent être en forme de trompette, larges en haut et fins à la base.",
    colorLabel: "La Couleur",
    colorDesc: "Rouge sang uniforme. Aucune trace de jaune ou de blanc, qui indiquent une qualité médiocre.",
    textureLabel: "La Texture",
    textureDesc: "Légèrement courbés et rigides. Ils ne doivent pas être gras au toucher.",
    wellnessOverline: "Bien-être & Science",
    wellnessTitle: "Bienfaits &",
    wellnessTitleAccent: "Alchimie",
    wellnessDesc: "Bien plus qu'une épice, le safran est un remède ancestral dont les vertus exceptionnelles sont confirmées par la science moderne. Il fait le pont entre la sagesse ancestrale et l'excellence pharmacologique contemporaine.",
    ctaTagline: "L'excellence à portée d'un stigmate.",
    ctaShop: "Voir la collection",
    ctaHeritage: "Notre héritage",
    moodSubtitle: "Régulation de l'humeur",
    moodTitle: "Dépression & Anxiété",
    moodDesc: "Connu comme « l'Épice du Soleil », le safran contient des composés naturels qui stimulent les niveaux de sérotonine, agissant comme un stabilisateur émotionnel doux mais puissant.",
    immuneSubtitle: "Défense naturelle",
    immuneTitle: "Fonction immunitaire",
    immuneDesc: "Riche en caroténoïdes et en vitamine C, il renforce les défenses naturelles de l'organisme et offre une protection cellulaire profonde contre le stress oxydatif.",
    acneSubtitle: "Soins dermatologiques",
    acneTitle: "Acné & Hyperpigmentation",
    acneDesc: "Ses propriétés anti-inflammatoires et antibactériennes en font un ingrédient précieux pour la santé cutanée, illuminant le teint et atténuant les taches.",
    pmsSubtitle: "Soutien analgésique",
    pmsTitle: "Inconfort menstruel / SPM",
    pmsDesc: "Allié traditionnel de la santé féminine, il soulage efficacement les symptômes du SPM et les crampes menstruelles grâce à ses propriétés antispasmodiques.",
    bpSubtitle: "Vitalité cardiovasculaire",
    bpTitle: "Hypertension artérielle",
    bpDesc: "La combinaison de crocine et de potassium aide à réguler la pression artérielle et soutient la santé cardiaque globale et la circulation.",
  },
  bundles: {
    overline: "Coffrets composés",
    title: "Coffrets cadeaux",
    titleAccent: "Safran Premium",
    subtitle: "Sublimez votre parcours culinaire ou surprenez un proche avec nos sets cadeaux assemblés avec soin, apportant le meilleur de notre coopérative marocaine jusqu'à votre porte.",
    save: "Économisez",
    chooseCollection: "Choisir votre coffret",
    whatsInside: "Contenu du coffret",
    reserveBundle: "Réserver ce coffret",
    luxuryTag: "Cadeau de prestige",
    savingsTag: "Économie coffret",
    gourmetLabel: "Découverte Gourmande",
    gourmetDesc: "L'introduction complète à l'héritage de notre coopérative. Idéal pour le cuisinier amateur qui souhaite maîtriser le safran.",
    connoisseurLabel: "Connaisseur de Thé",
    connoisseurDesc: "Un set composé pour le rituel du thé ultime, avec nos trois infusions signature au safran.",
    heritageLabel: "Coffret Héritage",
    heritageDesc: "Notre coffret le plus prestigieux. Une collection complète de nos meilleures récoltes, présentée dans un coffret cadeau artisanal.",
  },
  blogPage: {
    overline: "Le Journal",
    titleLine1: "Magazine",
    titleAccent: "Éditorial",
  },
  productsPage: {
    overline: "La Collection",
    titleLine1: "Safran d'exception,",
    titleLine2: "au gramme près.",
  },
  contactInfo: {
    reachOutTitle: "Nous",
    reachOutAccent: "Contacter",
    reachOutDesc: "Que vous recherchiez des partenariats de gros ou que vous ayez des questions sur notre récolte artisanale, nous sommes là pour vous aider.",
    origin: "Notre Origine",
    viewMaps: "Voir sur Google Maps →",
    emailUsLabel: "Écrivez-nous",
    callOrWhatsApp: "Appel ou WhatsApp",
    messageOnWhatsApp: "Message WhatsApp",
  },
  heritagePage: {
    heroOverline: "Aux origines de l'or cramoisi",
    heroTitle: "Le Voyage",
    heroAccent: "Artisanal",
    cultivationStages: "Étapes Un à Six : Culture",
    cultivationTitle: "Le Cycle de",
    cultivationAccent: "Culture",
    cultivationIntro: "De la terre à la fleur, les six rituels agricoles qui précèdent chaque récolte sur les hauteurs de Taliouine.",
    rotationTitle: "Rotation des cultures",
    rotationDesc: "Les bulbes de safran sont alternés tous les 5 à 9 ans. Les champs sont régénérés en plantant des légumineuses, des céréales ou des crucifères pour restaurer la vitalité du sol.",
    soilTitle: "Préparation du sol",
    soilDesc: "Un mois avant la floraison, la terre est travaillée à la main au râteau sur les petites parcelles, ou mécaniquement sur les champs modernes plus vastes.",
    plantationTitle: "Plantation",
    plantationDesc: "La plantation commence en septembre, avec 50 à 70 bulbes par hectare. Tous les bulbes sont produits localement pour garantir l'authenticité du safran de Taliouine.",
    irrigationTitle: "Irrigation",
    irrigationDesc: "L'irrigation gravitaire traditionnelle nourrit la quasi-totalité des fermes, tandis que des systèmes au goutte-à-goutte sont introduits sur certains champs modernes.",
    fertilizationTitle: "Fertilisation",
    fertilizationDesc: "Seule la matière organique — fumier naturel et compost — nourrit le sol. Aucun engrais chimique ni traitement synthétique n'est jamais utilisé.",
    cultivationStepTitle: "Sarclage",
    cultivationStepDesc: "Le désherbage commence en mars, entièrement à la main. Les mauvaises herbes arrachées sont rassemblées et données au bétail, bouclant ainsi le cycle.",
    stage07: "Étape Sept : Récolte",
    gatheringTitle: "La Cueillette",
    gatheringAccent: "à l'Aube",
    gatheringDesc: "Avant que le premier rayon du soleil ne touche les vallées de Taliouine, nos cueilleuses commencent leur travail, ramassant chaque fleur de Crocus sativus à la main alors qu'elle est encore close, protégeant les délicats stigmates à l'intérieur de la chaleur du soleil marocain. Ce rituel de l'aube est une tâche délicate et exigeante effectuée dans le froid, et elle est presque entièrement réalisée par les femmes, qui représentent près de 70 % des cueilleurs.",
    gatheringQuote: "Préserver l'âme de la fleur.",
    gatheringWindow: "Fenêtre",
    gatheringWindowValue: "3 Semaines",
    gatheringWindowDesc: "L'éphémère fenêtre annuelle de la perfection.",
    stage08: "Étape Huit : Extraction",
    separationTitle: "La",
    separationAccent: "Séparation",
    quoteTradition: "« Une tradition transmise de génération en génération, par des mains expertes. »",
    quoteExtraction: "L'extraction délicate des trois stigmates rouges est réalisée par les mains expertes des femmes de notre coopérative. Il faut plus de 150 000 fleurs pour produire un seul kilogramme de safran iD BAKHCHANE.",
    stage09: "Étape Neuf : Conservation",
    dryingTitle: "Séchage &",
    dryingAccent: "Affinage",
    dryingStep1: "Évaporation naturelle sur de fines toiles de soie dans des salles ombragées à température contrôlée, préservant chaque nuance d'arôme.",
    dryingStep2: "Conservation dans des contenants hermétiques pour atteindre la complexité aromatique optimale et fixer des taux de crocine record.",
    stage10: "Étape Dix : Vérification",
    purityTitle: "Le Standard de",
    purityAccent: "Pureté",
    purityCard1Label: "ISO 3632-1",
    purityCard1Title: "Test Catégorie I",
    purityCard1Desc: "Analysé rigoureusement pour dépasser les normes internationales de couleur, saveur et pureté.",
    purityCard2Label: "ORIGINE PURE",
    purityCard2Title: "100 % Bio",
    purityCard2Desc: "Zéro additif. Zéro colorant. Seulement la terre pure de Taliouine et la rosée du matin.",
    purityCard3Label: "ÉTHIQUE",
    purityCard3Title: "Impact social",
    purityCard3Desc: "Soutien direct aux coopératives de femmes qui préservent ce patrimoine.",
    stage11: "Étape Onze : Perfection finale",
    precisionTitle: "L'Art de la",
    precisionAccent: "Précision",
    precisionQuote: "« Chaque gramme est pesé avec une précision pharmaceutique, protégé dans du verre médical pour le préserver à jamais. »",
    vialSelection: "Sélection des fioles",
    vialSelectionDesc: "Verre violet protégeant des UV pour préserver la puissance aromatique.",
    sealedLegacy: "Héritage scellé",
    sealedLegacyDesc: "Scellage manuel individuel garantissant l'authenticité.",
    journeyComplete: "Le voyage est complet",
    enterCollection: "Entrer dans la collection",
    journeyTagline: "Vivez le sommet de l'héritage de Taliouine",
  },
  legal: {
    privacyTitle: "Politique de confidentialité",
    privacySubtitle: "Dernière mise à jour : avril 2026. Votre vie privée est fondamentale dans notre relation.",
    privacyIntro: "Introduction",
    privacyIntroBody: "Chez iD BAKHCHANE, nous respectons votre vie privée et nous engageons à protéger les données personnelles que vous partagez avec nous. Cette politique décrit comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site ou achetez notre safran premium.",
    privacyDataCollection: "Collecte des données",
    privacyDataCollectionBody: "Nous recueillons les informations personnelles que vous fournissez volontairement — nom, e-mail, adresse de livraison et coordonnées de paiement — lors d'un achat. Ces données sont essentielles pour traiter vos commandes et fournir un service exceptionnel.",
    privacyUseInfo: "Utilisation des informations",
    privacyUseInfo1: "Pour traiter et expédier vos commandes de safran directement depuis la coopérative.",
    privacyUseInfo2: "Pour communiquer le statut de votre commande et répondre à vos demandes.",
    privacyUseInfo3: "Pour envoyer des newsletters ou actualités si vous y avez consenti.",
    privacySecurity: "Sécurité",
    privacySecurityBody: "Nous mettons en œuvre des mesures de sécurité conformes aux standards de l'industrie, dont le chiffrement SSL, pour protéger vos données sensibles. Nous ne vendons ni n'échangeons vos informations à des tiers.",

    termsTitle: "Conditions générales",
    termsSubtitle: "Conditions d'utilisation de notre plateforme et de nos services artisanaux.",
    termsAcceptance: "Acceptation",
    termsAcceptanceBody: "En accédant à ce site, vous acceptez d'être lié par ces conditions générales et toutes les lois et règlements applicables. Si vous n'acceptez pas ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.",
    termsQuality: "Qualité artisanale",
    termsQualityBody: "Chaque commande iD BAKHCHANE est composée de safran cueilli à la main de haute qualité. Les variations de couleur et d'arôme sont des caractéristiques naturelles du Crocus sativus et témoignent de son origine authentique et bio.",
    termsConduct: "Conduite de l'utilisateur",
    termsConductBody: "Les utilisateurs sont invités à explorer notre patrimoine et nos produits à des fins personnelles non commerciales. La reproduction de tout élément de marque, photographie ou contenu éditorial sans consentement écrit est strictement interdite.",
    termsModifications: "Modifications",
    termsModificationsBody: "Nous nous réservons le droit de réviser ces conditions à tout moment sans préavis. En utilisant ce site, vous acceptez la version en vigueur de ces conditions.",

    shippingTitle: "Politique d'expédition",
    shippingSubtitle: "Notre voyage des champs de Taliouine à votre table.",
    shippingOrigin: "Origine de l'expédition",
    shippingOriginBody: "Tout notre safran est conditionné et expédié directement depuis nos installations coopératives au Maroc. Cela garantit l'intégrité de la récolte et soutient l'économie locale de nos cultivateurs.",
    shippingInternational: "Livraison internationale",
    shippingInternationalBody: "Nous expédions à l'international via des transporteurs sécurisés premium (DHL, FedEx). Les délais de livraison sont généralement de 5 à 10 jours ouvrés selon votre localisation.",
    shippingPackaging: "Emballage & soin",
    shippingPackagingBody: "Notre safran est doublement scellé dans des bocaux hermétiques anti-UV pour préserver l'arôme et la puissance pendant le transport. Nous prenons un soin extrême pour que votre commande arrive en parfait état.",
    shippingCustoms: "Douanes & droits",
    shippingCustomsBody: "Veuillez noter que les commandes internationales peuvent être soumises à des droits de douane et taxes locaux. Ces frais sont à la charge du destinataire et ne sont pas inclus dans nos tarifs d'expédition.",
  },
  blogList: {
    all: "Tout",
    noArticles: "Aucun article dans cette catégorie pour l'instant.",
    readArticle: "Lire l'article",
    minRead: "min de lecture",
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
  about: {
    heroOverline: "Comprensión y Excelencia",
    heroSubtitle: "Descubre el alma del Oro Rojo marroquí, desde sus secretos botánicos hasta el sagrado terruño de Taliouine.",
    botanyTag: "Botánica",
    botanyTitle: "El Enigma del Crocus Sativus",
    botanyDesc: "El azafrán no es una simple especia; es un milagro botánico. Derivado de la flor Crocus Sativus, pertenece a la familia Iridaceae. Su rasgo único: es estéril. Sin la intervención paciente de manos humanas para dividir sus bulbos, esta flor desaparecería. Vive a contracorriente, dormida durante el calor del verano y despertando solo con las primeras heladas otoñales.",
    purityOverline: "El Sello de Pureza",
    purityTitle: "Identificar",
    purityTitleAccent: "La Verdad",
    purityIntro: "Ante una estimación mundial de fraude del 80 %, iD BAKHCHANE se compromete con la transparencia absoluta. Así se identifica nuestro azafrán certificado ISO 3632 Grado 1:",
    shapeLabel: "La Forma",
    shapeDesc: "Los estigmas deben tener forma de trompeta, anchos en la parte superior y estrechos en la base.",
    colorLabel: "El Color",
    colorDesc: "Rojo sangre uniforme. Sin rastros de amarillo o blanco, que indican baja calidad.",
    textureLabel: "La Textura",
    textureDesc: "Ligeramente curvados y rígidos. No deben sentirse grasosos al tacto.",
    wellnessOverline: "Bienestar y Ciencia",
    wellnessTitle: "Beneficios &",
    wellnessTitleAccent: "Alquimia",
    wellnessDesc: "Mucho más que una especia, el azafrán es un remedio ancestral cuyas excepcionales virtudes confirma la ciencia moderna. Actúa como puente entre la sabiduría milenaria y la excelencia farmacológica contemporánea.",
    ctaTagline: "La excelencia al alcance de un estigma.",
    ctaShop: "Ver la colección",
    ctaHeritage: "Nuestro patrimonio",
    moodSubtitle: "Regulación del estado de ánimo",
    moodTitle: "Depresión y Ansiedad",
    moodDesc: "Conocido como la 'Especia del Sol', el azafrán contiene compuestos naturales que elevan los niveles de serotonina, actuando como un estabilizador emocional suave pero potente.",
    immuneSubtitle: "Defensa natural",
    immuneTitle: "Función inmunológica",
    immuneDesc: "Rico en carotenoides y vitamina C, fortalece las defensas naturales del cuerpo y proporciona una profunda protección celular contra el estrés oxidativo.",
    acneSubtitle: "Cuidado dermatológico",
    acneTitle: "Acné e Hiperpigmentación",
    acneDesc: "Sus propiedades antiinflamatorias y antibacterianas lo convierten en un ingrediente sagrado para la salud cutánea, iluminando el tono y desvaneciendo manchas.",
    pmsSubtitle: "Apoyo analgésico",
    pmsTitle: "Molestias menstruales / SPM",
    pmsDesc: "Aliado tradicional de la salud femenina, alivia eficazmente los síntomas del SPM y los cólicos menstruales gracias a sus propiedades antiespasmódicas.",
    bpSubtitle: "Vitalidad cardiovascular",
    bpTitle: "Presión arterial alta",
    bpDesc: "La combinación de crocina y potasio ayuda a regular la presión arterial y favorece la salud cardíaca y la circulación en general.",
  },
  bundles: {
    overline: "Sets seleccionados",
    title: "Sets de regalo",
    titleAccent: "Azafrán Premium",
    subtitle: "Eleva tu experiencia culinaria o sorprende a un ser querido con nuestros sets de regalo meticulosamente compuestos, trayendo lo mejor de nuestra cooperativa marroquí a tu puerta.",
    save: "Ahorra",
    chooseCollection: "Elegir tu set",
    whatsInside: "Qué incluye",
    reserveBundle: "Reservar este set",
    luxuryTag: "Regalo de lujo",
    savingsTag: "Ahorro en set",
    gourmetLabel: "Descubrimiento Gourmet",
    gourmetDesc: "La introducción completa al patrimonio de nuestra cooperativa. Perfecto para el chef casero que quiere dominar el azafrán.",
    connoisseurLabel: "Connoisseur del Té",
    connoisseurDesc: "Un set curado para el ritual del té definitivo, con nuestras tres infusiones de azafrán exclusivas.",
    heritageLabel: "Set Herencia",
    heritageDesc: "Nuestro bundle más prestigioso. Una colección completa de nuestras mejores cosechas, presentada en una caja regalo artesanal.",
  },
  blogPage: {
    overline: "El Blog",
    titleLine1: "Revista",
    titleAccent: "Editorial",
  },
  productsPage: {
    overline: "La Colección",
    titleLine1: "Azafrán selecto,",
    titleLine2: "gramo a gramo.",
  },
  contactInfo: {
    reachOutTitle: "Contáct",
    reachOutAccent: "anos",
    reachOutDesc: "Ya sea que busques asociaciones mayoristas o tengas preguntas sobre nuestra cosecha artesanal, estamos aquí para ayudarte.",
    origin: "Nuestro Origen",
    viewMaps: "Ver en Google Maps →",
    emailUsLabel: "Escríbenos",
    callOrWhatsApp: "Llamada o WhatsApp",
    messageOnWhatsApp: "Mensaje por WhatsApp",
  },
  heritagePage: {
    heroOverline: "Trazando los orígenes del oro carmesí",
    heroTitle: "El Viaje",
    heroAccent: "Artesanal",
    cultivationStages: "Etapas Uno a Seis: Cultivo",
    cultivationTitle: "El Ciclo de",
    cultivationAccent: "Cultivo",
    cultivationIntro: "Del suelo a la flor, los seis rituales agrícolas que preceden a cada cosecha en las tierras altas de Taliouine.",
    rotationTitle: "Rotación de cultivos",
    rotationDesc: "Los bulbos de azafrán se rotan cada 5 a 9 años. Los campos se regeneran plantando legumbres, cereales o crucíferas para restaurar la vitalidad del suelo.",
    soilTitle: "Preparación del suelo",
    soilDesc: "Un mes antes de la floración, la tierra se trabaja a mano con rastrillos en parcelas pequeñas, o mecánicamente en campos modernos más grandes.",
    plantationTitle: "Plantación",
    plantationDesc: "La plantación comienza en septiembre, con 50 a 70 bulbos por hectárea. Todos los bulbos se producen localmente para garantizar la autenticidad del azafrán de Taliouine.",
    irrigationTitle: "Riego",
    irrigationDesc: "El riego tradicional por gravedad sostiene casi todas las granjas, mientras se introducen sistemas de goteo en algunos campos modernos.",
    fertilizationTitle: "Fertilización",
    fertilizationDesc: "Solo materia orgánica — estiércol natural y compost — nutre el suelo. Nunca se utilizan fertilizantes químicos ni tratamientos sintéticos.",
    cultivationStepTitle: "Cultivo",
    cultivationStepDesc: "El deshierbe comienza en marzo, totalmente a mano. Las malas hierbas arrancadas se recogen y se dan al ganado, cerrando el ciclo.",
    stage07: "Etapa Siete: Cosecha",
    gatheringTitle: "La Recolección",
    gatheringAccent: "al Alba",
    gatheringDesc: "Antes de que el primer rayo de sol toque los valles de Taliouine, nuestras recolectoras comienzan su trabajo, recogiendo cada flor de Crocus sativus a mano mientras aún está cerrada, protegiendo los delicados estigmas del calor del sol marroquí. Este ritual del alba es una tarea delicada y exigente realizada en el frío, llevada a cabo casi enteramente por mujeres, que representan cerca del 70 % de los recolectores.",
    gatheringQuote: "Preservar el alma de la flor.",
    gatheringWindow: "Ventana",
    gatheringWindowValue: "3 Semanas",
    gatheringWindowDesc: "La fugaz ventana anual de la perfección.",
    stage08: "Etapa Ocho: Extracción",
    separationTitle: "La",
    separationAccent: "Separación",
    quoteTradition: "«Una tradición transmitida de generación en generación, realizada por manos expertas.»",
    quoteExtraction: "La delicada extracción de los tres estigmas rojos la realizan las manos expertas de las mujeres de nuestra cooperativa. Se necesitan más de 150.000 flores para producir un solo kilogramo de azafrán iD BAKHCHANE.",
    stage09: "Etapa Nueve: Conservación",
    dryingTitle: "Secado y",
    dryingAccent: "Curado",
    dryingStep1: "Evaporación natural sobre finas mallas de seda en salas sombreadas con temperatura controlada, preservando cada matiz de aroma.",
    dryingStep2: "Almacenamiento en recipientes herméticos para alcanzar la complejidad de sabor óptima, fijando niveles récord de crocina.",
    stage10: "Etapa Diez: Verificación",
    purityTitle: "El Estándar de",
    purityAccent: "Pureza",
    purityCard1Label: "ISO 3632-1",
    purityCard1Title: "Prueba Categoría I",
    purityCard1Desc: "Analizado rigurosamente para superar los estándares internacionales de color, sabor y pureza.",
    purityCard2Label: "ORIGEN PURO",
    purityCard2Title: "100 % Orgánico",
    purityCard2Desc: "Cero aditivos. Cero colorantes. Solo el suelo puro de Taliouine y el rocío de la mañana.",
    purityCard3Label: "ÉTICO",
    purityCard3Title: "Impacto social",
    purityCard3Desc: "Apoyo directo a las cooperativas de mujeres que salvaguardan este patrimonio.",
    stage11: "Etapa Once: Perfección final",
    precisionTitle: "Arte de la",
    precisionAccent: "Precisión",
    precisionQuote: "«Cada gramo se pesa con precisión farmacéutica, protegido en vidrio de grado médico para preservarlo para siempre.»",
    vialSelection: "Selección de viales",
    vialSelectionDesc: "Vidrio violeta que bloquea los rayos UV y conserva la potencia.",
    sealedLegacy: "Legado sellado",
    sealedLegacyDesc: "Sellado individual a mano para autenticidad garantizada.",
    journeyComplete: "El viaje está completo",
    enterCollection: "Entrar en la colección",
    journeyTagline: "Vive la cumbre del patrimonio de Taliouine",
  },
  legal: {
    privacyTitle: "Política de privacidad",
    privacySubtitle: "Última actualización: abril de 2026. Tu privacidad es fundamental en nuestra relación.",
    privacyIntro: "Introducción",
    privacyIntroBody: "En iD BAKHCHANE respetamos tu privacidad y estamos comprometidos a proteger los datos personales que compartes con nosotros. Esta política describe cómo recopilamos, usamos y salvaguardamos tu información cuando visitas nuestro sitio o compras nuestro azafrán premium.",
    privacyDataCollection: "Recopilación de datos",
    privacyDataCollectionBody: "Recopilamos información personal que proporcionas voluntariamente — nombre, correo electrónico, dirección de envío y datos de pago — al realizar una compra. Estos datos son esenciales para tramitar tus pedidos y ofrecer un servicio excepcional.",
    privacyUseInfo: "Uso de la información",
    privacyUseInfo1: "Para procesar y enviar tus pedidos de azafrán directamente desde la cooperativa.",
    privacyUseInfo2: "Para comunicar el estado de tu pedido y responder a tus consultas.",
    privacyUseInfo3: "Para enviar newsletters o actualizaciones si te has suscrito.",
    privacySecurity: "Seguridad",
    privacySecurityBody: "Implementamos medidas de seguridad estándar de la industria, incluido el cifrado SSL, para proteger tus datos sensibles. No vendemos ni intercambiamos tu información personal con terceros.",

    termsTitle: "Términos del servicio",
    termsSubtitle: "Condiciones de uso de nuestra plataforma y servicios artesanales.",
    termsAcceptance: "Aceptación",
    termsAcceptanceBody: "Al acceder a este sitio, aceptas estar sujeto a estos términos y a todas las leyes y normativas aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.",
    termsQuality: "Calidad artesanal",
    termsQualityBody: "Cada pedido de iD BAKHCHANE consiste en azafrán de alta calidad, cosechado a mano. Las variaciones en el color y aroma son características naturales del Crocus sativus y un testimonio de su origen auténtico y orgánico.",
    termsConduct: "Conducta del usuario",
    termsConductBody: "Se invita a los usuarios a explorar nuestro patrimonio y productos para uso personal y no comercial. La reproducción de cualquier activo de marca, fotografía o contenido editorial sin consentimiento escrito está estrictamente prohibida.",
    termsModifications: "Modificaciones",
    termsModificationsBody: "Nos reservamos el derecho de revisar estos términos en cualquier momento sin previo aviso. Al usar este sitio, aceptas la versión vigente de estos términos.",

    shippingTitle: "Política de envíos",
    shippingSubtitle: "Nuestro viaje desde los campos de Taliouine hasta tu mesa.",
    shippingOrigin: "Origen del envío",
    shippingOriginBody: "Todo nuestro azafrán se empaqueta y envía directamente desde nuestras instalaciones cooperativas en Marruecos. Esto garantiza la integridad de la cosecha y apoya la economía local de nuestros agricultores.",
    shippingInternational: "Envío internacional",
    shippingInternationalBody: "Enviamos a todo el mundo mediante servicios de mensajería seguros premium (DHL, FedEx). Los plazos suelen ser de 5 a 10 días laborables según tu ubicación.",
    shippingPackaging: "Embalaje y cuidado",
    shippingPackagingBody: "Nuestro azafrán está doblemente sellado en frascos herméticos con protección UV para preservar el aroma y la potencia en tránsito. Cuidamos al máximo que tu pedido llegue en perfectas condiciones.",
    shippingCustoms: "Aduanas y aranceles",
    shippingCustomsBody: "Ten en cuenta que los pedidos internacionales pueden estar sujetos a derechos de importación e impuestos locales. Estos cargos son responsabilidad del destinatario y no se incluyen en nuestras tarifas de envío.",
  },
  blogList: {
    all: "Todos",
    noArticles: "Aún no hay artículos en esta categoría.",
    readArticle: "Leer artículo",
    minRead: "min de lectura",
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
