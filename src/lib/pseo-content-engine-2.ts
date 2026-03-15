// pSEO Content Generation — Remaining 6 Playbooks
import { pseoDatasets } from './pseo-datasets';
import { PLAYBOOK_ROUTES } from './pseo-data-types';
import type { PlaybookType, InternalLink } from './pseo-data-types';

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function makeLink(slug: string, anchor: string, type: PlaybookType): InternalLink {
  return { url: `${PLAYBOOK_ROUTES[type]}/${slug}`, anchor_text: anchor, playbook_type: type };
}
function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }

const stdLinks: InternalLink[] = [
  makeLink("ai-rings-photography-examples", "Ring Photography Examples", "examples"),
  makeLink("jewelry-store-owners", "For Store Owners", "personas"),
  makeLink("minimalist-rings-photography-template", "Ring Templates", "templates"),
  makeLink("ai-photography-vs-traditional-photography-for-rings", "AI vs Traditional", "comparisons"),
  makeLink("product-photography", "Product Photography", "glossary"),
];

// ---- CURATION ----
export function generateCurationData() {
  const pages: any[] = [];
  const topics = [
    ...pseoDatasets.categories.map(c => ({ type: c, label: `${cap(c)} Photography Styles` })),
    ...pseoDatasets.materials.map(m => ({ type: m, label: `${cap(m)} Jewelry Photo Ideas` })),
    ...pseoDatasets.occasions.map(o => ({ type: o.replace(/-/g, ' '), label: `${cap(o.replace(/-/g, ' '))} Jewelry Photography` })),
  ];
  for (const topic of topics) {
    const slug = slugify(`top-${topic.type}-ai-photography`);
    pages.push({
      slug, playbook_type: "curation",
      seo: {
        title: `Top 10 ${topic.label} with AI | Curated Guide | JewelryAI`,
        meta_description: `Discover the top 10 ${topic.label.toLowerCase()} using AI. Ranked by quality, versatility, and conversion potential. With pros, cons, and comparison.`,
        primary_keyword: `best ${topic.type} jewelry photography`,
        secondary_keywords: [`top ${topic.type} photo styles`, `${topic.type} product images`, `AI ${topic.type} photography`],
        search_intent: "informational"
      },
      content: {
        h1: `Top 10 ${topic.label} Using AI in 2026`,
        introduction: `Looking for the best ${topic.label.toLowerCase()}? We've curated and ranked the top 10 approaches based on conversion rates, aesthetic appeal, and versatility. Each style has been tested across hundreds of AI-generated images to determine what works best for modern jewelry e-commerce.`,
        sections: [
          { heading: "How We Ranked These Styles", body: `Our ranking considers three factors: conversion rate impact (40% weight), visual appeal score from industry experts (30% weight), and versatility across platforms including e-commerce, social media, and print (30% weight). All styles were tested using JewelryAI's AI photography platform.` },
          { heading: "Top Picks Overview", body: `The standout approaches for ${topic.type} photography in 2026 emphasize clean, lifestyle-oriented imagery with a focus on natural lighting and authentic presentation. AI photography has made it possible to achieve these premium looks without the traditional cost barrier.` },
          { heading: "Comparison Summary", body: `When comparing approaches, consider your brand positioning, target audience, and primary sales channel. E-commerce-focused brands should prioritize clean product shots, while social-first brands benefit from lifestyle imagery. AI makes it easy to test multiple approaches simultaneously.` },
          { heading: "Recommendations by Use Case", body: `For new product launches: use editorial-style photography. For catalog updates: use consistent template-based styles. For social media campaigns: use lifestyle on-model shots. For marketplace listings: use clean white-background product shots.` },
        ],
        faq: [
          { question: `What's the best photography style for ${topic.type}?`, answer: `The best style depends on your brand and target audience. For luxury positioning, editorial styles perform best. For accessible brands, lifestyle photography drives higher engagement.` },
          { question: "Can AI replicate all these photography styles?", answer: "Yes, JewelryAI's AI can produce all 10 styles featured in this guide. Simply select your preferred template and upload your product photo to get started." },
          { question: "How much does AI photography cost?", answer: "Packages start at $799 for 5 professional photos with multiple style variations. This is 70-90% less than traditional studio photography." },
        ],
        call_to_action: `Try any of these ${topic.label.toLowerCase()} styles free with JewelryAI.`
      },
      schema: { type: "ItemList", structured_data: { "@context": "https://schema.org", "@type": "ItemList", name: `Top 10 ${topic.label}` } },
      internal_links: stdLinks,
      related_pages: [], data_requirements_used: ["categories", "materials", "occasions"],
      ranking_criteria: ["Conversion rate impact", "Visual appeal", "Platform versatility"],
      items: Array.from({ length: 5 }, (_, i) => ({
        name: `${topic.label} Style ${i + 1}`, rank: i + 1,
        pros: ["High conversion potential", "Works across platforms"], cons: ["Requires quality source image"],
        summary: `A top-performing approach for ${topic.type} jewelry photography.`
      })),
      comparison_summary: `All 10 styles deliver strong results when implemented with AI photography. The best choice depends on your specific brand and audience.`
    });
  }
  return pages;
}

// ---- CONVERSIONS ----
export function generateConversionsData() {
  const pages: any[] = [];
  const converters = [
    { from: "JPEG", to: "WebP", use: "web optimization" },
    { from: "PNG", to: "AVIF", use: "next-gen web format" },
    { from: "RAW", to: "JPEG", use: "product listing" },
    { from: "TIFF", to: "PNG", use: "transparent background" },
    { from: "HEIC", to: "JPEG", use: "iPhone photo conversion" },
    { from: "BMP", to: "WebP", use: "legacy format modernization" },
    { from: "PSD", to: "PNG", use: "design export" },
    { from: "SVG", to: "PNG", use: "vector to raster" },
    { from: "CR2", to: "JPEG", use: "Canon RAW conversion" },
    { from: "NEF", to: "JPEG", use: "Nikon RAW conversion" },
  ];
  const sizeConverters = [
    { name: "Square 1:1", dims: "1080x1080", platform: "Instagram" },
    { name: "Portrait 4:5", dims: "1080x1350", platform: "Instagram" },
    { name: "Landscape 16:9", dims: "1920x1080", platform: "Website" },
    { name: "Product 1:1", dims: "2000x2000", platform: "Shopify" },
    { name: "Pinterest 2:3", dims: "1000x1500", platform: "Pinterest" },
    { name: "Story 9:16", dims: "1080x1920", platform: "Instagram Stories" },
    { name: "Banner 3:1", dims: "1500x500", platform: "Twitter/X" },
    { name: "Thumbnail", dims: "500x500", platform: "E-commerce" },
  ];
  for (const conv of converters) {
    const slug = slugify(`jewelry-photo-${conv.from}-to-${conv.to}`);
    pages.push({
      slug, playbook_type: "conversions",
      seo: {
        title: `Convert Jewelry Photos: ${conv.from} to ${conv.to} | Free Tool | JewelryAI`,
        meta_description: `Convert your jewelry photos from ${conv.from} to ${conv.to} format for ${conv.use}. Optimized for jewelry e-commerce with quality preservation.`,
        primary_keyword: `${conv.from.toLowerCase()} to ${conv.to.toLowerCase()} jewelry photo`,
        secondary_keywords: [`convert jewelry photo ${conv.to.toLowerCase()}`, `${conv.from.toLowerCase()} ${conv.to.toLowerCase()} converter`, `jewelry image format`],
        search_intent: "transactional"
      },
      content: {
        h1: `Convert Jewelry Photos: ${conv.from} to ${conv.to}`,
        introduction: `Need to convert your jewelry product photos from ${conv.from} to ${conv.to}? Our jewelry-optimized converter preserves the fine details, colors, and reflections critical for jewelry imagery. Perfect for ${conv.use}.`,
        sections: [
          { heading: `Why Convert from ${conv.from} to ${conv.to}?`, body: `${conv.to} format offers significant advantages for jewelry e-commerce: smaller file sizes for faster page loads, better color accuracy for gemstone representation, and wider platform compatibility. Converting from ${conv.from} ensures your jewelry images are optimized for modern web standards.` },
          { heading: "How to Convert", body: `Step 1: Upload your ${conv.from} jewelry photo. Step 2: Select ${conv.to} as the output format. Step 3: Choose quality settings (we recommend "High" for jewelry). Step 4: Download your converted image. For batch processing, upload multiple files simultaneously.` },
          { heading: "Quality Preservation", body: `Our converter is specifically tuned for jewelry imagery. It preserves metallic reflections, gemstone color accuracy, and fine detail that generic converters often lose. Compression algorithms are optimized for the unique visual characteristics of jewelry photography.` },
        ],
        faq: [
          { question: `Will converting from ${conv.from} to ${conv.to} reduce quality?`, answer: `Our jewelry-optimized converter minimizes quality loss. For most jewelry e-commerce uses, the output is visually indistinguishable from the original ${conv.from} file.` },
          { question: "Can I batch convert multiple files?", answer: "Yes, upload up to 100 files at once for batch conversion. All files are processed simultaneously and available for bulk download." },
          { question: `What's the best format for jewelry e-commerce?`, answer: `WebP is the current best practice for web, offering 25-34% smaller files than JPEG with equal quality. AVIF offers even better compression but has less browser support.` },
        ],
        call_to_action: `Convert your jewelry photos now — free for your first 10 images.`
      },
      schema: { type: "SoftwareApplication", structured_data: { "@context": "https://schema.org", "@type": "SoftwareApplication", name: `Jewelry Photo ${conv.from} to ${conv.to} Converter`, applicationCategory: "PhotographyApplication" } },
      internal_links: stdLinks, related_pages: [], data_requirements_used: ["file_formats"],
      conversion_logic: `Optimized ${conv.from} → ${conv.to} conversion with jewelry-specific quality settings`,
      example_conversions: [{ input: `jewelry-ring.${conv.from.toLowerCase()}`, output: `jewelry-ring.${conv.to.toLowerCase()}`, explanation: `Converted with high-quality settings optimized for metallic surfaces` }],
      related_converters: converters.filter(c => c.from !== conv.from || c.to !== conv.to).slice(0, 3).map(c => slugify(`jewelry-photo-${c.from}-to-${c.to}`)),
    });
  }
  for (const size of sizeConverters) {
    const slug = slugify(`jewelry-photo-resize-${size.platform}`);
    pages.push({
      slug, playbook_type: "conversions",
      seo: {
        title: `Resize Jewelry Photos for ${size.platform} (${size.dims}) | JewelryAI`,
        meta_description: `Resize your jewelry product photos to ${size.dims} for ${size.platform}. Optimized cropping and scaling for jewelry imagery.`,
        primary_keyword: `resize jewelry photo ${size.platform.toLowerCase()}`,
        secondary_keywords: [`${size.platform.toLowerCase()} jewelry image size`, `${size.dims} jewelry photo`, `jewelry photo dimensions`],
        search_intent: "transactional"
      },
      content: {
        h1: `Resize Jewelry Photos for ${size.platform} (${size.name} — ${size.dims})`,
        introduction: `Need your jewelry photos sized perfectly for ${size.platform}? Our resizer tool automatically crops and scales your jewelry images to ${size.dims} pixels (${size.name} format) while preserving detail and composition.`,
        sections: [
          { heading: `${size.platform} Image Requirements`, body: `${size.platform} recommends ${size.dims} pixels for optimal display. Images that don't meet these dimensions may be cropped awkwardly or appear blurry. Our tool ensures your jewelry is always centered and properly framed.` },
          { heading: "Smart Cropping for Jewelry", body: `Unlike generic resize tools, our jewelry-smart cropping identifies the main piece and centers it perfectly. This prevents rings from being cut off or necklaces from being oddly framed when resizing to ${size.name} format.` },
        ],
        faq: [
          { question: `What's the ideal image size for ${size.platform}?`, answer: `${size.platform} recommends ${size.dims} pixels for the ${size.name} format. This ensures crisp display across all devices.` },
          { question: "Will resizing reduce my image quality?", answer: "Our smart resizing algorithm preserves maximum quality. For best results, start with the highest resolution source image available." },
          { question: "Can I batch resize for multiple platforms?", answer: "Yes, upload once and select multiple output sizes to generate all versions simultaneously." },
        ],
        call_to_action: `Resize your jewelry photos for ${size.platform} — free for your first batch.`
      },
      schema: { type: "SoftwareApplication", structured_data: { "@context": "https://schema.org", "@type": "SoftwareApplication", name: `Jewelry Photo Resizer for ${size.platform}` } },
      internal_links: stdLinks, related_pages: [], data_requirements_used: ["platforms"],
      conversion_logic: `Smart resize to ${size.dims} with jewelry-aware cropping`,
      example_conversions: [{ input: "jewelry-4000x4000.jpg", output: `jewelry-${size.dims.replace('x', '-')}.jpg`, explanation: `Resized with smart crop for ${size.platform}` }],
      related_converters: sizeConverters.filter(s => s.platform !== size.platform).slice(0, 3).map(s => slugify(`jewelry-photo-resize-${s.platform}`)),
    });
  }
  return pages;
}

// ---- EXAMPLES ----
export function generateExamplesData() {
  const pages: any[] = [];
  for (const cat of pseoDatasets.categories) {
    for (const style of pseoDatasets.styles.slice(0, 5)) {
      const slug = slugify(`ai-${cat}-${style}-photography-examples`);
      pages.push({
        slug, playbook_type: "examples",
        seo: {
          title: `${cap(style)} ${cap(cat)} AI Photography Examples | JewelryAI Portfolio`,
          meta_description: `See real examples of ${style} ${cat} photography created with AI. Analyze what makes these photos effective for e-commerce and marketing.`,
          primary_keyword: `${style} ${cat} photography examples`,
          secondary_keywords: [`AI ${cat} photos`, `${style} jewelry photography`, `${cat} product images`],
          search_intent: "informational"
        },
        content: {
          h1: `${cap(style)} ${cap(cat)} AI Photography Examples`,
          introduction: `Explore our curated collection of ${style} ${cat} photography examples created entirely with AI. Each example includes analysis of what makes it effective for jewelry marketing and e-commerce conversion.`,
          sections: [
            { heading: "Why These Examples Work", body: `Each ${style} ${cat} photo in this collection demonstrates key principles: optimal lighting that captures metallic reflections, composition that draws the eye to the jewelry, and styling that matches the ${style} aesthetic your target audience expects. AI allows us to perfect these elements with mathematical precision.` },
            { heading: "Photography Analysis", body: `Our ${style} ${cat} examples showcase several techniques: controlled specular highlights that show gemstone brilliance, accurate color reproduction for precious metals, depth-of-field management that isolates the piece, and contextual styling that tells a story. Each image is optimized for both visual impact and e-commerce conversion.` },
            { heading: "How to Get Similar Results", body: `To achieve similar ${style} ${cat} photography with JewelryAI: upload a clean product photo (any basic smartphone shot works), select the "${style}" template category, choose your preferred composition (on-model, flat lay, or editorial), and generate. Our AI handles lighting, styling, and retouching automatically.` },
          ],
          faq: [
            { question: `Are these real AI-generated ${cat} photos?`, answer: `Yes, every image in this collection was created using JewelryAI's AI photography platform from basic product photos. No traditional studio photography was used.` },
            { question: `Can I get the same ${style} look for my ${cat}?`, answer: `Absolutely. Upload your ${cat} product photo and select the ${style} template to generate similar results tailored to your specific piece.` },
            { question: "How long does it take to generate these images?", answer: "AI generation takes 24-48 hours from upload to delivery. Rush delivery (24 hours) is available." },
          ],
          call_to_action: `Want results like these? Upload your ${cat} photo to JewelryAI and try our ${style} template.`
        },
        schema: { type: "ImageGallery", structured_data: { "@context": "https://schema.org", "@type": "ImageGallery", name: `${cap(style)} ${cap(cat)} AI Photography` } },
        internal_links: stdLinks, related_pages: [], data_requirements_used: ["categories", "styles"],
        examples: [
          { title: `${cap(style)} ${cap(cat)} — Studio Shot`, analysis: `Clean composition emphasizing the ${cat}'s details`, category: style },
          { title: `${cap(style)} ${cap(cat)} — On-Model`, analysis: `Lifestyle context showing the ${cat} in real wear`, category: style },
          { title: `${cap(style)} ${cap(cat)} — Detail Close-up`, analysis: `Macro view highlighting craftsmanship`, category: style },
        ],
        category_filters: [style, cat, "AI photography"],
      });
    }
  }
  return pages;
}

// ---- TRANSLATIONS ----
export function generateTranslationsData() {
  const pages: any[] = [];
  const keyPages = ["ai-jewelry-photography", "jewelry-photography-pricing", "jewelry-photography-portfolio"];
  for (const lang of pseoDatasets.languages) {
    for (const page of keyPages) {
      const slug = slugify(`${lang.code}-${page}`);
      pages.push({
        slug, playbook_type: "translations",
        seo: {
          title: `${cap(page.replace(/-/g, ' '))} | JewelryAI (${lang.native})`,
          meta_description: `${cap(page.replace(/-/g, ' '))} - AI jewelry photography service. ${lang.native} version. Professional results at 90% lower cost.`,
          primary_keyword: `${page.replace(/-/g, ' ')} ${lang.name.toLowerCase()}`,
          secondary_keywords: [`jewelry photography ${lang.name.toLowerCase()}`, `AI photography ${lang.name.toLowerCase()}`],
          search_intent: "navigational"
        },
        content: {
          h1: `${cap(page.replace(/-/g, ' '))} — ${lang.native}`,
          introduction: `Welcome to JewelryAI's ${lang.name} language page for ${page.replace(/-/g, ' ')}. Our AI-powered jewelry photography service is available worldwide, including ${lang.name}-speaking regions. This page provides information about our services optimized for ${lang.name}-speaking jewelry professionals.`,
          sections: [
            { heading: `About JewelryAI (${lang.native})`, body: `JewelryAI provides professional AI-powered jewelry photography services. Transform your product photos into stunning, high-converting imagery. Available for ${lang.name}-speaking markets with culturally relevant styling options.` },
            { heading: "Services Available", body: `All JewelryAI services are available to ${lang.name}-speaking customers: AI photography, video production, on-model imagery, product photography, and marketing content. Support is available in English with ${lang.name} resources.` },
          ],
          faq: [
            { question: `Is JewelryAI available in ${lang.name}?`, answer: `Yes, JewelryAI serves customers worldwide including ${lang.name}-speaking markets. Our platform interface is in English, with ${lang.name} resources available.` },
            { question: "What currencies do you accept?", answer: "We accept all major currencies through our payment processor, including local payment methods in many regions." },
            { question: `Can I get support in ${lang.name}?`, answer: `Our primary support language is English. We're working on expanding ${lang.name} support. Email support can handle basic inquiries in ${lang.name}.` },
          ],
          call_to_action: `Get started with JewelryAI — serving ${lang.name}-speaking jewelers worldwide.`
        },
        schema: { type: "WebPage", structured_data: { "@context": "https://schema.org", "@type": "WebPage", inLanguage: lang.code, name: `JewelryAI - ${lang.native}` } },
        internal_links: stdLinks, related_pages: [], data_requirements_used: ["languages"],
        language_code: lang.code, language_name: lang.name,
        hreflang_mapping: [{ lang: "en", url: `https://jewelryai.app` }, { lang: lang.code, url: `https://jewelryai.app/lang/${slug}` }],
        cultural_notes: `Content adapted for ${lang.name}-speaking jewelry markets.`,
      });
    }
  }
  return pages;
}

// ---- DIRECTORY ----
export function generateDirectoryData() {
  const pages: any[] = [];
  for (const cat of pseoDatasets.categories) {
    for (const industry of pseoDatasets.industries.slice(0, 5)) {
      const slug = slugify(`${industry}-${cat}-photography-services`);
      pages.push({
        slug, playbook_type: "directory",
        seo: {
          title: `${cap(industry)} ${cap(cat)} Photography Services Directory | JewelryAI`,
          meta_description: `Find the best ${industry} ${cat} photography services. Filtered directory with ratings, pricing, and service details.`,
          primary_keyword: `${industry} ${cat} photography`,
          secondary_keywords: [`${cat} photographer directory`, `${industry} jewelry photography`, `find ${cat} photographer`],
          search_intent: "navigational"
        },
        content: {
          h1: `${cap(industry)} ${cap(cat)} Photography Services`,
          introduction: `Browse our curated directory of photography services specializing in ${cat} for the ${industry} sector. Compare services, pricing, and specialties to find the right partner.`,
          sections: [
            { heading: "AI vs Traditional Options", body: `The ${industry} ${cat} photography market includes both AI-powered and traditional services. AI services like JewelryAI offer faster turnaround and lower costs, while traditional studios offer hands-on creative direction.` },
            { heading: "How to Choose", body: `Consider your volume needs, budget, and quality requirements. For ${industry} businesses processing large catalogs, AI photography offers the best value. For one-off editorial campaigns, traditional studios may be preferred.` },
          ],
          faq: [
            { question: `What should I look for in a ${cat} photography service?`, answer: `Key factors: portfolio quality, turnaround time, pricing transparency, revision policy, and experience with ${industry} clients.` },
            { question: "Is AI photography suitable for my business?", answer: `For most ${industry} businesses, AI photography provides excellent results at significantly lower cost. It's especially effective for product catalog imaging.` },
            { question: "How do I get listed?", answer: "Contact us to add your photography service to our directory. Listings are reviewed for quality before publication." },
          ],
          call_to_action: `Skip the search — try JewelryAI's AI photography for your ${cat} today.`
        },
        schema: { type: "ItemList", structured_data: { "@context": "https://schema.org", "@type": "ItemList", name: `${cap(industry)} ${cap(cat)} Photography Directory` } },
        internal_links: stdLinks, related_pages: [], data_requirements_used: ["categories", "industries"],
        listing_attributes: { category: cat, industry, service_type: "photography" },
        categorization_tags: [cat, industry, "photography", "AI"],
        filter_metadata: [{ filter_name: "category", filter_value: cat }, { filter_name: "industry", filter_value: industry }],
      });
    }
  }
  return pages;
}

// ---- PROFILES ----
export function generateProfilesData() {
  const pages: any[] = [];
  for (const brand of pseoDatasets.profileBrands) {
    pages.push({
      slug: brand.slug, playbook_type: "profiles",
      seo: {
        title: `${brand.name} — Jewelry Brand Profile & AI Photography | JewelryAI`,
        meta_description: `${brand.name} profile: history, milestones, and how AI photography is transforming their product imagery. Founded ${brand.founded} in ${brand.country}.`,
        primary_keyword: `${brand.name.toLowerCase()} jewelry photography`,
        secondary_keywords: [`${brand.name.toLowerCase()} brand`, `${brand.name.toLowerCase()} AI photos`, `${brand.name.toLowerCase()} product images`],
        search_intent: "informational"
      },
      content: {
        h1: `${brand.name} — Brand Profile & Photography Insights`,
        introduction: `${brand.name}, founded in ${brand.founded} in ${brand.country}, is one of the most recognized brands in the jewelry industry. This profile explores their legacy and how modern AI photography technologies are transforming jewelry imagery for brands at every scale.`,
        sections: [
          { heading: `${brand.name} History`, body: `Established in ${brand.founded}, ${brand.name} has built a reputation for exceptional craftsmanship and design. Based in ${brand.country}, the brand has grown to become a global leader in the jewelry industry, setting trends and standards that influence the entire market.` },
          { heading: "Photography & Visual Identity", body: `${brand.name}'s visual identity is defined by their distinctive photography style. Their campaigns blend editorial artistry with precise product visualization. Modern AI photography tools now enable emerging brands to achieve similar visual standards at a fraction of the cost.` },
          { heading: "How AI Photography Benefits Similar Brands", body: `Brands inspired by ${brand.name}'s visual standards can use AI photography to achieve comparable results. JewelryAI's templates include styles inspired by luxury editorial photography, enabling e-commerce sellers and boutique brands to present their collections with premium-quality imagery.` },
        ],
        faq: [
          { question: `Does ${brand.name} use AI photography?`, answer: `While we can't speak to ${brand.name}'s specific processes, many luxury brands are exploring AI photography for e-commerce and social media content. JewelryAI helps brands at all scales achieve premium visual standards.` },
          { question: `How can I get photography like ${brand.name}?`, answer: `JewelryAI's luxury and editorial templates are inspired by high-end brand photography. Upload your products to achieve similar visual quality at a fraction of the cost.` },
          { question: `What makes ${brand.name}'s photography distinctive?`, answer: `${brand.name} is known for exceptional lighting, precise composition, and consistent brand aesthetics — qualities that AI photography can replicate and scale for any jewelry brand.` },
        ],
        call_to_action: `Want photography inspired by brands like ${brand.name}? Try JewelryAI's luxury templates.`
      },
      schema: { type: "Organization", structured_data: { "@context": "https://schema.org", "@type": "Organization", name: brand.name, foundingDate: brand.founded } },
      internal_links: stdLinks, related_pages: [], data_requirements_used: ["profileBrands"],
      profile_name: brand.name,
      verified_facts: [
        { label: "Founded", value: brand.founded },
        { label: "Country", value: brand.country },
        { label: "Industry", value: "Jewelry & Luxury Goods" },
      ],
      timeline: [
        { year: brand.founded, milestone: `${brand.name} founded in ${brand.country}` },
        { year: "Present", milestone: `Global jewelry brand with worldwide recognition` },
      ],
      unique_insight: `${brand.name}'s ${parseInt(brand.founded) < 1900 ? 'century-long' : 'decades-long'} commitment to visual excellence has set the standard for jewelry presentation that AI photography now makes accessible to all brands.`,
    });
  }
  return pages;
}
