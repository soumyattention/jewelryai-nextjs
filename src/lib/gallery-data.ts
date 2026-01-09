// Define an interface for gallery items
export interface GalleryItem {
    id: number;
    category: "photos" | "videos";
    type: "image" | "video";
    src: string;
    alt: string;
    autoplay?: boolean;
    selected?: boolean;

    // Enhanced SEO fields
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
    jewelryType?: "ring" | "necklace" | "earrings" | "bracelet" | "watch" | "brooch" | "pendant" | "anklet" | "other";
    style?: "luxury" | "minimalist" | "vintage" | "modern" | "classic" | "boho" | "art-deco" | "contemporary";
    occasion?: "wedding" | "engagement" | "anniversary" | "everyday" | "formal" | "casual" | "party";
    targetAudience?: "bridal" | "women" | "men" | "unisex";
    dominantColors?: string[];
    materials?: string[];
    setting?: string;

    // Video-specific
    duration?: number;
    videoDescription?: string;
}

// Gallery items - Videos only (images now come from ImageKit folders)
// Updated: January 9, 2025 - Env vars re-added (15s ago)
export const galleryItems: GalleryItem[] = [
    // Videos
    {
        id: 1001,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/11bd29a8618d3588483ee74cfe8c2bde/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1002,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c2cf606977cab39c4c066eb9f4e843ec/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1003,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/db7419e264d5f9df2b811112e28af16a/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1004,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/6bf8f32ecd01b2b4743b9b11b8c9f421/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1005,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/badc42d3035666b2cca8fb2cd873f5e8/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1006,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/12621081b5a19c4e0c139c322680050d/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1007,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/6d4b5824aa9cfb93c62ed9cb15cbba7e/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1008,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c1d5b723f2cedcc108dbbaf5f784a0f5/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1009,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/42295164ae7ec1ed6891b98e245d0983/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1010,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/1a1e37ef8d66075a08458ed092947b43/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1011,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/f7c45583b5597152a28e3419049f43b0/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1012,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/8cdb09de52c7e3fb0f01b23f1a32c26d/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1013,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/3df8196f6cefb1def61a8ee3ecfe4cae/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1014,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/8d24b8b30f0e0c508951f8cee36d079e/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1015,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/403fccbf1df3781f152be5efd20fa8e9/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1016,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2d68b15717c3f5aaf906e8dbbab70409/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1017,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2b7423f8c70b27bc0d7ebb807160a4f1/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1018,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/140b167edb888394c4d55110bff267d7/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1019,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c7760494f8cb1b6589de6d180d3bb19a/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1022,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/1cacc6a93122e9fdbbe620249bde1f7c/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1023,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/f1be1a9ceaf08a0202e9d241d00c3169/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1026,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/ce7a44e9478d2b32d16c8015f546e274/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1027,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2b3dc8c63a721d95d7c3a9f373178614/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1028,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2de96310b60c883e07c0ae239937ad8c/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1030,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/f891d20d31e77d2801de88f58300e927/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1031,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/7f290a70aed5996d4c2ebd064454f55f/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1033,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/116f5afcc7cdfb8f20b91f78cbc7fb5b/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1034,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/ef45d516db3816983862a5f1a35ed5e7/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1035,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2bedeac4d49e39963cfb5c562e06ebb2/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1036,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/d17983cdd380ed9c11e960c79f082bc9/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1037,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/100f8c523455da241d6d30ea76726c0a/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1038,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/b5a55d0eb16dd549a0a8b329b76c9127/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1039,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/73fa55b85efe595a0a41ff6f69daafaf/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    }
];

// Export filtered lists
export const photoItems: GalleryItem[] = [];
export const videoItems = galleryItems.filter(item => item.type === "video");
export const selectedItems: GalleryItem[] = [];
