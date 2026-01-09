'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fetchImagesFromFolders } from '@/lib/gallery-api';
import { GalleryItem } from '@/lib/gallery-data';
import { Loader2, RefreshCw, Image as ImageIcon } from 'lucide-react';

export default function DebugGallery() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [folderPath, setFolderPath] = useState('/January');

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching images from folders...');
      const fetchedImages = await fetchImagesFromFolders();
      console.log('Fetched images:', fetchedImages.length);
      console.log('Sample image:', fetchedImages[0]);
      setImages(fetchedImages);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [folderPath]);

  return (
    <div className="min-h-screen bg-gray-100 font-inter flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Debug Controls */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-amber-500" />
              ImageKit Debug Page
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <label className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Folder Path:</span>
                <input
                  type="text"
                  value={folderPath}
                  onChange={(e) => setFolderPath(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
              
              <button
                onClick={fetchImages}
                disabled={loading}
                className="flex items-center gap-2 bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <RefreshCw className="w-5 h-5" />
                )}
                Refresh
              </button>
            </div>

            {/* Status */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-gray-600">Images Found:</span>
                <span className="font-semibold text-gray-900 ml-2">{images.length}</span>
              </div>
              
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-gray-600">Status:</span>
                {loading ? (
                  <span className="text-amber-600 font-semibold ml-2">Loading...</span>
                ) : error ? (
                  <span className="text-red-600 font-semibold ml-2">Error</span>
                ) : (
                  <span className="text-green-600 font-semibold ml-2">Success</span>
                )}
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">Error:</p>
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>

          {/* Images Grid */}
          {images.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Images from {folderPath} ({images.length})
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
                      <p className="text-white text-xs truncate">{image.seoTitle}</p>
                      <p className="text-gray-300 text-xs">#{index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && images.length === 0 && !error && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No images found in folder: {folderPath}</p>
              <p className="text-gray-500 text-sm mt-2">
                Make sure the folder exists in your ImageKit account and contains images.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
