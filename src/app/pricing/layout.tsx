import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Jewelry Photography Pricing | Editorial & Model Photos from $99',
  description: 'AI jewelry photography packages: First Look $99 (5 photos + video), Launch $499 (25 editorial photoshoots + 10 videos), Collection $799 (60 photos + 20 videos). AI editorial jewelry photos, AI model jewelry photography, Vogue-style AI jewelry editorials. Compare AI vs traditional photography costs - save 80-90%. Full commercial license included.',
  keywords: 'AI jewelry photography pricing, AI editorial jewelry photo, AI jewelry model, AI Vogue editorial jewelry, put jewelry on AI model, AI model wearing jewelry, AI editorial necklace photo, AI editorial ring photo, AI editorial earring photo, virtual jewelry model, AI jewelry photography cost, jewelry photography packages, AI vs traditional photography cost',
  openGraph: {
    title: 'AI Jewelry Photography Pricing | Editorial & Model Photos from $99',
    description: 'AI jewelry photography packages starting at $99. Save 80-90% vs traditional photography. Full commercial license included.',
    url: 'https://jewelryai.app/pricing',
    siteName: 'Jewelry AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Jewelry Photography Pricing | Editorial & Model Photos from $99',
    description: 'AI jewelry photography packages starting at $99. Save 80-90% vs traditional photography.',
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
