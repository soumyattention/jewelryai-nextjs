import { MetadataRoute } from 'next'

// pSEO data file to route prefix mapping
function getPseoPlaybooks() {
  try {
    return [
      { data: require('../data/pseo-templates.json'), prefix: '/templates' },
      { data: require('../data/pseo-curation.json'), prefix: '/best' },
      { data: require('../data/pseo-conversions.json'), prefix: '/convert' },
      { data: require('../data/pseo-comparisons.json'), prefix: '/vs' },
      { data: require('../data/pseo-examples.json'), prefix: '/examples' },
      { data: require('../data/pseo-locations.json'), prefix: '/locations' },
      { data: require('../data/pseo-personas.json'), prefix: '/for' },
      { data: require('../data/pseo-integrations.json'), prefix: '/integrations' },
      { data: require('../data/pseo-glossary.json'), prefix: '/glossary' },
      { data: require('../data/pseo-translations.json'), prefix: '/lang' },
      { data: require('../data/pseo-directory.json'), prefix: '/directory' },
      { data: require('../data/pseo-profiles.json'), prefix: '/profiles' },
    ];
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jewelryai.app';

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/explore`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    // Hub pages
    { url: `${baseUrl}/templates`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/best`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/convert`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/vs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/examples`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/for`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/integrations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/glossary`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/lang`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/directory`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/profiles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Original design pSEO routes
  try {
    const gallerySEO = require('../data/gallery-seo.json');
    for (const item of gallerySEO) {
      routes.push({
        url: `${baseUrl}/design/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });
    }
  } catch {}

  // 12 Playbook pSEO routes
  const playbooks = getPseoPlaybooks();
  for (const playbook of playbooks) {
    for (const item of playbook.data) {
      routes.push({
        url: `${baseUrl}${playbook.prefix}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    }
  }

  return routes;
}

