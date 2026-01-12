import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jewelryai.app';

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic pSEO routes
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const gallerySEO = require('../data/gallery-seo.json');
    const pSEORoutes = gallerySEO.map((item: any) => ({
      url: `${baseUrl}/design/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
    return [...routes, ...pSEORoutes];
  } catch (e) {
    console.warn('No pSEO data found for sitemap generation');
    return routes;
  }
}

