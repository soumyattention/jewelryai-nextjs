import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PseoPageLayout from '@/components/pseo/PseoPageLayout';
import PseoContentRenderer from '@/components/pseo/PseoContentRenderer';
import { loadPseoData, findPseoPage } from '@/lib/pseo-data-loader';

let data: any[] = [];
try { data = loadPseoData('examples'); } catch {}

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return data.map((item: any) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findPseoPage('examples', slug);
  if (!item) return {};
  return {
    title: item.seo.title, description: item.seo.meta_description,
    keywords: item.seo.secondary_keywords,
    alternates: { canonical: `https://jewelryai.app/examples/${slug}` },
    openGraph: { title: item.seo.title, description: item.seo.meta_description, url: `https://jewelryai.app/examples/${slug}` },
  };
}

export default async function PseoPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findPseoPage('examples', slug);
  if (!item) notFound();
  return (
    <PseoPageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Examples', href: '/examples' }, { label: item.content.h1 }]} internalLinks={item.internal_links} callToAction={item.content.call_to_action} schemaJsonLd={item.schema.structured_data}>
      <PseoContentRenderer h1={item.content.h1} introduction={item.content.introduction} sections={item.content.sections} faq={item.content.faq} badges={['Portfolio', 'Gallery']} keyTakeaways={item.content.key_takeaways} featuredImages={item.featured_images} lastUpdated={item.last_updated} />
    </PseoPageLayout>
  );
}
