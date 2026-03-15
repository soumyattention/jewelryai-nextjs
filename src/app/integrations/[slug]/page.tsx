import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PseoPageLayout from '@/components/pseo/PseoPageLayout';
import PseoContentRenderer from '@/components/pseo/PseoContentRenderer';
import { loadPseoData, findPseoPage } from '@/lib/pseo-data-loader';

let data: any[] = [];
try { data = loadPseoData('integrations'); } catch {}

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return data.map((item: any) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findPseoPage('integrations', slug);
  if (!item) return {};
  return {
    title: item.seo.title, description: item.seo.meta_description,
    keywords: item.seo.secondary_keywords,
    alternates: { canonical: `https://jewelryai.app/integrations/${slug}` },
    openGraph: { title: item.seo.title, description: item.seo.meta_description, url: `https://jewelryai.app/integrations/${slug}` },
  };
}

export default async function PseoPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findPseoPage('integrations', slug);
  if (!item) notFound();
  return (
    <PseoPageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Integrations', href: '/integrations' }, { label: item.content.h1 }]} internalLinks={item.internal_links} callToAction={item.content.call_to_action} schemaJsonLd={item.schema.structured_data}>
      <PseoContentRenderer h1={item.content.h1} introduction={item.content.introduction} sections={item.content.sections} faq={item.content.faq} badges={['Integration', 'Guide']} />
    </PseoPageLayout>
  );
}
