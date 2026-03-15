import React from 'react';
import PseoFAQSection from './PseoFAQSection';

interface ContentSection {
  heading: string;
  body: string;
}

interface PseoContentRendererProps {
  h1: string;
  introduction: string;
  sections: ContentSection[];
  faq: { question: string; answer: string }[];
  badges?: string[];
  extraContent?: React.ReactNode;
}

export default function PseoContentRenderer({
  h1,
  introduction,
  sections,
  faq,
  badges = [],
  extraContent,
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
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
        {h1}
      </h1>

      {/* Introduction */}
      <div className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
        {introduction}
      </div>

      {/* Extra Content (comparison tables, feature grids, etc.) */}
      {extraContent}

      {/* Content Sections */}
      <div className="space-y-12">
        {sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {section.heading}
            </h2>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {/* FAQ */}
      {faq.length > 0 && <PseoFAQSection faqs={faq} pageTitle={h1} />}
    </>
  );
}
