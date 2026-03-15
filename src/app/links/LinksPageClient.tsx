"use client";

import { motion } from "framer-motion";
import {
  VerticalImageStack,
  type PortfolioItem,
} from "@/components/ui/vertical-image-stack";
import { Sparkles } from "lucide-react";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1771597438/ck-1_ysnohh.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1771597438/ck-1_ysnohh.mp4",
    alt: "Charles Krypell Signature Basket Weave bracelet",
    href: "https://www.instagram.com/reel/DVBaxDXjh3h/",
    client: "charleskrypellstore",
    jewelerName: "Charles Krypell Jewelry",
    caption: "A true icon in 18K yellow gold, hand-set with diamonds, sapphires, and emeralds.",
    followersCount: "145K",
  },
  {
    id: 2,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1769068573/su_vid-1_wmwjf2.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1769068573/su_vid-1_wmwjf2.mp4",
    alt: "Elgrissy Diamonds Wedding Jewelry",
    href: "https://www.instagram.com/reels/DSVnftwDilB/",
    client: "elgrissydiamonds",
    jewelerName: "Elgrissy Diamonds",
    caption: "Make your wedding day truly unforgettable with Elgrissy Diamonds!",
    followersCount: "8.2K",
  },
  {
    id: 3,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773561965/ck-2_ae9bmm.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773561965/ck-2_ae9bmm.mp4",
    alt: "Charles Krypell Frame Ring",
    href: "https://www.instagram.com/reel/DVrPnYcCUZv/",
    client: "charleskrypellstore",
    jewelerName: "Charles Krypell Jewelry",
    caption: "Emerald-cut diamond dramatically framed by hand-cut, channel-set baguettes.",
    followersCount: "145K",
  },
  {
    id: 4,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773567445/usda_lglsby.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773567445/usda_lglsby.mp4",
    alt: "House of Diamonds Solitaire Bracelet",
    href: "https://www.instagram.com/reel/DV1GzzGgiBl/",
    client: "houseofdiamonds_dxb",
    jewelerName: "House of Diamonds",
    caption: "14.09 carats of natural diamonds. Don't miss out on seeing this sparkle!",
    followersCount: "26K",
  },
  {
    id: 5,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773567511/o11_rdrogx.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773567511/o11_rdrogx.mp4",
    alt: "Louiza Jewellery D-Color Diamond Pendant",
    href: "https://www.instagram.com/reel/DVQQj8hjD9h/",
    client: "louizajewellery",
    jewelerName: "Louiza Jewellery",
    caption: "Dripping in quiet power. A 3.5 carat D-color diamond pendant set in sleek carbon fiber.",
    followersCount: "16K",
  },
  {
    id: 6,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1771597581/cube_n11q00.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1771597581/cube_n11q00.mp4",
    alt: "Hidden Space Aurel Ring",
    href: "https://www.instagram.com/p/DU69KSnD8CK/",
    client: "hiddenspacejewelry",
    jewelerName: "Hidden Space Jewelry",
    caption: "A pear sapphire cut in deliberate angles, more structure than sentiment.",
    followersCount: "143K",
  },
  {
    id: 7,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1771597570/rachel_vid_1_eruazc.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1771597570/rachel_vid_1_eruazc.mp4",
    alt: "The Honest Jeweler Spinner Ring",
    href: "https://www.instagram.com/reel/DVPtFLZkhzg/",
    client: "thehonestjeweler",
    jewelerName: "The Honest Jeweler",
    caption: "When life feels uncertain… what you carry matters.",
    followersCount: "18K",
  },
  {
    id: 8,
    thumbnail: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773567559/earring_3_fkkxhm.jpg",
    videoUrl: "https://res.cloudinary.com/dc4ezu6y8/video/upload/f_auto,q_auto/v1773567559/earring_3_fkkxhm.mp4",
    alt: "House of Diamonds Earrings",
    href: "https://www.instagram.com/reel/DTacUY0k9Ny/",
    client: "houseofdiamonds_dxb",
    jewelerName: "House of Diamonds",
    caption: "For your next occasion 💫 Natural Diamonds 7.81 carats of pear & marquise-cut diamond elegance ✨",
    followersCount: "26K",
  },
];


export default function LinksPageClient() {
  return (
    <main className="min-h-screen w-full select-none bg-black text-white overflow-hidden">
      {/* Header Section */}
      <motion.section
        className="relative z-10 flex flex-col items-center justify-center pt-16 pb-4 px-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          Curated Portfolio
        </h1>
        <p className="mt-3 max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed mx-auto">
          A curated list of instagram reels made with JewelryAI
        </p>

        {/* Subtle divider */}
        <div className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>

      {/* Vertical Image Stack */}
      <VerticalImageStack items={portfolioItems} />
    </main>
  );
}
