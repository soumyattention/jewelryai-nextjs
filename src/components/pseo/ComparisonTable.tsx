import React from 'react';
import Link from 'next/link';

interface ComparisonTableProps {
  optionAName: string;
  optionBName: string;
  features: { feature: string; option_a: string; option_b: string }[];
}

export default function ComparisonTable({ optionAName, optionBName, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto mt-8 mb-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-4 px-4 font-semibold text-gray-900 border-b">Feature</th>
            <th className="text-left py-4 px-4 font-semibold text-amber-700 border-b">{optionAName}</th>
            <th className="text-left py-4 px-4 font-semibold text-gray-600 border-b">{optionBName}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
              <td className="py-3 px-4 text-gray-900 font-medium border-b">{row.feature}</td>
              <td className="py-3 px-4 text-amber-700 border-b">{row.option_a}</td>
              <td className="py-3 px-4 text-gray-600 border-b">{row.option_b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
