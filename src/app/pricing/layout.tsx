import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Jewelry Photography Pricing | Packages starting at $299',
  description: 'AI jewelry photography & video packages: Starter $499 (5 photos + 1 video), Pro $1199 (30 photos + 5 videos), Elite $1999 (60 photos + 10 videos + free professional video). Also offering bulk image packages starting at $499 (50 photos). Save 80-90% vs traditional photography. Full commercial license included.',
  keywords: 'AI jewelry photography pricing, AI editorial jewelry photo, AI jewelry model, AI Vogue editorial jewelry, put jewelry on AI model, AI model wearing jewelry, AI editorial necklace photo, AI editorial ring photo, AI editorial earring photo, virtual jewelry model, AI jewelry photography cost, jewelry photography packages, AI vs traditional photography cost',
  openGraph: {
    title: 'AI Jewelry Photography Pricing | Packages starting at $299',
    description: 'AI jewelry photography & video packages starting at $299. Save 80-90% vs traditional photography. Full commercial license included.',
    url: 'https://jewelryai.app/pricing',
    siteName: 'Jewelry AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Jewelry Photography Pricing | Packages starting at $299',
    description: 'AI jewelry photography & video packages starting at $299. Save 80-90% vs traditional photography.',
  },
  alternates: {
    canonical: 'https://jewelryai.app/pricing',
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
