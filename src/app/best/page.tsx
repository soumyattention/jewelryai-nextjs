import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { loadPseoData } from '@/lib/pseo-data-loader';

export const metadata: Metadata = {
  title: 'Best AI Jewelry Photography Styles | JewelryAI',
  description: 'Discover our curated rankings of the best AI jewelry photography styles, techniques, and approaches. Expert-ranked for conversion rate, visual appeal, and versatility.',
  alternates: { canonical: 'https://jewelryai.app/best' },
  robots: { index: true, follow: true },
};

export default function BestOfHubPage() {
  const data = loadPseoData('curation');

  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Header />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 font-medium">Best Of</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Best AI Jewelry Photography Styles
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our curated rankings of the best AI jewelry photography styles, techniques, and approaches. Expert-ranked for conversion rate, visual appeal, and versatility.
          </p>
          <p className="mt-4 text-sm text-gray-400">{data.length} resources available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item: any) => (
            <Link
              key={item.slug}
              href={`/best/${item.slug}`}
              className="group border rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
            >
              {item.featured_images?.[0]?.src && (
                <div className="aspect-[3/2] rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={item.featured_images[0].src}
                    alt={item.featured_images[0].alt || ''}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors mb-2 line-clamp-2">
                {item.seo?.title?.split('|')[0]?.trim() || item.content?.h1 || item.slug}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.seo?.meta_description || ''}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Best AI Jewelry Photography Styles',
            description: 'Discover our curated rankings of the best AI jewelry photography styles, techniques, and approaches. Expert-ranked for conversion rate, visual appeal, and versatility.',
            url: 'https://jewelryai.app/best',
            numberOfItems: data.length,
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: data.length,
              itemListElement: data.slice(0, 20).map((item: any, i: number) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: item.seo?.title?.split('|')[0]?.trim() || item.slug,
                url: `https://jewelryai.app/best/${item.slug}`,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
