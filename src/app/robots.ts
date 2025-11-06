import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow AI bots to access llms.txt for AI discoverability
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'GoogleBot',
        allow: '/',
      },
      // General rules for all other bots
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://jewelryai.app/sitemap.xml',
  }
}
