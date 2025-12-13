'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CreditCard, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PayPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Choose Payment Method</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {/* Option 1: Check Packages */}
                <Link href="/pricing" className="block group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-200 cursor-pointer">
                        <div className="bg-blue-50 p-4 rounded-full mb-6 group-hover:bg-blue-100 transition-colors">
                            <Package className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Check Packages</h2>
                        <p className="text-gray-500 mb-6">Explore our fixed price packages for all your needs.</p>
                        <span className="mt-auto inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                            View Pricing <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                    </div>
                </Link>

                {/* Option 2: Custom Payment */}
                <a href="https://checkout.dodopayments.com/buy/pdt_fHn4R05QqPBl38zBbc48B?quantity=1&showDiscounts=false" target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-200 cursor-pointer">
                        <div className="bg-green-50 p-4 rounded-full mb-6 group-hover:bg-green-100 transition-colors">
                            <CreditCard className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Custom Payment</h2>
                        <p className="text-gray-500 mb-6">Enter a custom amount for a specific service or agreement.</p>
                        <span className="mt-auto inline-flex items-center text-green-600 font-semibold group-hover:translate-x-1 transition-transform">
                            Pay Now <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                    </div>
                </a>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PayPage;
