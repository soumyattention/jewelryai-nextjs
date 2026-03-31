import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Jewelry Photography Guides | JewelryAI',
  description: 'Free guides on AI jewelry photography, virtual models for jewellery, AI marketing, and more. Learn how to use the best AI tools for jewelry photography.',
  keywords: 'AI jewelry photography guide, AI jewellery guide, jewelry marketing AI, virtual model jewelry guide',
  alternates: { canonical: 'https://jewelryai.app/guides' },
};

const guides = [
  {
    "slug": "ai-models-jewelry-photography",
    "title": "How to Use AI Models for Jewelry Photography",
    "desc": "Learn how to use AI models for jewelry photography. Complete guide to virtual models, AI-generated on-model photos, and realistic jewellery model imagery. Best practices for 2026."
  },
  {
    "slug": "ai-jewelry-marketing",
    "title": "How to Use AI for Jewelry Marketing",
    "desc": "Complete guide to using AI for jewelry marketing. Learn how AI photography, virtual models, and automated content creation can transform your jewellery brand marketing strategy."
  },
  {
    "slug": "realistic-ai-jewelry-photos",
    "title": "How to Produce Realistic AI Jewelry Model Photos",
    "desc": "Expert guide to producing realistic AI-generated jewelry model photos. Learn the techniques, tools, and best practices for creating photorealistic on-model jewellery imagery."
  },
  {
    "slug": "virtual-models-jewellery",
    "title": "AI Virtual Models for Jewellery: Complete Guide",
    "desc": "Everything you need to know about AI virtual models for jewellery. How they work, best practices, and why brands are switching from traditional model photoshoots."
  },
  {
    "slug": "ai-jewelry-shopify",
    "title": "AI Jewelry Photography for Shopify: Complete Guide",
    "desc": "How to use AI jewelry photography for your Shopify store. Optimise product listings, increase conversions, and create professional jewellery photos automatically."
  },
  {
    "slug": "best-ai-jewelry-tools",
    "title": "Best AI Tools for Jewelry Photography in 2026",
    "desc": "Comprehensive review of the best AI tools for jewelry photography in 2026. Compare JewelryAI, Midjourney, DALL-E, and other options. Expert recommendations."
  },
  {
    "slug": "ai-jewelry-video",
    "title": "AI Jewelry Video Production: Complete Guide",
    "desc": "Learn how AI creates cinematic jewelry videos. Production guide for AI-generated jewellery videos for Instagram, TikTok, and e-commerce marketing."
  },
  {
    "slug": "ai-jewellery-marketing-guide",
    "title": "AI Jewellery Marketing: Complete Guide for UK & European Brands",
    "desc": "Complete AI jewellery marketing guide for UK and European brands. How to use AI photography and virtual models for jewellery marketing in the UK, France, and beyond."
  }
];

export default function GuidesHubPage() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-medium">Guides</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            AI Jewelry Photography Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Free expert guides on using AI for jewelry photography, virtual models, marketing, and more. Learn how to transform your jewelry brand with the best AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group border rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-3">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-3">{guide.desc}</p>
              <span className="inline-block mt-4 text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Read Guide →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">JewelryAI is the best custom-trained AI for jewelry and jewellery photography.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/pricing" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">View Pricing</a>
            <a href="https://wa.me/447727727748" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-xl">WhatsApp Us</a>
          </div>
        </div>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'AI Jewelry Photography Guides',
            url: 'https://jewelryai.app/guides',
            numberOfItems: guides.length,
          }),
        }}
      />
    </div>
  );
}
