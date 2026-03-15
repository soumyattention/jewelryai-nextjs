import { Metadata } from "next";
import LinksPageClient from "./LinksPageClient";

export const metadata: Metadata = {
  title: "Curated Portfolio | Jewelry AI",
  description:
    "A curated list of work posted on our client pages — reels, campaigns, and creative content by Jewelry AI.",
};

export default function LinksPage() {
  return <LinksPageClient />;
}
