import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jewelry AI - AI Jewelry Photography & Video Studio',
    short_name: 'Jewelry AI',
    description: 'Transform your jewelry photos into stunning professional shots with AI. 90% cheaper than traditional photography.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
