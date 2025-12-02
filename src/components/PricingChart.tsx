'use client';

import React from 'react';
import { Check, X, Minus, ArrowRight, Star } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  price: string;
  link: string;
  btnBase: string;
  popular?: boolean;
  highQuality?: boolean;
}

interface Category {
  name: string;
  gradient: string;
  headerColor: string;
  packages: Package[];
}

const PricingChart = () => {
  const categories: Category[] = [
    {
      name: "All-in-One Packages",
      gradient: "from-amber-50 via-yellow-50 to-white",
      headerColor: "text-amber-900",
      packages: [
        { id: 'starter', name: 'Starter', price: '$399', link: 'https://checkout.dodopayments.com/buy/pdt_JfEBSDf2uaTQ4fJJpGcjO?quantity=1&showDiscounts=false', btnBase: 'from-amber-100 to-yellow-100 text-amber-900 border-amber-200' },
        { id: 'pro', name: 'Pro', price: '$799', popular: true, link: 'https://checkout.dodopayments.com/buy/pdt_8SIvnAnAPWosbYqJGYAyL?quantity=1&showDiscounts=false', btnBase: 'from-amber-100 to-orange-100 text-orange-900 border-orange-200' },
        { id: 'elite', name: 'Elite', price: '$1499', link: 'https://checkout.dodopayments.com/buy/pdt_3BVscqwamSZs6UQKJLYvL?quantity=1&showDiscounts=false', btnBase: 'from-amber-100 to-yellow-100 text-amber-900 border-amber-200' },
      ]
    },
    {
      name: "Professional Video Packages",
      gradient: "from-purple-50 via-indigo-50 to-white",
      headerColor: "text-purple-900",
      packages: [
        { id: 'vid15', name: 'Video 15s', price: '$299', link: 'https://checkout.dodopayments.com/buy/pdt_A4NNLphnPCJ5AaLgbsvGp?quantity=1&showDiscounts=false', btnBase: 'from-purple-100 to-indigo-100 text-purple-900 border-purple-200' },
        { id: 'vid30', name: 'Video 30s', price: '$499', highQuality: true, link: 'https://checkout.dodopayments.com/buy/pdt_TgPmuMbAAeQEAQwEzSzOS?quantity=1&showDiscounts=false', btnBase: 'from-purple-100 to-indigo-100 text-purple-900 border-purple-200' },
      ]
    },
    {
      name: "Bulk Packages",
      gradient: "from-red-50 via-rose-50 to-white",
      headerColor: "text-red-900",
      packages: [
        { id: 'bulk50', name: 'Bulk 50', price: '$499', link: 'https://checkout.dodopayments.com/buy/pdt_Vd13zdzgcxQUNNaCfD3AU?quantity=1&showDiscounts=false', btnBase: 'from-red-100 to-rose-100 text-red-900 border-red-200' },
        { id: 'bulk100', name: 'Bulk 100', price: '$799', link: 'https://checkout.dodopayments.com/buy/pdt_pJwQPLpaqlsWkfUoI7pwN?quantity=1&showDiscounts=false', btnBase: 'from-red-100 to-rose-100 text-red-900 border-red-200' },
      ]
    }
  ];

  const features = [
    {
      category: "Content Deliverables",
      rows: [
        { name: "Jewelry Articles", values: { starter: "3", pro: "10", elite: "20", vid15: "-", vid30: "-", bulk50: "-", bulk100: "-" } },
        { name: "AI Editorial Photos", values: { starter: "Up to 10", pro: "Up to 30", elite: "Up to 60", vid15: "-", vid30: "-", bulk50: "50", bulk100: "100" } },
        { name: "Cinematic Videos", values: { 
          starter: <div className="flex flex-col items-center"><span>1</span><span className="text-xs sm:text-sm text-gray-600 font-medium mt-1">(approx $399 per video)</span></div>, 
          pro: <div className="flex flex-col items-center"><span>5</span><span className="text-xs sm:text-sm text-gray-600 font-medium mt-1">(approx $160 per video)</span></div>, 
          elite: <div className="flex flex-col items-center"><span>10</span><span className="text-xs sm:text-sm text-gray-600 font-medium mt-1">(approx $136 per video)</span></div>, 
          vid15: "-", vid30: "-", bulk50: "-", bulk100: "-" 
        } },
        { name: "Professional Video", values: { starter: "-", pro: "-", elite: "1 (Free)", vid15: "1 (15s)", vid30: "1 (30s)", bulk50: "-", bulk100: "-" } },
      ]
    },
    {
      category: "Service Terms",
      rows: [
        { name: "Revisions", values: { starter: "Limited", pro: "Unlimited", elite: "Unlimited", vid15: "Unlimited", vid30: "Unlimited", bulk50: "None", bulk100: "None" } },
        { name: "Turnaround Time", values: { starter: "7 Days", pro: "14 Days", elite: "21 Days", vid15: "7 Days", vid30: "7 Days", bulk50: "14 Days", bulk100: "28 Days" } },
        { name: "Custom Reference", values: { starter: false, pro: true, elite: true, vid15: true, vid30: true, bulk50: false, bulk100: false } },
        { name: "App Access (Future)", values: { starter: false, pro: true, elite: true, vid15: true, vid30: true, bulk50: false, bulk100: false } },
      ]
    }
  ];

  // Helper to get all packages flat
  const allPackages = categories.flatMap(c => c.packages);

  return (
    <div className="bg-white text-gray-900 font-sans text-sm sm:text-base border border-gray-200 rounded-2xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[1200px]">
          {/* Header Group */}
          <thead>
            <tr>
              <th className="p-4 sm:p-6 text-left bg-white border-b border-r border-gray-200 w-32 sm:w-64 sticky left-0 z-30 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.05)] align-bottom pb-8">
                <span className="text-gray-400 font-medium uppercase tracking-widest text-[10px] sm:text-xs mb-1 block">Compare Plans</span>
                <div className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">Features &<br/>Benefits</div>
              </th>
              {categories.map((cat, i) => (
                <th key={i} colSpan={cat.packages.length} className={`p-4 sm:p-6 text-center border-b border-r border-gray-200 last:border-r-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${cat.gradient}`}>
                  <div className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${cat.headerColor} drop-shadow-sm`}>
                    {cat.name}
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-4 bg-white border-b border-r border-gray-200 sticky left-0 z-30 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.05)]"></th>
              {allPackages.map((pkg) => (
                <th key={pkg.id} className="group p-6 align-bottom border-b border-r border-gray-200 last:border-r-0 w-48 relative bg-white hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col h-full justify-end relative z-10">
                    {/* Tags */}
                    <div className="mb-3 h-6 flex justify-center items-end">
                      {pkg.popular && (
                        <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide transform hover:scale-105 transition-transform whitespace-nowrap">
                          Best Value
                        </span>
                      )}
                      {pkg.highQuality && (
                        <span className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide transform hover:scale-105 transition-transform whitespace-nowrap">
                          Highest Quality
                        </span>
                      )}
                    </div>

                    <div className="font-bold text-xl text-gray-900 mb-1">{pkg.name}</div>
                    <div className="text-3xl font-black text-gray-900 mb-5">{pkg.price}</div>
                    
                    <a 
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 px-4 rounded-xl text-sm font-bold border transition-all duration-300 transform bg-gradient-to-r ${pkg.btnBase} group-hover:from-green-500 group-hover:to-emerald-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:scale-105`}
                    >
                      Select
                    </a>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {features.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                <tr className="bg-gray-50/90">
                  <td colSpan={allPackages.length + 1} className="p-3 sm:p-4 text-[10px] sm:text-xs font-bold uppercase text-gray-500 tracking-widest border-b border-gray-200 sticky left-0 z-20 pl-4 sm:pl-6 bg-gray-50/90 backdrop-blur-sm">
                    {section.category}
                  </td>
                </tr>
                {section.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50 transition-colors group/row">
                    <td className="p-3 sm:p-4 border-b border-r border-gray-200 font-semibold text-gray-700 sticky left-0 bg-white group-hover/row:bg-gray-50 z-30 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.05)] pl-4 sm:pl-6 text-xs sm:text-sm break-words leading-tight w-32 sm:w-64">
                      {row.name}
                    </td>
                    {allPackages.map((pkg) => {
                      const val = row.values[pkg.id as keyof typeof row.values];
                      let display;
                      if (val === true) display = <div className="bg-green-100 rounded-full p-1 inline-block"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" /></div>;
                      else if (val === false) display = <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 mx-auto" />;
                      else if (val === "-") display = <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-200 mx-auto" />;
                      else if (React.isValidElement(val)) display = val; // Support ReactNode
                      else display = <span className="font-bold text-gray-800 text-xs sm:text-sm">{val as string}</span>;

                      return (
                        <td key={pkg.id} className="p-3 sm:p-4 border-b border-r border-gray-200 last:border-r-0 text-center bg-white group-hover/row:bg-gray-50/50 relative">
                          <div className="absolute inset-0 group-hover/row:bg-amber-50/20 pointer-events-none"></div>
                          <div className="relative z-10">{display}</div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
            
            {/* Custom Solution Row */}
            <tr className="bg-gray-900 text-white">
              <td className="p-6 sm:p-8 sticky left-0 bg-gray-900 z-30 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.5)] border-r border-gray-800">
                <div className="font-bold text-lg sm:text-xl mb-1">Enterprise</div>
                <div className="text-gray-400 text-xs sm:text-sm">Need a custom plan?</div>
              </td>
              <td colSpan={allPackages.length} className="p-4 text-left align-middle bg-gray-900">
                 <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 gap-4">
                   <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-300 font-medium italic text-sm sm:text-base">Tailored solutions for large collections and specific creative requirements.</span>
                   </div>
                   <a 
                     href="https://wa.me/447727727748"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/10 whitespace-nowrap text-sm sm:text-base"
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
