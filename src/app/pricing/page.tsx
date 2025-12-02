'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import { SchemaProduct } from '@/components/schema';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      {/* Schema Markup */}
      <SchemaProduct
        name="AI Jewelry Photography Packages"
        description="Explore our AI jewelry photography and videography packages. Options include Starter, Pro, and Elite packages for comprehensive solutions, plus dedicated Professional Video and Bulk Image services. Premium AI models, unlimited revisions, and fast turnaround available."
        price="799"
        priceCurrency="USD"
        aggregateRating={{
          ratingValue: "5.0",
          reviewCount: "127"
        }}
      />

      <Header />

      <main className="flex-grow pt-20">
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
