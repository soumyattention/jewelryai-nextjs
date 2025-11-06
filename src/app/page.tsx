import { Metadata } from 'next';
import { SchemaOrganization, SchemaFAQ, homepageFAQs } from '@/components/schema';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Comparison from '@/components/Comparison';
import CompetitiveComparison from '@/components/CompetitiveComparison';
import HowItWorks from '@/components/HowItWorks';
import Portfolio3DCarousel from '@/components/Portfolio3DCarousel';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import USPs from '@/components/USPs';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Jewelry Photography & Video Studio | 90% Cost Reduction | Jewelry AI',
  description: 'Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos with AI. Save 90% on traditional photoshoots. Get professional results in 48 hours. Trusted by 500+ jewelry brands.',
  keywords: 'AI jewelry photography, jewelry video production, AI photoshoot, jewelry marketing, product photography, jewelry advertising, e-commerce jewelry photos, AI model photography, virtual jewelry photography, jewelry content creation',
  alternates: {
    canonical: 'https://jewelryai.app',
  },
  openGraph: {
    title: 'AI Jewelry Photography & Video Studio | 90% Cost Reduction',
    description: 'Transform your jewelry photos into stunning professional shots with AI. Get 10 images and 3 videos in 24 hours.',
    url: 'https://jewelryai.app',
    siteName: 'Jewelry AI',
    images: [
      {
        url: 'https://jewelryai.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jewelry AI - AI-Powered Jewelry Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Jewelry Photography & Video Studio',
    description: 'Transform jewelry photos with AI. 90% cheaper than traditional photography.',
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

export default function HomePage() {
  return (
    <>
      {/* Enhanced Schema Markup for SEO */}
      <SchemaOrganization />
      <SchemaFAQ faqs={homepageFAQs} />

      <Header />
      <Hero />
      <Comparison />
      <CompetitiveComparison />
      <HowItWorks />
      <Portfolio3DCarousel />
      <Pricing />
      <FAQ />
      <Team />
      <USPs />
      <FinalCTA />
      <Footer />
    </>
  );
}
