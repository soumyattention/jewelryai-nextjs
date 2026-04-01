import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://jewelryai.app'),
  title: {
    default: "Jewelry AI - AI Jewelry Photography & Video Studio | 90% Cost Reduction",
    template: "%s | Jewelry AI"
  },
  description: "Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos with AI. The best custom-trained AI for jewelry and jewellery photography. Get 10 images and 3 videos in 48 hours. 90% cheaper than traditional photography. Trusted by 500+ brands.",
  keywords: "AI jewelry photography, AI jewellery photography, AI model for jewelry, AI jewelry model, virtual model for jewelry, AI jewellery model, AI jewelry photo, AI jewelry video, AI for jewelry marketing, AI jewellery marketing, jewelry AI photoshoot, jewellery AI photoshoot, best AI for jewelry, custom trained AI jewelry, AI jewelry shopify, virtual jewelry photography, jewelry content creation, jewelry video production, jewelry advertising, e-commerce jewelry photos",
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
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/favicon.png' },
    ],
    apple: [
      { url: '/icon.png' },
    ],
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
        {/* Pinterest Domain Verification */}
        <meta name="p:domain_verify" content="50eecbf3fd525ddb641c983bf7db943c"/>
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
