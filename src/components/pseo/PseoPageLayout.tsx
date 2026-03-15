import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PseoPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
  internalLinks?: { url: string; anchor_text: string }[];
  relatedPages?: { url: string; title: string }[];
  callToAction?: string;
  schemaJsonLd?: object;
}

export default function PseoPageLayout({
  breadcrumbs,
  children,
  internalLinks = [],
  relatedPages = [],
  callToAction,
  schemaJsonLd,
}: PseoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Header />
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
            {breadcrumbs.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-gray-300">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>

        {/* CTA Section */}
        {callToAction && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-white text-lg md:text-xl mb-6">{callToAction}</p>
              <Link
                href="/pricing"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}

        {/* Internal Links */}
        {internalLinks.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="border-t pt-10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Explore More
              </h3>
              <div className="flex flex-wrap gap-2">
                {internalLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm transition-colors"
                  >
                    {link.anchor_text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Related Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedPages.map((page) => (
                <Link
                  key={page.url}
                  href={page.url}
                  className="p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-medium">{page.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />

      {/* Schema JSON-LD */}
      {schemaJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      )}

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs
              .filter((b) => b.href)
              .map((b, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: b.label,
                item: `https://jewelryai.app${b.href}`,
              })),
          }),
        }}
      />
    </div>
  );
}
