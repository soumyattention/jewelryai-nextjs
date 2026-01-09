'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Static gallery data - API removed
import { photoItems, GalleryItem } from '@/lib/gallery-data';
import { Image as ImageIcon } from 'lucide-react';

export default function DebugGallery() {
  const [images] = useState<GalleryItem[]>(photoItems);

  return (
    <div className="min-h-screen bg-gray-100 font-inter flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Debug Info */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-amber-500" />
              Gallery Debug Page (Static Data)
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-gray-600">Total Images:</span>
                <span className="font-semibold text-gray-900 ml-2">{images.length}</span>
              </div>
              
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="text-green-700 font-semibold">Static Data Mode</span>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          {images.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                All Gallery Images ({images.length})
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 border border-gray-200"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <p className="text-white text-xs truncate">{image.alt}</p>
                      <p className="text-gray-300 text-xs">#{index + 1} (ID: {image.id})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {images.length === 0 && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No images found</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
