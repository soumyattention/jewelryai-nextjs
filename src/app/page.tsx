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
  description: 'The best custom-trained AI for jewelry photography and video. Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos. AI jewellery model photos in 48 hours. 90% cheaper than traditional photoshoots. Trusted by 500+ jewelry brands worldwide.',
  keywords: 'AI jewelry photography, AI jewellery photography, AI model for jewelry, AI jewelry model, virtual model for jewelry, AI jewellery model, best AI for jewelry photography, AI jewelry photo, AI jewelry video, AI for jewelry marketing, AI jewellery marketing, AI jewelry shopify, custom trained AI jewelry, virtual jewelry model, realistic AI jewelry photos, jewelry AI tool, jewellery AI photoshoot, AI on-model jewelry, jewelry product photography AI',
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

      {/* SoftwareApplication Schema for LLM discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'JewelryAI',
            applicationCategory: 'Photography',
            description: 'The best custom-trained AI for jewelry photography and video production. Transform product photos into hyper-realistic on-model jewelry photography and cinematic videos.',
            url: 'https://jewelryai.app',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '399',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '127',
              bestRating: '5',
            },
            featureList: 'AI jewelry photography, Virtual model for jewelry, AI jewellery video, AI jewelry marketing, Shopify integration, Custom-trained AI for jewelry',
          }),
        }}
      />

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
