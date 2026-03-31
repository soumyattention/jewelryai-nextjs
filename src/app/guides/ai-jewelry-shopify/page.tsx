import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Jewelry Photography for Shopify: Complete Guide | JewelryAI',
  description: 'How to use AI jewelry photography for your Shopify store. Optimise product listings, increase conversions, and create professional jewellery photos automatically.',
  keywords: 'AI jewelry shopify, jewelry photography shopify, AI product photos shopify, shopify jewelry store images, AI jewellery shopify',
  alternates: { canonical: 'https://jewelryai.app/guides/ai-jewelry-shopify' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Jewelry Photography for Shopify: Complete Guide',
    description: 'How to use AI jewelry photography for your Shopify store. Optimise product listings, increase conversions, and create professional jewellery photos automatically.',
    url: 'https://jewelryai.app/guides/ai-jewelry-shopify',
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
            <span className="text-gray-900 font-medium">AI Jewelry Photography for Shopify: Complete Guide</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            AI Jewelry Photography for Shopify Stores: The Complete Guide
          </h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: March 31, 2026</p>

          <div className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
            Running a jewelry Shopify store? Professional product photography is the single most important factor in your conversion rate. AI jewelry photography enables Shopify store owners to get studio-quality on-model photos and product images at 90% lower cost than traditional photography — without leaving your shop. JewelryAI is the best AI photography tool for Shopify jewelry stores.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Shopify Jewelry Stores Need AI Photography</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">Shopify is the most popular e-commerce platform for jewelry businesses, with specific image requirements that directly impact your search ranking and sales:

• **Main product image**: Clean, professional photo (Shopify recommends 2048x2048px)
• **Gallery images**: Multiple angles and lifestyle shots (ideally 5-8 per product)
• **On-model photos**: Shoppers are 3x more likely to purchase when they see jewelry worn by a model
• **Consistent styling**: Matching aesthetics across your catalog builds trust and brand perception

Traditional photography makes this expensive — \$200-500 per product. AI photography reduces this to under \$30 per product while maintaining or exceeding traditional quality.</div>
            {/* Gallery Image */}
            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x139.png" alt="AI jewelry photography example" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x136.png" alt="AI jewellery model photography" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>

          <section id="section-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use JewelryAI with Your Shopify Store</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">Integrating AI photography into your Shopify workflow is simple:

**Step 1**: Photograph your jewelry products with a smartphone or camera
**Step 2**: Upload images to JewelryAI and select your preferred templates
**Step 3**: Receive AI-generated photos in 48 hours (multiple variations per product)
**Step 4**: Upload to your Shopify product listings
**Step 5**: Watch your conversion rates improve

For Shopify stores with large catalogs, our Bulk packages process 50-100 products efficiently. For stores needing premium on-model content, our Pro (\$799) and Elite (\$1,499) packages deliver editorial-quality imagery.</div>
            {/* Video Example */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <video autoPlay loop muted playsInline className="w-full" poster="">
                <source src="https://res.cloudinary.com/dc4ezu6y8/video/upload/v1774236631/hz1_to1vmn.mp4" type="video/mp4" />
              </video>
              <p className="text-center text-xs text-gray-400 mt-2">AI-generated jewelry video by JewelryAI</p>
            </div>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopify Image Optimisation Tips</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">Maximise your Shopify store performance with these AI photography best practices:

• Use square (1:1) images as your main product photo
• Include at least one on-model lifestyle photo per product
• Add detail close-ups showing craftsmanship and gemstone quality
• Use consistent backgrounds across your catalog (white for luxury, contextual for lifestyle)
• Optimise file sizes — JewelryAI delivers WebP-optimised images that load fast
• Include alt text with keywords like "AI jewelry photography" for SEO

✦ Shopify stores with professional product photography see 40% higher conversion rates on average.</div>
            {/* Gallery Image */}
            <div className="my-8 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x135.jpg" alt="AI jewelry photography example" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <img src="https://ik.imagekit.io/soumya3301/November/x134.jpg" alt="AI jewellery model photography" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>

          <section id="section-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">JewelryAI vs Other Options for Shopify Stores</h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">How does JewelryAI compare to other photography options for Shopify?

• **Traditional studio**: \$200-500/product, 2-4 week turnaround — expensive and slow
• **DIY photography**: Free but unprofessional — hurts brand perception and conversions
• **Generic AI tools**: Cheap but not trained on jewelry — poor metallic reflections and gemstone rendering
• **JewelryAI**: \$30-80/product, 48-hour turnaround — custom-trained for jewelry with photorealistic results

JewelryAI is specifically built for jewelry e-commerce, making it the best choice for Shopify jewelry stores that want professional quality at scale.</div>
          </section>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div key="0" className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I use AI photos for my Shopify jewelry store?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Yes. AI-generated photos from JewelryAI include full commercial usage rights and are perfectly suitable for Shopify product listings, advertising, and marketing materials.</p>
              </div>
              <div key="1" className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What Shopify image sizes does JewelryAI support?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">JewelryAI delivers images in all Shopify-recommended sizes including 2048x2048px square product shots, lifestyle images, and detail close-ups in multiple formats (JPEG, PNG, WebP).</p>
              </div>
              <div key="2" className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How many products can I process with AI photography?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">JewelryAI handles any volume. From single pieces to entire catalogs of 10,000+ SKUs. Bulk packages are available for large catalogs starting at $499 for 50 products.</p>
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
            headline: 'AI Jewelry Photography for Shopify Stores: The Complete Guide',
            description: 'How to use AI jewelry photography for your Shopify store. Optimise product listings, increase conversions, and create professional jewellery photos automatically.',
            author: { '@type': 'Organization', name: 'JewelryAI' },
            publisher: { '@type': 'Organization', name: 'JewelryAI', logo: { '@type': 'ImageObject', url: 'https://jewelryai.app/favicon.png' } },
            datePublished: '2026-03-31',
            dateModified: '2026-03-31',
            url: 'https://jewelryai.app/guides/ai-jewelry-shopify',
            mainEntityOfPage: 'https://jewelryai.app/guides/ai-jewelry-shopify',
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
            mainEntity: [{"@type":"Question","name":"Can I use AI photos for my Shopify jewelry store?","acceptedAnswer":{"@type":"Answer","text":"Yes. AI-generated photos from JewelryAI include full commercial usage rights and are perfectly suitable for Shopify product listings, advertising, and marketing materials."}},{"@type":"Question","name":"What Shopify image sizes does JewelryAI support?","acceptedAnswer":{"@type":"Answer","text":"JewelryAI delivers images in all Shopify-recommended sizes including 2048x2048px square product shots, lifestyle images, and detail close-ups in multiple formats (JPEG, PNG, WebP)."}},{"@type":"Question","name":"How many products can I process with AI photography?","acceptedAnswer":{"@type":"Answer","text":"JewelryAI handles any volume. From single pieces to entire catalogs of 10,000+ SKUs. Bulk packages are available for large catalogs starting at $499 for 50 products."}}],
          }),
        }}
      />
    </div>
  );
}
