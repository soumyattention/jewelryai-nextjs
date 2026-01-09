"use client";

import { useState, useEffect } from "react";
import { photoItems, videoItems } from "@/lib/gallery-data";

interface GalleryItem {
  id: number;
  category: "photos" | "videos";
  type: "image" | "video";
  src: string;
  alt: string;
  autoplay?: boolean;
  selected?: boolean;
}

export default function ManageGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all");
  const [removedIds, setRemovedIds] = useState<number[]>([]);

  useEffect(() => {
    // Combine photos and videos
    const allItems = [...photoItems, ...videoItems];
    setItems(allItems);
  }, []);

  const toggleSelection = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleRemove = () => {
    setRemovedIds((prev) => [...prev, ...selectedIds]);
    setSelectedIds([]);
    alert(`Removed ${selectedIds.length} items. IDs: ${selectedIds.join(", ")}`);
  };

  const handleSelectAll = () => {
    const visibleItems = items.filter((item) => !removedIds.includes(item.id));
    if (filter !== "all") {
      const filtered = visibleItems.filter((item) => item.category === filter);
      setSelectedIds(filtered.map((item) => item.id));
    } else {
      setSelectedIds(visibleItems.map((item) => item.id));
    }
  };

  const handleDeselectAll = () => {
    setSelectedIds([]);
  };

  const filteredItems = items.filter((item) => {
    if (removedIds.includes(item.id)) return false;
    if (filter === "all") return true;
    return item.category === filter;
  });

  const visibleCount = filteredItems.length;
  const selectedCount = selectedIds.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gallery Management (Temporary)</h1>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded ${
                filter === "all" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              All ({items.filter((i) => !removedIds.includes(i.id)).length})
            </button>
            <button
              onClick={() => setFilter("photos")}
              className={`px-4 py-2 rounded ${
                filter === "photos" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              Photos ({photoItems.filter((i) => !removedIds.includes(i.id)).length})
            </button>
            <button
              onClick={() => setFilter("videos")}
              className={`px-4 py-2 rounded ${
                filter === "videos" ? "bg-blue-600" : "bg-gray-700"
              }`}
            >
              Videos ({videoItems.filter((i) => !removedIds.includes(i.id)).length})
            </button>
          </div>

          <div className="flex gap-2 ml-auto">
            <button
              onClick={handleSelectAll}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Select All Visible
            </button>
            <button
              onClick={handleDeselectAll}
              className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
            >
              Deselect All
            </button>
            <button
              onClick={handleRemove}
              disabled={selectedCount === 0}
              className={`px-4 py-2 rounded ${
                selectedCount > 0
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              Remove Selected ({selectedCount})
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-4 text-sm text-gray-400">
          Showing: {visibleCount} items | Selected: {selectedCount} items | Removed: {removedIds.length} items
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleSelection(item.id)}
              className={`relative cursor-pointer border-2 rounded overflow-hidden ${
                selectedIds.includes(item.id)
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-24 object-cover"
                  muted
                  preload="metadata"
                />
              )}
              
              {/* ID Badge */}
              <div className="absolute top-0 left-0 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-br">
                #{item.id}
              </div>

              {/* Selection indicator */}
              {selectedIds.includes(item.id) && (
                <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">×</span>
                </div>
              )}
              
              {/* Type indicator */}
              <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-tl">
                {item.type === "video" ? "▶" : "IMG"}
              </div>
            </div>
          ))}
        </div>

        {/* Removed items preview */}
        {removedIds.length > 0 && (
          <div className="mt-8 p-4 bg-red-900/30 rounded">
            <h2 className="text-lg font-bold mb-2 text-red-400">
              Removed Items ({removedIds.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {removedIds.map((id) => (
                <span
                  key={id}
                  className="bg-red-800 text-white text-sm px-2 py-1 rounded"
                >
                  #{id}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Export section */}
        <div className="mt-8 p-4 bg-gray-800 rounded">
          <h2 className="text-lg font-bold mb-2">Export Removed IDs</h2>
          <p className="text-sm text-gray-400 mb-2">
            Copy these IDs to remove them from the gallery-data.ts file:
          </p>
          <textarea
            className="w-full h-24 bg-gray-700 text-white p-2 rounded text-sm font-mono"
            readOnly
            value={removedIds.join(", ")}
          />
        </div>
      </div>
    </div>
  );
}
