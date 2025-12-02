'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingChart from '@/components/PricingChart';
import { SchemaProduct } from '@/components/schema';

const ChartPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Schema Markup for SEO */}
      <SchemaProduct
        name="AI Jewelry Photography Pricing Chart"
        description="Comprehensive comparison of all Jewelry AI packages including All-in-One, Professional Video, and Bulk Image services."
        price="799"
        priceCurrency="USD"
        aggregateRating={{
          ratingValue: "5.0",
          reviewCount: "127"
        }}
      />

      <Header />

      <main className="flex-grow pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare All Packages
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect solution for your jewelry brand. Compare features, deliverables, and pricing across all our services.
            </p>
          </div>
          
          <PricingChart />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChartPage;
