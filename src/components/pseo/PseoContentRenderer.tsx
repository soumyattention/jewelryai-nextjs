import React from 'react';
import Link from 'next/link';
import PseoFAQSection from './PseoFAQSection';

interface ContentSection {
  heading: string;
  body: string;
}

interface FeaturedImage {
  src: string;
  alt: string;
  slug: string;
  title: string;
}

interface PseoContentRendererProps {
  h1: string;
  introduction: string;
  sections: ContentSection[];
  faq: { question: string; answer: string }[];
  badges?: string[];
  extraContent?: React.ReactNode;
  keyTakeaways?: string[];
  proTips?: string;
  featuredImages?: FeaturedImage[];
  lastUpdated?: string;
}

/** Parse plain-text body into rich JSX: bullet lists, bold, blockquotes */
function renderRichBody(body: string) {
  const lines = body.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  function flushList() {
    if (currentList.length === 0) return;
    const Tag = listType === 'ol' ? 'ol' : 'ul';
    const cls = listType === 'ol' ? 'list-decimal' : 'list-disc';
    elements.push(
      <Tag key={`list-${elements.length}`} className={`${cls} pl-6 space-y-2 text-gray-600 my-4`}>
        {currentList.map((item, i) => (
          <li key={i} className="leading-relaxed">{renderInline(item)}</li>
        ))}
      </Tag>
    );
    currentList = [];
    listType = null;
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    // Bullet list
    if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(trimmed.slice(2));
      continue;
    }

    // Numbered list
    const numMatch = trimmed.match(/^(\d+)\.\s/);
    if (numMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(trimmed.slice(numMatch[0].length));
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      flushList();
      elements.push(
        <blockquote key={`bq-${elements.length}`} className="border-l-4 border-amber-400 bg-amber-50/50 pl-4 py-3 my-4 text-gray-700 italic rounded-r-lg">
          {renderInline(trimmed.slice(2))}
        </blockquote>
      );
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={`p-${elements.length}`} className="text-gray-600 leading-relaxed mb-3">
        {renderInline(trimmed)}
      </p>
    );
  }
  flushList();

  return <>{elements}</>;
}

/** Inline formatting: **bold** */
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function PseoContentRenderer({
  h1,
  introduction,
  sections,
  faq,
  badges = [],
  extraContent,
  keyTakeaways = [],
  proTips,
  featuredImages = [],
  lastUpdated,
}: PseoContentRendererProps) {
  return (
    <>
      {/* Badges */}
      {badges.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-6">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold tracking-wide uppercase border border-amber-100"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* H1 */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
        {h1}
      </h1>

      {/* Last Updated */}
      {lastUpdated && (
        <p className="text-sm text-gray-400 mb-8">
          Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      )}

      {/* Introduction */}
      <div className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
        {introduction}
      </div>

      {/* Table of Contents */}
      {sections.length > 3 && (
        <nav className="bg-gray-50 rounded-xl p-6 mb-12 border">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
            In This Article
          </h2>
          <ul className="space-y-2">
            {sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-gray-700 hover:text-amber-600 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-amber-500 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </a>
              </li>
            ))}
            {faq.length > 0 && (
              <li>
                <a href="#faq-section" className="text-gray-700 hover:text-amber-600 text-sm transition-colors flex items-center gap-2">
                  <span className="text-amber-500 font-mono text-xs">{String(sections.length + 1).padStart(2, '0')}</span>
                  Frequently Asked Questions
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}

      {/* Extra Content (comparison tables, feature grids, etc.) */}
      {extraContent}

      {/* Content Sections */}
      <div className="space-y-12">
        {sections.map((section, i) => (
          <section key={i} id={`section-${i}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {section.heading}
            </h2>
            {renderRichBody(section.body)}
          </section>
        ))}
      </div>

      {/* Featured Gallery Images */}
      {featuredImages.length > 0 && (
        <div className="mt-12 mb-12">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            From Our Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredImages.map((img, i) => (
              <Link key={i} href={`/design/${img.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 group-hover:text-amber-600 transition-colors line-clamp-1">
                  {img.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {keyTakeaways.length > 0 && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8 my-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-amber-500">✦</span> Key Takeaways
          </h2>
          <ul className="space-y-3">
            {keyTakeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-amber-500 mt-1 flex-shrink-0">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <div id="faq-section">
          <PseoFAQSection faqs={faq} pageTitle={h1} />
        </div>
      )}
    </>
  );
}
