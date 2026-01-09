'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { videoItems, GalleryItem } from '@/lib/gallery-data';
import { Trash2, Play, Pause, X } from 'lucide-react';

export default function DebugVideos() {
  const [videos, setVideos] = useState<GalleryItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [idsToRemove, setIdsToRemove] = useState<Set<number>>(new Set());

  useEffect(() => {
    setVideos(videoItems);
  }, []);

  const toggleVideoSelection = (id: number) => {
    const newIds = new Set(idsToRemove);
    if (newIds.has(id)) {
      newIds.delete(id);
    } else {
      newIds.add(id);
    }
    setIdsToRemove(newIds);
  };

  const handleRemoveSelected = () => {
    if (idsToRemove.size === 0) return;
    const confirmRemove = confirm(`Remove ${idsToRemove.size} videos from the gallery?`);
    if (confirmRemove) {
      setVideos(videos.filter(v => !idsToRemove.has(v.id)));
      setIdsToRemove(new Set());
    }
  };

  const getVideoNumber = (id: number) => {
    const index = videoItems.findIndex(v => v.id === id);
    return index + 1;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  🎬 Video Debug Page
                </h1>
                <p className="text-gray-600 mt-1">
                  Total videos: {videoItems.length} | Selected to remove: {idsToRemove.size}
                </p>
              </div>
              {idsToRemove.size > 0 && (
                <button
                  onClick={handleRemoveSelected}
                  className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  Remove Selected ({idsToRemove.size})
                </button>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-blue-800 font-medium">Instructions:</p>
            <ul className="text-blue-700 text-sm mt-2 list-disc list-inside">
              <li>Click on any video to preview it</li>
              <li>Click the checkbox or video card to select videos for removal</li>
              <li>Selected videos will be marked with a red border</li>
              <li>Click "Remove Selected" to remove them</li>
              <li>Video numbers correspond to their order in the gallery (1-39)</li>
            </ul>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {videos.map((video) => {
              const videoNum = getVideoNumber(video.id);
              const isSelected = idsToRemove.has(video.id);
              
              return (
                <div
                  key={video.id}
                  onClick={() => toggleVideoSelection(video.id)}
                  className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${
                    isSelected 
                      ? 'ring-4 ring-red-500 ring-offset-2' 
                      : 'hover:ring-2 hover:ring-amber-500'
                  }`}
                >
                  {/* Video Number Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className={`px-2 py-1 rounded text-sm font-bold ${
                      isSelected 
                        ? 'bg-red-500 text-white' 
                        : 'bg-black/70 text-white'
                    }`}>
                      #{videoNum}
                    </span>
                  </div>

                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        REMOVE
                      </span>
                    </div>
                  )}

                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" fill="currentColor" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Export IDs for Removal */}
          {idsToRemove.size > 0 && (
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                IDs to Remove (copy and paste to gallery-data.ts):
              </h3>
              <code className="block bg-yellow-100 p-3 rounded text-sm overflow-x-auto">
                {Array.from(idsToRemove)
                  .sort((a, b) => getVideoNumber(a) - getVideoNumber(b))
                  .map(id => ({ id, num: getVideoNumber(id) }))
                  .map(({ id, num }) => `id: ${id} (Video #${num})`)
                  .join(',\n')}
              </code>
            </div>
          )}
        </div>
      </main>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedVideo(null);
            setIsPlaying(false);
          }}
        >
          <button
            onClick={() => {
              setSelectedVideo(null);
              setIsPlaying(false);
            }}
            className="absolute top-4 right-4 z-[10001] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between text-white">
              <span className="text-xl font-bold">
                Video #{getVideoNumber(selectedVideo.id)} (ID: {selectedVideo.id})
              </span>
              <button
                onClick={() => toggleVideoSelection(selectedVideo.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  idsToRemove.has(selectedVideo.id)
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                <Trash2 className="w-5 h-5" />
                {idsToRemove.has(selectedVideo.id) ? 'Keep This' : 'Mark for Removal'}
              </button>
            </div>
            
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
