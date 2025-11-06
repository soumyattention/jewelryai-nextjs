import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Jewelry Photography Portfolio | 500+ Examples',
  description: 'Browse our stunning portfolio of AI-generated jewelry photography and videos. See real before-and-after examples from rings, necklaces, earrings, and bracelets. 97+ curated examples showcasing hyper-realistic on-model photography.',
  keywords: 'jewelry photography portfolio, AI jewelry examples, jewelry photo gallery, before after jewelry photos, AI model jewelry photos, jewelry video examples, professional jewelry photography',
  alternates: {
    canonical: 'https://jewelryai.app/gallery',
  },
  openGraph: {
    title: 'AI Jewelry Photography Portfolio | 500+ Examples',
    description: 'Browse our stunning portfolio of AI-generated jewelry photography and videos.',
    url: 'https://jewelryai.app/gallery',
    siteName: 'Jewelry AI',
    images: [
      {
        url: 'https://jewelryai.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jewelry AI Gallery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Jewelry Photography Portfolio',
    description: 'Browse our stunning portfolio of AI-generated jewelry photography and videos.',
    images: ['https://jewelryai.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
