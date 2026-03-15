import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { loadPseoData } from '@/lib/pseo-data-loader';

export const metadata: Metadata = {
  title: 'SEO Directory | JewelryAI',
  description: 'Explore our complete directory of AI jewelry photography templates, locations, guides, and resources.',
  robots: { index: true, follow: true },
};

export default function ExploreDirectory() {
  const playbooks = [
    { title: 'Templates', type: 'templates' as const, prefix: '/templates', data: loadPseoData('templates') },
    { title: 'Best Of', type: 'curation' as const, prefix: '/best', data: loadPseoData('curation') },
    { title: 'Converters', type: 'conversions' as const, prefix: '/convert', data: loadPseoData('conversions') },
    { title: 'Comparisons', type: 'comparisons' as const, prefix: '/vs', data: loadPseoData('comparisons') },
    { title: 'Examples', type: 'examples' as const, prefix: '/examples', data: loadPseoData('examples') },
    { title: 'Locations', type: 'locations' as const, prefix: '/locations', data: loadPseoData('locations') },
    { title: 'Solutions', type: 'personas' as const, prefix: '/for', data: loadPseoData('personas') },
    { title: 'Integrations', type: 'integrations' as const, prefix: '/integrations', data: loadPseoData('integrations') },
    { title: 'Glossary', type: 'glossary' as const, prefix: '/glossary', data: loadPseoData('glossary') },
    { title: 'Languages', type: 'translations' as const, prefix: '/lang', data: loadPseoData('translations') },
    { title: 'Directory', type: 'directory' as const, prefix: '/directory', data: loadPseoData('directory') },
    { title: 'Profiles', type: 'profiles' as const, prefix: '/profiles', data: loadPseoData('profiles') },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            SEO Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of resources, guides, locations, and tools for AI-powered jewelry photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playbooks.map((playbook) => (
            playbook.data.length > 0 && (
              <div key={playbook.type} className="bg-white p-6 rounded-2xl border shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                  {playbook.title}
                </h2>
                <ul className="space-y-2">
                  {playbook.data.slice(0, 15).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`${playbook.prefix}/${item.slug}`}
                        className="text-gray-600 hover:text-amber-600 text-sm hover:underline"
                      >
                        {item.seo?.title || item.slug}
                      </Link>
                    </li>
                  ))}
                  {playbook.data.length > 15 && (
                    <li className="pt-2">
                      <span className="text-xs text-gray-400">
                        + {playbook.data.length - 15} more pages
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            )
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
