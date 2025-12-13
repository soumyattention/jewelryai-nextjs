'use client';

import React, { useState } from 'react';
import { Check, Star, ArrowRight, ChevronDown, ChevronUp, AlertCircle, X, Crown, ListPlus, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [showBulk, setShowBulk] = useState(false);

  const allInOnePackages = [
    {
      name: 'Starter Package',
      price: '$399',
      features: [
        'Up to 3 Jewelry Articles',
        '1 Cinematic Jewelry Editorial Video',
        'AI Editorial Photoshoots as per requirements (upto 10)',
        'Highest Quality of AI Engine, indistinguishable from reality',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Limited Requests and Revisions</span>',
        '7 Days Completion (ongoing one by one)'
      ],
      highlighted: false,
      color: 'gold',
      link: 'https://checkout.dodopayments.com/buy/pdt_JfEBSDf2uaTQ4fJJpGcjO?quantity=1&showDiscounts=false'
    },
    {
      name: 'Pro Package',
      price: '$799',
      features: [
        'Up to 10 Jewelry Articles',
        '5 Cinematic Jewelry Editorial Video',
        'AI Editorial Photoshoots as per requirements (upto 30)',
        'Highest Quality of AI Engine, indistinguishable from reality',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Bring your Reference Model/Pose/Style/Scene/Anything</span>',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Unlimited Requests and Revisions</span>',
        '14 Days Completion (ongoing one by one)'
      ],
      highlighted: true,
      color: 'green',
      badge: 'Best Value',
      link: 'https://checkout.dodopayments.com/buy/pdt_8SIvnAnAPWosbYqJGYAyL?quantity=1&showDiscounts=false'
    },
    {
      name: 'Elite Package',
      price: '$1499',
      features: [
        'Up to 20 Jewelry Articles',
        '10 Cinematic Jewelry Editorial Video',
        'AI Editorial Photoshoots as per requirements (upto 60)',
        'Highest Quality of AI Engine, indistinguishable from reality',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Bring your Reference Model/Pose/Style/Scene/Anything</span>',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Unlimited Requests and Revisions</span>',
        '21 Days Completion (ongoing one by one)',
        '<span class="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold uppercase mr-2 tracking-wide align-middle">Professional</span><span class="bg-purple-100 text-purple-900 px-1 font-semibold align-middle">1 Professional Video for Free (Worth $299)</span>'
      ],
      highlighted: false,
      color: 'gold',
      link: 'https://checkout.dodopayments.com/buy/pdt_3BVscqwamSZs6UQKJLYvL?quantity=1&showDiscounts=false'
    }
  ];

  const professionalPackages = [
    {
      name: 'Professional Video',
      price: '$299',
      features: [
        '<div>1 Cinematic Editorial <strong>Professional Video</strong><br/><span class="text-sm text-gray-500 font-normal mt-0.5 block">(To be made on any Creative Concept)</span></div>',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Up to 15s Long</span>',
        'Sound Effects, SFX, Premium Editing',
        'Unlimited Requests and Revisions',
        '7 Days Delivery'
      ],
      color: 'purple',
      specialTag: 'BUY 2 GET 1 FREE',
      link: 'https://checkout.dodopayments.com/buy/pdt_A4NNLphnPCJ5AaLgbsvGp?quantity=1&showDiscounts=false'
    },
    {
      name: 'Professional Video',
      price: '$499',
      features: [
        '<div>1 Cinematic Editorial <strong>Professional Video</strong><br/><span class="text-sm text-gray-500 font-normal mt-0.5 block">(To be made on any Creative Concept)</span></div>',
        '<span class="bg-yellow-200 px-1 text-black font-medium">Up to 30s Long</span>',
        'Sound Effects, SFX, Premium Editing (Highest Quality)',
        'Unlimited Requests and Revisions',
        '7 Days Delivery'
      ],
      color: 'purple',
      specialTag: 'BUY 2 GET 1 FREE',
      link: 'https://checkout.dodopayments.com/buy/pdt_TgPmuMbAAeQEAQwEzSzOS?quantity=1&showDiscounts=false'
    }
  ];

  const bulkPackages = [
    {
      name: 'Bulk Basic',
      price: '$499',
      features: [
        '50 AI Editorial Photos',
        'No Videos Provided',
        'No Additional Requests/Revisions',
        '14 Days Completion'
      ],
      color: 'red',
      link: 'https://checkout.dodopayments.com/buy/pdt_Vd13zdzgcxQUNNaCfD3AU?quantity=1&showDiscounts=false'
    },
    {
      name: 'Bulk Pro',
      price: '$799',
      features: [
        '100 AI Editorial Photos',
        'No Videos Provided',
        'No Additional Requests/Revisions',
        '28 Days Completion'
      ],
      color: 'red',
      link: 'https://checkout.dodopayments.com/buy/pdt_pJwQPLpaqlsWkfUoI7pwN?quantity=1&showDiscounts=false'
    }
  ];

  const renderFeature = (feature: string) => {
    return (
      <span 
        className="text-gray-700 text-sm sm:text-base leading-relaxed" 
        dangerouslySetInnerHTML={{ __html: feature }} 
      />
    );
  };

  const Card = ({ pkg, type }: { pkg: any, type: string }) => {
    const isHighlighted = pkg.highlighted;
    
    // Color configurations
    const colors: any = {
      green: {
        border: 'border-green-200',
        ring: 'ring-green-400',
        bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-green-50/50 to-white',
        badge: 'bg-green-600',
        icon: 'text-green-600',
        iconBg: 'bg-green-100',
        btn: 'bg-green-600 hover:bg-green-700 text-white shadow-green-200',
        label: 'bg-green-600'
      },
      purple: {
        border: 'border-purple-200',
        ring: 'ring-purple-400',
        bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-pink-50/50 to-white',
        badge: 'bg-purple-600',
        icon: 'text-purple-600',
        iconBg: 'bg-purple-100',
        btn: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200',
        label: 'bg-purple-600'
      },
      red: {
        border: 'border-red-200',
        ring: 'ring-red-400',
        bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-50 via-orange-50/50 to-white',
        badge: 'bg-red-600',
        icon: 'text-red-600',
        iconBg: 'bg-red-100',
        btn: 'bg-red-600 hover:bg-red-700 text-white shadow-red-200',
        label: 'bg-red-600'
      },
      gold: {
        border: 'border-amber-200',
        ring: 'ring-amber-400',
        bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-yellow-50/50 to-white',
        badge: 'bg-amber-600',
        icon: 'text-amber-600',
        iconBg: 'bg-amber-100',
        btn: 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200',
        label: 'bg-amber-500'
      }
    };

    const theme = colors[pkg.color] || colors.green;

    return (
      <div 
        className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300 ${
          isHighlighted 
            ? `ring-2 ${theme.ring} shadow-xl scale-100 sm:scale-105 z-10` 
            : `border ${theme.border} shadow-lg hover:shadow-xl`
        }`}
      >
        {/* Label Badge */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center gap-2">
           <span className={`${theme.label} text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md`}>
             {type}
           </span>
           {/* Special Tag for Professional Plans */}
           {pkg.specialTag && (
             <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-black shadow-md transform -rotate-2 animate-pulse">
               {pkg.specialTag}
             </span>
           )}
        </div>

        {/* Highlight Badge */}
        {isHighlighted && pkg.badge && (
          <div className="absolute -top-3 right-4 sm:-right-3 translate-x-0 sm:translate-x-0">
             <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
               <Star className="w-3 h-3" />
               {pkg.badge}
             </div>
          </div>
        )}

        <div className={`p-6 sm:p-8 flex-grow ${theme.bg} rounded-t-2xl`}>
          <div className="text-center mt-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
            <div className="mb-4 flex items-baseline justify-center">
              <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
            </div>
          </div>
          
          <ul className="space-y-4 mt-6">
            {pkg.features.map((feature: string, idx: number) => {
              // Check if feature is negative (starts with "No ")
              const isNegative = feature.toLowerCase().startsWith('no ');
              return (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${isNegative ? 'bg-red-100' : theme.iconBg}`}>
                    {isNegative ? (
                      <X className="w-3 h-3 text-red-600" />
                    ) : (
                      <Check className={`w-3 h-3 ${theme.icon}`} />
                    )}
                  </div>
                  {renderFeature(feature)}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-6 bg-white rounded-b-2xl border-t border-gray-100 mt-auto">
          <a
            href={pkg.link || "https://wa.me/447727727748"}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 ${theme.btn} shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
          >
            <span>Choose Plan</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 mt-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm mb-2">
            Pricing plan updated on Dec 1, 2025
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your jewelry brand. 
            From professional editorial content to bulk production.
          </p>
        </div>

        {/* 1. ALL-IN-ONE SECTION (Mixed) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 inline-flex items-center gap-2">
              <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg border border-amber-200 shadow-sm">All-in-One Packages</span>
            </h3>
            <p className="text-gray-600 mt-2">Done by our expert team under supervision</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {allInOnePackages.map((pkg, idx) => (
              <Card key={idx} pkg={pkg} type="all-in-one" />
            ))}
          </div>
        </div>

        {/* 2. PROFESSIONAL SECTION (Purple) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-purple-800 inline-flex items-center gap-2">
              <span className="bg-purple-100 px-4 py-2 rounded-lg border border-purple-200 shadow-sm">Professional Packages</span>
            </h3>
            <p className="text-gray-600 mt-2">Premium content created by founders</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {professionalPackages.map((pkg, idx) => (
              <Card key={idx} pkg={pkg} type="professional" />
            ))}
          </div>
        </div>

        {/* 3. BULK SECTION (Red - Collapsible) */}
        <div className="max-w-4xl mx-auto mb-20">
           {/* Heading for Bulk Section */}
           <div className="text-center mb-6">
             <h3 className="text-xl font-bold text-gray-700">Looking for Cheaper Options?</h3>
           </div>
           
          <button 
            onClick={() => setShowBulk(!showBulk)}
            className="w-full bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-all border border-red-100 group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-xl group-hover:bg-red-200 transition-colors">
                 <span className="font-bold text-red-700">Bulk Packages</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Bulk Mode</p>
                <p className="text-sm text-gray-500">Only images, made in bulk at a cheaper price</p>
              </div>
            </div>
            
            {/* Prominent Expand Icon */}
            <div className={`transform transition-transform duration-300 ${showBulk ? 'rotate-180' : ''}`}>
              <div className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-red-200">
                {showBulk ? <ChevronUp className="w-6 h-6 stroke-[3]" /> : <ChevronDown className="w-6 h-6 stroke-[3]" />}
              </div>
            </div>
          </button>

          <div className={`transition-all duration-500 ease-in-out ${
            showBulk ? 'opacity-100 mt-8' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
             <div className="grid md:grid-cols-2 gap-8 items-start pb-4">
              {bulkPackages.map((pkg, idx) => (
                <Card key={idx} pkg={pkg} type="bulk" />
              ))}
            </div>
          </div>
        </div>

        {/* Compare All Button */}
        <div className="text-center mb-20">
          <a
            href="/chart"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
          >
            <ListPlus className="w-5 h-5" />
            Compare All Packages
          </a>
        </div>

        {/* Request Free Trial Block */}
        <div className="max-w-3xl mx-auto mb-20 px-4">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-50 via-rose-50 to-white rounded-3xl p-8 sm:p-10 border border-red-100 shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 text-red-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Not sure which plan to pick?</h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
                Experience the magic of Jewelry AI firsthand. Request a free trial to see the quality before you commit.
              </p>
              <a 
                href="https://wa.me/447727727748"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 shadow-lg shadow-red-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Request a Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-20">
           <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl w-full">
             <div className="flex justify-center mb-4">
               <div className="bg-amber-50 p-3 rounded-full border border-amber-100">
                 <Crown className="w-8 h-8 text-amber-500" />
               </div>
             </div>
             
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a Custom Solution?</h3>
             <p className="text-gray-600 mb-8 text-lg">
               We offer tailored packages for large collections, enterprise clients, and specific creative requirements.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a 
                 href="https://wa.me/447727727748"
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-amber-500 hover:bg-amber-600 shadow-lg hover:shadow-amber-200 transition-all duration-200 transform hover:-translate-y-0.5"
               >
                 Contact Us for Custom Pricing
               </a>
               <a 
                 href="https://checkout.dodopayments.com/buy/pdt_fHn4R05QqPBl38zBbc48B?quantity=1&showDiscounts=false"
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center px-8 py-3 border border-amber-500 text-base font-bold rounded-xl text-amber-600 bg-white hover:bg-amber-50 shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
               >
                 Custom Payment
               </a>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
