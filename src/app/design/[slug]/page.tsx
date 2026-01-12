
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// Import data - robust import
let gallerySEO: any[] = [];
try {
    // Use require to load the JSON file
    gallerySEO = require('@/data/gallery-seo.json');
} catch (e) {
    console.warn("SEO data not found, dynamic pages will be empty until data is generated.");
}

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    if (!gallerySEO || gallerySEO.length === 0) return [];
    return gallerySEO.map((item: any) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const item = gallerySEO.find((i: any) => i.slug === resolvedParams.slug);
    if (!item) return {};

    return {
        title: item.title,
        description: item.description,
        keywords: item.tags,
        openGraph: {
            title: item.title,
            description: item.description,
            images: [{ url: item.originalSrc }],
        }
    };
}

export default async function DesignPage(props: PageProps) {
    const resolvedParams = await props.params;
    const item = gallerySEO.find((i: any) => i.slug === resolvedParams.slug);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white font-inter text-gray-900 pb-20">
            {/* Navigation placeholder or import Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link href="/gallery" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to Gallery
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Image Section */}
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
                        <img
                            src={item.originalSrc}
                            alt={item.alt_text || item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col space-y-8 pt-4">
                        <div>
                            <div className="flex gap-2 flex-wrap mb-4">
                                {item.attributes.style && (
                                    <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold tracking-wide uppercase border border-amber-100">
                                        {item.attributes.style}
                                    </span>
                                )}
                                {item.attributes.material && (
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold tracking-wide uppercase">
                                        {item.attributes.material}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                                {item.title}
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-amber-500 pl-6">
                                {item.description}
                            </p>
                        </div>

                        {/* Attributes Grid */}
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                            <h3 className="text-lg font-semibold mb-6">Design Details</h3>
                            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Gemstone</p>
                                    <p className="font-medium text-gray-900">{item.attributes.gemstone || "Not specified"}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Occasion</p>
                                    <p className="font-medium text-gray-900">{item.attributes.occasion || "Versatile"}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Material</p>
                                    <p className="font-medium text-gray-900">{item.attributes.material || "Precious Metal"}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Style</p>
                                    <p className="font-medium text-gray-900">{item.attributes.style || "Unique"}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl">
                                Request Customization
                            </button>
                            <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
                                Like this design? We can customize it to your exact preferences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Tags */}
                <div className="mt-20 border-t pt-10">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Related Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag: string) => (
                            <Link
                                key={tag}
                                href={`/gallery?q=${tag}`}
                                className="px-3 py-1.5 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md text-sm transition-colors"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": item.title,
                        "description": item.description,
                        "image": item.originalSrc,
                        "material": item.attributes.material,
                        "brand": {
                            "@type": "Brand",
                            "name": "JewelryAI"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "priceCurrency": "USD",
                            "price": "0"
                        }
                    })
                }}
            />
        </div>
    );
}
