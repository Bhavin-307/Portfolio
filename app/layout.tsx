import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import { Analytics } from '@vercel/analytics/next';

const space_Grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

interface ExtendedMetadata extends Metadata {
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    card: string;
    site: string;
  };
}

export const metadata: ExtendedMetadata = {
  title: "Bhavin Portfolio Official",
  description:
    "Welcome to my portfolio – showcasing dynamic web development with React and Next.js.",
  keywords:
    "Portfoliio, Bhavin Official Porfolio, Next.js, React, Web Development, Frontend Development",
  openGraph: {
    title: "Bhavin Official Portfolio",
    description:
      "Welcome to my portfolio – showcasing dynamic web development with React and Next.js.",
    url: "https://portfolio-owe6jiw2o-bhavins-projects-8fb46fc8.vercel.app/",
    type: "website",
    images: [
      {
        url: "/globe.svg",
        width: 800,
        height: 600,
        alt: "Globe Illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bhavin_sali307",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href="https://portfolio-owe6jiw2o-bhavins-projects-8fb46fc8.vercel.app/" />
        <meta
          property="og:title"
          content={
            metadata.openGraph?.title?.toString() ?? "Bhavin Portfolio Official"
          }
        />
        <meta
          property="og:description"
          content={
            metadata.openGraph?.description?.toString() ??
            "Welcome to my portfolio – showcasing dynamic web development with React and Next.js."
          }
        />
        <meta property="og:type" content={metadata.openGraph?.type} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta
          property="og:image"
          content={metadata.openGraph?.images?.[0].url}
        />
        <meta property="og:site_name" content="Bhavin Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content={metadata.twitter?.card} />
        <meta property="twitter:site" content={metadata.twitter?.site} />
        <meta name="twitter:title" content={metadata.openGraph?.title} />
        <meta
          name="twitter:description"
          content={metadata.openGraph?.description}
        />
        <meta
          name="twitter:image"
          content={metadata.openGraph?.images?.[0].url}
        />

        {/* Favicon and Apple Touch Button */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect for Faster Font Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-slate-100 dark:bg-[#020617] min-h-screen bg-[linear-gradient(to_right,#80808011_1px,transparent_1px),linear-gradient(to_bottom,#80808011_1px,transparent_1px)] bg-[size:14px_24px] text-gray-800 dark:text-gray-200">
            {/* HEADER */}
            <Navbar />
            {/* MAIN */}
            {children}
            {/* FOOTER */}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
