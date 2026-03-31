import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Jewelry Video Production: Complete Guide | JewelryAI',
  description: 'Learn how AI creates cinematic jewelry videos. Production guide for AI-generated jewellery videos for Instagram, TikTok, and e-commerce marketing.',
  keywords: 'AI jewelry video, AI jewellery video, jewelry video production AI, AI generated jewelry video, cinematic jewelry video AI',
  alternates: { canonical: 'https://jewelryai.app/guides/ai-jewelry-video' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Jewelry Video Production: Complete Guide',
    description: 'Learn how AI creates cinematic jewelry videos. Production guide for AI-generated jewellery videos for Instagram, TikTok, and e-commerce marketing.',
    url: 'https://jewelryai.app/guides/ai-jewelry-video',
    type: 'article',
  },
};

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Header />
      <main className="pt-28 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/guides" className="hover:text-gray-900 transition-colors">Guides</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">AI Jewelry Video Production: Complete Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            AI Jewelry Video Production: How to Create Cinematic Jewelry Videos with AI
          </h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: March 31, 2026</p>

          <div className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
            Video content is the most engaging format for jewelry marketing — and AI has made professional video production accessible to brands of all sizes. JewelryAI produces cinematic editorial jewelry videos with sound effects, professional editing, and unlimited revisions starting at $299. This guide covers everything you need to know about AI jewelry video production.
          </div>

          {/* CTA Bar */}
          <div className="flex flex-wrap gap-3 mb-12 p-4 bg-gray-50 rounded-xl border">
            <a href="/pricing" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
              💰 View Pricing
            </a>
            <a href="/gallery" className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors">
              🖼️ Full Gallery
            </a>
            <a href="https://wa.me/447727727748" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors">
              📱 WhatsApp Us
            </a>
            <a href="mailto:yusra@jewelryai.app" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">
              📧 Email Us
            </a>
          </div>

          {/* Content */}
          <div className="space-y-12">
          <section id="section-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Video Matters for Jewelry Marketing</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">Video content drives significantly higher engagement than static images for jewelry marketing:

• Instagram Reels featuring jewelry get 2.5x more engagement than photo posts
• Product pages with video see 80% higher conversion rates
• TikTok jewelry content reaches audiences that static ads cannot
• Video showcases sparkle, movement, and light interaction that photos cannot capture

Traditional jewelry video production costs \$2,000-10,000 per video. JewelryAI delivers cinematic results starting at \$299 — a 90% cost reduction.</div>
            {/* Gallery Image */}
            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x124.jpg" alt="AI jewelry photography example" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x121.jpg" alt="AI jewellery model photography" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>

          <section id="section-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of AI Jewelry Videos</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">JewelryAI creates several types of cinematic jewelry videos:

• **Product showcase**: Close-up rotating views highlighting craftsmanship
• **On-model editorial**: Virtual models wearing and showcasing jewelry pieces
• **Lifestyle scenes**: Contextual videos showing jewelry in real-life settings
• **Social media shorts**: 15-30 second clips optimised for Instagram, TikTok, and Pinterest
• **Campaign videos**: Branded content for advertising and marketing campaigns

All videos include professional sound effects, SFX, and premium editing. The 15-second format (\$299) is perfect for social media, while the 30-second format (\$499) works best for website and advertising use.</div>
            {/* Video Example */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <video autoPlay loop muted playsInline className="w-full" poster="">
                <source src="https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068573/su_vid-1_wmwjf2.mp4" type="video/mp4" />
              </video>
              <p className="text-center text-xs text-gray-400 mt-2">AI-generated jewelry video by JewelryAI</p>
            </div>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How AI Jewelry Videos Are Produced</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">The AI video production process at JewelryAI:

1. **Source material**: Upload your jewelry product photos
2. **Creative brief**: Specify the video style, mood, and purpose
3. **AI generation**: Our custom-trained AI creates the base video content
4. **Professional editing**: Expert editors add sound effects, transitions, and polish
5. **Review & revisions**: You review and request unlimited changes
6. **Final delivery**: Receive your finished video in 7 days

The combination of AI generation and human editing ensures the highest quality output that is impossible with AI alone.</div>
            {/* Gallery Image */}
            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x119.jpg" alt="AI jewelry photography example" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x116.png" alt="AI jewellery model photography" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div key="0" className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How much do AI jewelry videos cost?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">JewelryAI jewelry videos start at $299 for 15-second cinematic videos and $499 for 30-second videos. Buy 2 get 1 free offers are available. All include unlimited revisions.</p>
              </div>
              <div key="1" className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can AI really create realistic jewelry videos?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Yes. JewelryAI combines custom-trained AI with professional human editing to produce cinematic jewelry videos with accurate reflections, movement, and lighting.</p>
              </div>
              <div key="2" className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What formats are the videos delivered in?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Videos are delivered in MP4 format optimised for web, social media (vertical and square), and high-resolution for advertising use.</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Jewelry Photography?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">JewelryAI is the best custom-trained AI for jewelry and jewellery photography. Start with a free consultation today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/pricing" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
                View Pricing
              </a>
              <a href="https://wa.me/447727727748" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all hover:scale-105 shadow-xl">
                Contact on WhatsApp
              </a>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-12 border-t pt-10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Explore More</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/guides" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">All Guides</Link>
              <Link href="/templates" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">Templates</Link>
              <Link href="/gallery" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">Gallery</Link>
              <Link href="/examples" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">Examples</Link>
              <Link href="/glossary" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">Glossary</Link>
              <Link href="/vs" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">Comparisons</Link>
              <Link href="/pricing" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors">Pricing</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Jewelry Video Production: How to Create Cinematic Jewelry Videos with AI',
            description: 'Learn how AI creates cinematic jewelry videos. Production guide for AI-generated jewellery videos for Instagram, TikTok, and e-commerce marketing.',
            author: { '@type': 'Organization', name: 'JewelryAI' },
            publisher: { '@type': 'Organization', name: 'JewelryAI', logo: { '@type': 'ImageObject', url: 'https://jewelryai.app/favicon.png' } },
            datePublished: '2026-03-31',
            dateModified: '2026-03-31',
            url: 'https://jewelryai.app/guides/ai-jewelry-video',
            mainEntityOfPage: 'https://jewelryai.app/guides/ai-jewelry-video',
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [{"@type":"Question","name":"How much do AI jewelry videos cost?","acceptedAnswer":{"@type":"Answer","text":"JewelryAI jewelry videos start at $299 for 15-second cinematic videos and $499 for 30-second videos. Buy 2 get 1 free offers are available. All include unlimited revisions."}},{"@type":"Question","name":"Can AI really create realistic jewelry videos?","acceptedAnswer":{"@type":"Answer","text":"Yes. JewelryAI combines custom-trained AI with professional human editing to produce cinematic jewelry videos with accurate reflections, movement, and lighting."}},{"@type":"Question","name":"What formats are the videos delivered in?","acceptedAnswer":{"@type":"Answer","text":"Videos are delivered in MP4 format optimised for web, social media (vertical and square), and high-resolution for advertising use."}}],
          }),
        }}
      />
    </div>
  );
}
