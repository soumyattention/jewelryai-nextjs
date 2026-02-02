/// Define an interface for gallery items
export interface GalleryItem {
    id: number;
    category: "photos" | "videos";
    type: "image" | "video";
    src: string;
    alt: string;
    autoplay?: boolean;
    selected?: boolean;
}

// Static gallery items - Images from November and January folders (URLs hardcoded, no API calls)
// Generated: January 9, 2026
// November: 135 images
// January: 31 images
// Total: 166 images + 33 videos

export const photoItems: GalleryItem[] = [
    {
        id: 11000,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x139.png",
        alt: "AI-generated jewelry design x139.png"
    },
    {
        id: 11001,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x136.png",
        alt: "AI-generated jewelry design x136.png"
    },
    {
        id: 11002,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x135.jpg",
        alt: "AI-generated jewelry design x135.jpg"
    },
    {
        id: 11003,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x134.jpg",
        alt: "AI-generated jewelry design x134.jpg"
    },
    {
        id: 11004,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x144.png",
        alt: "AI-generated jewelry design x144.png"
    },
    {
        id: 11005,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x142.png",
        alt: "AI-generated jewelry design x142.png"
    },
    {
        id: 11006,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x130.png",
        alt: "AI-generated jewelry design x130.png"
    },
    {
        id: 11007,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x131.png",
        alt: "AI-generated jewelry design x131.png"
    },
    {
        id: 11008,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x129.png",
        alt: "AI-generated jewelry design x129.png"
    },
    {
        id: 11009,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x132.jpg",
        alt: "AI-generated jewelry design x132.jpg"
    },
    {
        id: 11010,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/x127.png",
        alt: "AI-generated jewelry design x127.png"
    },
    {
        id: 11011,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x128.png",
        alt: "AI-generated jewelry design x128.png"
    },
    {
        id: 11012,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x126.png",
        alt: "AI-generated jewelry design x126.png"
    },
    {
        id: 11013,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/x125.jpg",
        alt: "AI-generated jewelry design x125.jpg"
    },
    {
        id: 11014,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x100.png",
        alt: "AI-generated jewelry design x100.png"
    },
    {
        id: 11015,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x118.png",
        alt: "AI-generated jewelry design x118.png"
    },
    {
        id: 11016,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x121.png",
        alt: "AI-generated jewelry design x121.png"
    },
    {
        id: 11017,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x115.png",
        alt: "AI-generated jewelry design x115.png"
    },
    {
        id: 11018,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x109.png",
        alt: "AI-generated jewelry design x109.png"
    },
    {
        id: 11019,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x113.jpeg",
        alt: "AI-generated jewelry design x113.jpeg"
    },
    {
        id: 11020,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x101.png",
        alt: "AI-generated jewelry design x101.png"
    },
    {
        id: 11021,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x114.png",
        alt: "AI-generated jewelry design x114.png"
    },
    {
        id: 11022,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x112.png",
        alt: "AI-generated jewelry design x112.png"
    },
    {
        id: 11023,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x105.png",
        alt: "AI-generated jewelry design x105.png"
    },
    {
        id: 11024,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x104.png",
        alt: "AI-generated jewelry design x104.png"
    },
    {
        id: 11025,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x108.png",
        alt: "AI-generated jewelry design x108.png"
    },
    {
        id: 11026,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x110.jpg",
        alt: "AI-generated jewelry design x110.jpg"
    },
    {
        id: 11027,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x111.jpg",
        alt: "AI-generated jewelry design x111.jpg"
    },
    {
        id: 11028,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/D2.png",
        alt: "AI-generated jewelry design D2.png"
    },
    {
        id: 11031,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x2%20(1).png",
        alt: "AI-generated jewelry design x2 (1).png"
    },
    {
        id: 11032,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/x5.png",
        alt: "AI-generated jewelry design x5.png"
    },
    {
        id: 11033,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/w8.png",
        alt: "AI-generated jewelry design w8.png"
    },
    {
        id: 11034,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/gr3.png",
        alt: "AI-generated jewelry design gr3.png"
    },
    {
        id: 11036,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/DX4.png",
        alt: "AI-generated jewelry design DX4.png"
    },
    {
        id: 11038,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/w6.png",
        alt: "AI-generated jewelry design w6.png"
    },
    {
        id: 11039,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/DX1.png",
        alt: "AI-generated jewelry design DX1.png"
    },
    {
        id: 11041,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/marika1.png",
        alt: "AI-generated jewelry design marika1.png"
    },
    {
        id: 11042,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/marika2.png",
        alt: "AI-generated jewelry design marika2.png"
    },
    {
        id: 11043,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/pp1.png",
        alt: "AI-generated jewelry design pp1.png"
    },
    {
        id: 11044,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/u6.png",
        alt: "AI-generated jewelry design u6.png"
    },
    {
        id: 11045,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/ai_ice_cream_ring4.png",
        alt: "AI-generated jewelry design ai_ice_cream_ring4.png"
    },
    {
        id: 11046,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/WhatsApp%20Image%202025-08-12%20at%2010.39.51%20PM.jpeg",
        alt: "AI-generated jewelry design WhatsApp Image 2025-08-12 at 10.39.51 PM.jpeg"
    },
    {
        id: 11047,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/WhatsApp%20Image%202025-08-12%20at%2011.22.21%20PM.jpeg",
        alt: "AI-generated jewelry design WhatsApp Image 2025-08-12 at 11.22.21 PM.jpeg"
    },
    {
        id: 11048,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/WhatsApp%20Image%202025-08-12%20at%209.33.43%20PM.jpeg",
        alt: "AI-generated jewelry design WhatsApp Image 2025-08-12 at 9.33.43 PM.jpeg"
    },
    {
        id: 11049,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/WhatsApp%20Image%202025-08-12%20at%2011.27.28%20PM.jpeg",
        alt: "AI-generated jewelry design WhatsApp Image 2025-08-12 at 11.27.28 PM.jpeg"
    },
    {
        id: 11051,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/dnour3.png",
        alt: "AI-generated jewelry design dnour3.png"
    },
    {
        id: 11053,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/eng3.png",
        alt: "AI-generated jewelry design eng3.png"
    },
    {
        id: 11055,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/bln%20ten2.png",
        alt: "AI-generated jewelry design bln ten2.png"
    },
    {
        id: 11056,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/erato2.jpg",
        alt: "AI-generated jewelry design erato2.jpg"
    },
    {
        id: 11057,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/bln%20ten.png",
        alt: "AI-generated jewelry design bln ten.png"
    },
    {
        id: 11058,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/bln34.png",
        alt: "AI-generated jewelry design bln34.png"
    },
    {
        id: 11059,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/bln33.jpg",
        alt: "AI-generated jewelry design bln33.jpg"
    },
    {
        id: 11060,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/bln32%20(1).png",
        alt: "AI-generated jewelry design bln32 (1).png"
    },
    {
        id: 11062,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/8f99264b-27b8-427b-8a8e-d8a863fd7a7f.png",
        alt: "AI-generated jewelry design 8f99264b-27b8-427b-8a8e-d8a863fd7a7f.png"
    },
    {
        id: 11063,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/lzf1.png",
        alt: "AI-generated jewelry design lzf1.png"
    },
    {
        id: 11064,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/ff1.png",
        alt: "AI-generated jewelry design ff1.png"
    },
    {
        id: 11065,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/openart-b8d0f97f47d9416886efceadcf3475b5_raw.jpg",
        alt: "AI-generated jewelry design openart-b8d0f97f47d9416886efceadcf3475b5_raw.jpg"
    },
    {
        id: 11066,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/p2.png",
        alt: "AI-generated jewelry design p2.png"
    },
    {
        id: 11067,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/bln39.jpg",
        alt: "AI-generated jewelry design bln39.jpg"
    },
    {
        id: 11068,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/bln36.jpg",
        alt: "AI-generated jewelry design bln36.jpg"
    },
    {
        id: 11069,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/bln37.jpg",
        alt: "AI-generated jewelry design bln37.jpg"
    },
    {
        id: 11072,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/binder1.jpg",
        alt: "AI-generated jewelry design binder1.jpg"
    },
    {
        id: 11073,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/E3%20(1).png",
        alt: "AI-generated jewelry design E3 (1).png"
    },
    {
        id: 11074,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/binder2.jpg",
        alt: "AI-generated jewelry design binder2.jpg"
    },
    {
        id: 11075,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/11-1.png",
        alt: "AI-generated jewelry design 11-1.png"
    },
    {
        id: 11076,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/rx7.png",
        alt: "AI-generated jewelry design rx7.png"
    },
    {
        id: 11077,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/22-1.png",
        alt: "AI-generated jewelry design 22-1.png"
    },
    {
        id: 11078,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/21-2.png",
        alt: "AI-generated jewelry design 21-2.png"
    },
    {
        id: 11079,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/rm2.png",
        alt: "AI-generated jewelry design rm2.png"
    },
    {
        id: 11080,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/rm1.png",
        alt: "AI-generated jewelry design rm1.png"
    },
    {
        id: 11081,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/36-1.png",
        alt: "AI-generated jewelry design 36-1.png"
    },
    {
        id: 11082,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/30-1.png",
        alt: "AI-generated jewelry design 30-1.png"
    },
    {
        id: 11083,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/rx10.png",
        alt: "AI-generated jewelry design rx10.png"
    },
    {
        id: 11084,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/rx6.jpeg",
        alt: "AI-generated jewelry design rx6.jpeg"
    },
    {
        id: 11085,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/rm3.jpeg",
        alt: "AI-generated jewelry design rm3.jpeg"
    },
    {
        id: 11086,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/rx3.png",
        alt: "AI-generated jewelry design rx3.png"
    },
    {
        id: 11087,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/81.jpeg",
        alt: "AI-generated jewelry design 81.jpeg"
    },
    {
        id: 11088,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/22-n.jpeg",
        alt: "AI-generated jewelry design 22-n.jpeg"
    },
    {
        id: 11089,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/freepik__make-different-pose-and-camera-angle-for-this-shoo__88253.jpeg",
        alt: "AI-generated jewelry design freepik__make-different-pose-and-camera-angle-for-this-shoo__88253.jpeg"
    },
    {
        id: 11090,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/34-5.png",
        alt: "AI-generated jewelry design 34-5.png"
    },
    {
        id: 11091,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/40-4.png",
        alt: "AI-generated jewelry design 40-4.png"
    },
    {
        id: 11092,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/fyne_1.jpeg",
        alt: "AI-generated jewelry design fyne_1.jpeg"
    },
    {
        id: 11093,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/png8.1.png",
        alt: "AI-generated jewelry design png8.1.png"
    },
    {
        id: 11094,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/png5.1.png",
        alt: "AI-generated jewelry design png5.1.png"
    },
    {
        id: 11095,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/lorise_1.jpeg",
        alt: "AI-generated jewelry design lorise_1.jpeg"
    },
    {
        id: 11096,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/50-2.png",
        alt: "AI-generated jewelry design 50-2.png"
    },
    {
        id: 11097,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/png3.1.png",
        alt: "AI-generated jewelry design png3.1.png"
    },
    {
        id: 11098,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/40-3'.png",
        alt: "AI-generated jewelry design 40-3'.png"
    },
    {
        id: 11099,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/45-3.png",
        alt: "AI-generated jewelry design 45-3.png"
    },
    {
        id: 11100,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/png1.1.png",
        alt: "AI-generated jewelry design png1.1.png"
    },
    {
        id: 11101,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/45-1.png",
        alt: "AI-generated jewelry design 45-1.png"
    },
    {
        id: 11102,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/43-2.png",
        alt: "AI-generated jewelry design 43-2.png"
    },
    {
        id: 11103,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/33-3.png",
        alt: "AI-generated jewelry design 33-3.png"
    },
    {
        id: 11104,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/33-2.png",
        alt: "AI-generated jewelry design 33-2.png"
    },
    {
        id: 11105,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/RF%201%20(1).jpeg",
        alt: "AI-generated jewelry design RF 1 (1).jpeg"
    },
    {
        id: 11106,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/RF%203%20(1).jpeg",
        alt: "AI-generated jewelry design RF 3 (1).jpeg"
    },
    {
        id: 11107,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/h11.jpeg",
        alt: "AI-generated jewelry design h11.jpeg"
    },
    {
        id: 11108,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/RF%202%20(1).jpeg",
        alt: "AI-generated jewelry design RF 2 (1).jpeg"
    },
    {
        id: 11109,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/hy.jpeg",
        alt: "AI-generated jewelry design hy.jpeg"
    },
    {
        id: 11110,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/terry1-1.jpeg",
        alt: "AI-generated jewelry design terry1-1.jpeg"
    },
    {
        id: 11111,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/789.png",
        alt: "AI-generated jewelry design 789.png"
    },
    {
        id: 11112,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/dalya1.jpeg",
        alt: "AI-generated jewelry design dalya1.jpeg"
    },
    {
        id: 11113,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/17-2.png",
        alt: "AI-generated jewelry design 17-2.png"
    },
    {
        id: 11114,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/hanif02.jpeg",
        alt: "AI-generated jewelry design hanif02.jpeg"
    },
    {
        id: 11116,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/df2.jpeg",
        alt: "AI-generated jewelry design df2.jpeg"
    },
    {
        id: 11118,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/terry1-2%20(1).jpeg",
        alt: "AI-generated jewelry design terry1-2 (1).jpeg"
    },
    {
        id: 11119,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/15-1.png",
        alt: "AI-generated jewelry design 15-1.png"
    },
    {
        id: 11120,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/17%20-%203.png",
        alt: "AI-generated jewelry design 17 - 3.png"
    },
    {
        id: 11121,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/ir4.jpeg",
        alt: "AI-generated jewelry design ir4.jpeg"
    },
    {
        id: 11122,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/df6.png",
        alt: "AI-generated jewelry design df6.png"
    },
    {
        id: 11123,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/31-3.png",
        alt: "AI-generated jewelry design 31-3.png"
    },
    {
        id: 11124,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/11-3.png",
        alt: "AI-generated jewelry design 11-3.png"
    },
    {
        id: 11125,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/42-1.png",
        alt: "AI-generated jewelry design 42-1.png"
    },
    {
        id: 11126,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/f6g.png",
        alt: "AI-generated jewelry design f6g.png"
    },
    {
        id: 11127,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/8-2.png",
        alt: "AI-generated jewelry design 8-2.png"
    },
    {
        id: 11128,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/run10.png",
        alt: "AI-generated jewelry design run10.png"
    },
    {
        id: 11129,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/craw1.png",
        alt: "AI-generated jewelry design craw1.png"
    },
    {
        id: 11130,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/j7dg.png",
        alt: "AI-generated jewelry design j7dg.png"
    },
    {
        id: 11131,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/run3.png",
        alt: "AI-generated jewelry design run3.png"
    },
    {
        id: 11132,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/Men's%20RING.png",
        alt: "AI-generated jewelry design Men's RING.png"
    },
    {
        id: 11133,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/November/run53.png",
        alt: "AI-generated jewelry design run53.png"
    },
    {
        id: 11134,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/November/run9.png",
        alt: "AI-generated jewelry design run9.png"
    },
    {
        id: 12000,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan6.jpg",
        alt: "AI-generated jewelry design jan6.jpg"
    },
    {
        id: 12001,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan30.jpg",
        alt: "AI-generated jewelry design jan30.jpg"
    },
    {
        id: 12002,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan13.jpg",
        alt: "AI-generated jewelry design jan13.jpg"
    },
    {
        id: 12003,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan11.jpg",
        alt: "AI-generated jewelry design jan11.jpg"
    },
    {
        id: 12004,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan1.jpg",
        alt: "AI-generated jewelry design jan1.jpg"
    },
    {
        id: 12005,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan29.jpg",
        alt: "AI-generated jewelry design jan29.jpg"
    },
    {
        id: 12006,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan27.jpg",
        alt: "AI-generated jewelry design jan27.jpg"
    },
    {
        id: 12007,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan20.jpg",
        alt: "AI-generated jewelry design jan20.jpg"
    },
    {
        id: 12008,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan12.jpg",
        alt: "AI-generated jewelry design jan12.jpg"
    },
    {
        id: 12009,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan9.jpg",
        alt: "AI-generated jewelry design jan9.jpg"
    },
    {
        id: 12010,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan33.jpg",
        alt: "AI-generated jewelry design jan33.jpg"
    },
    {
        id: 12011,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan18.png",
        alt: "AI-generated jewelry design jan18.png"
    },
    {
        id: 12012,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan10.jpg",
        alt: "AI-generated jewelry design jan10.jpg"
    },
    {
        id: 12013,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan34.jpg",
        alt: "AI-generated jewelry design jan34.jpg"
    },
    {
        id: 12014,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan22.jpg",
        alt: "AI-generated jewelry design jan22.jpg"
    },
    {
        id: 12015,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan21.jpg",
        alt: "AI-generated jewelry design jan21.jpg"
    },
    {
        id: 12016,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan19.png",
        alt: "AI-generated jewelry design jan19.png"
    },
    {
        id: 12017,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan15.jpg",
        alt: "AI-generated jewelry design jan15.jpg"
    },
    {
        id: 12018,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan8.png",
        alt: "AI-generated jewelry design jan8.png"
    },
    {
        id: 12019,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan14.png",
        alt: "AI-generated jewelry design jan14.png"
    },
    {
        id: 12020,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan16.png",
        alt: "AI-generated jewelry design jan16.png"
    },
    {
        id: 12021,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan7.png",
        alt: "AI-generated jewelry design jan7.png"
    },
    {
        id: 12022,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan31.png",
        alt: "AI-generated jewelry design jan31.png"
    },
    {
        id: 12023,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan2.png",
        alt: "AI-generated jewelry design jan2.png"
    },
    {
        id: 12024,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan32.png",
        alt: "AI-generated jewelry design jan32.png"
    },
    {
        id: 12025,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan5.png",
        alt: "AI-generated jewelry design jan5.png"
    },
    {
        id: 12026,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan26.png",
        alt: "AI-generated jewelry design jan26.png"
    },
    {
        id: 12027,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan24.png",
        alt: "AI-generated jewelry design jan24.png"
    },
    {
        id: 12028,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan23.png",
        alt: "AI-generated jewelry design jan23.png"
    },
    {
        id: 12029,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/January/jan35.png",
        alt: "AI-generated jewelry design jan35.png"
    },
    {
        id: 12030,
        category: "photos",
        type: "image",
        selected: true,
        src: "https://ik.imagekit.io/soumya3301/January/jan25.png",
        alt: "AI-generated jewelry design jan25.png"
    }
];

// Videos (unchanged)
export const galleryItems: GalleryItem[] = [
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
        id: 1039,
        category: "videos",
        type: "video",
        src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/73fa55b85efe595a0a41ff6f69daafaf/downloads/default.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1040,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1770021120/xv-4_dj5vkx.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1041,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1770021167/jai_bh5mxr.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1042,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1770021167/jai_bh5mxr.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1043,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068573/su_vid-1_wmwjf2.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1044,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068469/hny-2_rbnzjh.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1045,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068303/earring_a6pbxa.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1046,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068332/Untitled_18_-_Copy-3_jm1tzf.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1047,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068291/cat1-1_y9tftf.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1048,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769068278/cat1_ze6vlq.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1049,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769067345/nxt_anhgti.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1050,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769066976/ice_cube_dlwenk.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    },
    {
        id: 1051,
        category: "videos",
        type: "video",
        src: "https://res.cloudinary.com/dc4ezu6y8/video/upload/v1769066981/candle_bmzy85.mp4",
        alt: "AI-generated jewelry video",
        autoplay: true
    }
];

export const videoItems = galleryItems.filter(item => item.type === "video");
export const selectedItems: GalleryItem[] = [];
