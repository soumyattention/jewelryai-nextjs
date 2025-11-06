import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://jewelryai.app'),
  title: {
    default: "Jewelry AI - AI Jewelry Photography & Video Studio | 90% Cost Reduction",
    template: "%s | Jewelry AI"
  },
  description: "Transform your jewelry photos into stunning professional shots with AI. Get 10 images and 3 videos in 24 hours. 90% cheaper than traditional photography.",
  keywords: "AI jewelry photography, jewelry video production, product photography, jewelry marketing, AI photo studio, jewelry advertising, e-commerce jewelry",
  authors: [{ name: "Jewelry AI" }],
  creator: "Jewelry AI",
  publisher: "Jewelry AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jewelryai.app',
    siteName: 'Jewelry AI',
    images: [
      {
        url: 'https://jewelryai.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jewelry AI - AI-Powered Jewelry Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jewelryai',
    creator: '@jewelryai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // User needs to add this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints - Preconnect to external domains */}
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//customer-ceouac30q8dlws1c.cloudflarestream.com" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XJGBLKR2TN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XJGBLKR2TN', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
