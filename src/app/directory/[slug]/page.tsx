import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PseoPageLayout from '@/components/pseo/PseoPageLayout';
import PseoContentRenderer from '@/components/pseo/PseoContentRenderer';
import { loadPseoData, findPseoPage } from '@/lib/pseo-data-loader';

let data: any[] = [];
try { data = loadPseoData('directory'); } catch {}

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return data.map((item: any) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = findPseoPage('directory', slug);
  if (!item) return {};
  return {
    title: item.seo.title, description: item.seo.meta_description,
    keywords: item.seo.secondary_keywords,
    alternates: { canonical: `https://jewelryai.app/directory/${slug}` },
    openGraph: { title: item.seo.title, description: item.seo.meta_description, url: `https://jewelryai.app/directory/${slug}` },
  };
}

export default async function PseoPage({ params }: PageProps) {
  const { slug } = await params;
  const item = findPseoPage('directory', slug);
  if (!item) notFound();
  return (
    <PseoPageLayout breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Directory', href: '/directory' }, { label: item.content.h1 }]} internalLinks={item.internal_links} callToAction={item.content.call_to_action} schemaJsonLd={item.schema.structured_data}>
      <PseoContentRenderer h1={item.content.h1} introduction={item.content.introduction} sections={item.content.sections} faq={item.content.faq} badges={['Directory', 'Find']} />
    </PseoPageLayout>
  );
}
