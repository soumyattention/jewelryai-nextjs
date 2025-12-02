'use client';

import React from 'react';
import { Check, X, Minus, ArrowRight, Info } from 'lucide-react';

const PricingChart = () => {
  const categories = [
    {
      name: "All-in-One Packages",
      color: "bg-amber-100 text-amber-900 border-amber-200",
      packages: [
        { id: 'starter', name: 'Starter', price: '$399', link: 'https://checkout.dodopayments.com/buy/pdt_JfEBSDf2uaTQ4fJJpGcjO?quantity=1&showDiscounts=false' },
        { id: 'pro', name: 'Pro', price: '$799', popular: true, link: 'https://checkout.dodopayments.com/buy/pdt_8SIvnAnAPWosbYqJGYAyL?quantity=1&showDiscounts=false' },
        { id: 'elite', name: 'Elite', price: '$1499', link: 'https://checkout.dodopayments.com/buy/pdt_3BVscqwamSZs6UQKJLYvL?quantity=1&showDiscounts=false' },
      ]
    },
    {
      name: "Specialized Services",
      color: "bg-purple-100 text-purple-900 border-purple-200",
      packages: [
        { id: 'vid15', name: 'Pro Video 15s', price: '$299', link: 'https://checkout.dodopayments.com/buy/pdt_A4NNLphnPCJ5AaLgbsvGp?quantity=1&showDiscounts=false' },
        { id: 'vid30', name: 'Pro Video 30s', price: '$499', link: 'https://checkout.dodopayments.com/buy/pdt_TgPmuMbAAeQEAQwEzSzOS?quantity=1&showDiscounts=false' },
        { id: 'bulk50', name: 'Bulk 50', price: '$499', link: 'https://checkout.dodopayments.com/buy/pdt_Vd13zdzgcxQUNNaCfD3AU?quantity=1&showDiscounts=false' },
        { id: 'bulk100', name: 'Bulk 100', price: '$799', link: 'https://checkout.dodopayments.com/buy/pdt_pJwQPLpaqlsWkfUoI7pwN?quantity=1&showDiscounts=false' },
      ]
    }
  ];

  const features = [
    {
      category: "Content Deliverables",
      rows: [
        { name: "Jewelry Articles", values: { starter: "3", pro: "10", elite: "20", vid15: "-", vid30: "-", bulk50: "-", bulk100: "-" } },
        { name: "AI Editorial Photos", values: { starter: "10", pro: "30", elite: "60", vid15: "-", vid30: "-", bulk50: "50", bulk100: "100" } },
        { name: "Cinematic Videos", values: { starter: "1", pro: "5", elite: "10", vid15: "-", vid30: "-", bulk50: "-", bulk100: "-" } },
        { name: "Professional Video", values: { starter: "-", pro: "-", elite: "1 (Free)", vid15: "1 (15s)", vid30: "1 (30s)", bulk50: "-", bulk100: "-" } },
      ]
    },
    {
      category: "Service Terms",
      rows: [
        { name: "Revisions", values: { starter: "Limited", pro: "Unlimited", elite: "Unlimited", vid15: "Unlimited", vid30: "Unlimited", bulk50: "None", bulk100: "None" } },
        { name: "Turnaround Time", values: { starter: "7 Days", pro: "14 Days", elite: "21 Days", vid15: "7 Days", vid30: "7 Days", bulk50: "14 Days", bulk100: "28 Days" } },
        { name: "Custom Reference", values: { starter: false, pro: true, elite: true, vid15: true, vid30: true, bulk50: false, bulk100: false } },
      ]
    }
  ];

  // Helper to get all packages flat
  const allPackages = categories.flatMap(c => c.packages);

  return (
    <div className="bg-white text-gray-900 font-sans text-sm sm:text-base">
      <div className="overflow-x-auto pb-8">
        <table className="w-full border-collapse min-w-[1000px]">
          {/* Header Group */}
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50 border-b border-gray-200 w-48 sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                <span className="text-gray-500 font-normal uppercase tracking-widest text-xs">Compare Plans</span>
                <div className="text-2xl font-bold mt-1">Features</div>
              </th>
              {categories.map((cat, i) => (
                <th key={i} colSpan={cat.packages.length} className={`p-2 text-center border-b border-gray-200 ${cat.color} bg-opacity-30`}>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cat.color} bg-opacity-100 bg-white/50 backdrop-blur-sm`}>
                    {cat.name}
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-4 bg-gray-50 border-b border-gray-200 sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]"></th>
              {allPackages.map((pkg) => (
                <th key={pkg.id} className={`p-4 align-bottom border-b border-gray-200 w-32 relative ${pkg.popular ? 'bg-amber-50/50' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      BEST VALUE
                    </div>
                  )}
                  <div className="font-bold text-lg">{pkg.name}</div>
                  <div className="text-2xl font-black text-gray-900 mt-1">{pkg.price}</div>
                  <a 
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 block w-full py-2 px-1 rounded-lg text-xs font-bold transition-colors ${
                      pkg.popular ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Select
                  </a>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {features.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                <tr className="bg-gray-50/50">
                  <td colSpan={allPackages.length + 1} className="p-3 text-xs font-bold uppercase text-gray-500 tracking-wider border-b border-gray-100 sticky left-0 z-10">
                    {section.category}
                  </td>
                </tr>
                {section.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50 transition-colors group">
                    <td className="p-4 border-b border-gray-100 font-medium text-gray-700 sticky left-0 bg-white group-hover:bg-gray-50 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      {row.name}
                    </td>
                    {allPackages.map((pkg) => {
                      const val = row.values[pkg.id as keyof typeof row.values];
                      let display;
                      if (val === true) display = <Check className="w-5 h-5 text-green-500 mx-auto" />;
                      else if (val === false) display = <X className="w-5 h-5 text-gray-300 mx-auto" />;
                      else if (val === "-") display = <Minus className="w-4 h-4 text-gray-200 mx-auto" />;
                      else display = <span className="font-semibold text-gray-900">{val}</span>;

                      return (
                        <td key={pkg.id} className={`p-4 border-b border-gray-100 text-center ${pkg.popular ? 'bg-amber-50/30' : ''}`}>
                          {display}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
            
            {/* Custom Solution Row */}
            <tr className="bg-gray-900 text-white">
              <td className="p-6 sticky left-0 bg-gray-900 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.5)]">
                <div className="font-bold text-lg">Enterprise</div>
                <div className="text-gray-400 text-sm">Need a custom plan?</div>
              </td>
              <td colSpan={allPackages.length} className="p-4 text-left align-middle">
                 <div className="flex items-center justify-between px-4">
                   <span className="text-gray-300 italic hidden sm:inline">Tailored solutions for large collections and specific requirements.</span>
                   <a 
                     href="https://wa.me/447727727748"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
                   >
                     Contact Sales <ArrowRight className="w-4 h-4" />
                   </a>
                 </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingChart;
