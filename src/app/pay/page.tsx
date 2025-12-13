'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CreditCard, Package, Images } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PayPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-hidden">
      <Header />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="flex-grow relative z-10 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                How would you like to proceed?
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from our curated packages, make a custom payment, or explore our work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Option 1: Check Packages - Blue Theme */}
                <Link href="/pricing" className="block group h-full">
                    <div className="bg-gradient-to-b from-blue-50 via-white to-white p-8 rounded-3xl shadow-lg border border-blue-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-300 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-100/50 to-transparent opacity-50"></div>
                        
                        <div className="relative w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-50">
                            <Package className="w-10 h-10 text-blue-600" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 relative">Check Packages</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed relative">
                            Explore our fixed price packages designed for every stage of your jewelry business.
                        </p>
                        
                        <span className="mt-auto w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-blue-200 shadow-lg group-hover:bg-blue-700 group-hover:shadow-blue-300 transition-all duration-300 transform group-hover:-translate-y-1">
                            View Pricing <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </div>
                </Link>

                {/* Option 2: Custom Payment - Green Theme */}
                <a 
                  href="https://checkout.dodopayments.com/buy/pdt_fHn4R05QqPBl38zBbc48B?quantity=1&showDiscounts=false" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block group h-full"
                >
                    <div className="bg-gradient-to-b from-emerald-50 via-white to-white p-8 rounded-3xl shadow-lg border border-emerald-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-emerald-300 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-emerald-100/50 to-transparent opacity-50"></div>
                        
                        <div className="relative w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-emerald-50">
                            <CreditCard className="w-10 h-10 text-emerald-600" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 relative">Custom Payment</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed relative">
                            Have a custom agreement? Enter your specific amount to proceed securely.
                        </p>
                        
                        <span className="mt-auto w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-emerald-600 text-white font-bold shadow-emerald-200 shadow-lg group-hover:bg-emerald-700 group-hover:shadow-emerald-300 transition-all duration-300 transform group-hover:-translate-y-1">
                            Pay Now <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </div>
                </a>

                {/* Option 3: Visit Gallery - Purple Theme */}
                <Link href="/gallery" className="block group h-full">
                    <div className="bg-gradient-to-b from-purple-50 via-white to-white p-8 rounded-3xl shadow-lg border border-purple-100 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-purple-300 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-purple-100/50 to-transparent opacity-50"></div>
                        
                        <div className="relative w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-purple-50">
                            <Images className="w-10 h-10 text-purple-600" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 relative">Visit Gallery</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed relative">
                            See the magic we create. Browse our portfolio of AI-generated jewelry imagery.
                        </p>
                        
                        <span className="mt-auto w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-purple-600 text-white font-bold shadow-purple-200 shadow-lg group-hover:bg-purple-700 group-hover:shadow-purple-300 transition-all duration-300 transform group-hover:-translate-y-1">
                            View Gallery <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PayPage;
