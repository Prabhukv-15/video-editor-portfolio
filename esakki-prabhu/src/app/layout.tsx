import type { Metadata, Viewport } from "next";
import { Geist, IBM_Plex_Mono, Instrument_Serif, Noto_Sans_Tamil } from "next/font/google";
import { featuredProject, site } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const tamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["400", "500"],
});

const title = `${site.name} — ${site.role}`;
const description = `${featuredProject.logline} ${site.summary} Based in ${site.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "video editor",
    "colorist",
    "DaVinci Resolve",
    "Tamil Nadu",
    "nature film",
    "Our Earth",
    site.name,
  ],
  authors: [{ name: site.name, url: getSiteUrl() }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: "#070706",
  colorScheme: "dark",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    knowsAbout: [...site.tools, "Video editing", "Color grading", "Nature film"],
    url: getSiteUrl(),
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: featuredProject.title,
    description: featuredProject.logline ?? featuredProject.blurb,
    thumbnailUrl: `${getSiteUrl()}${featuredProject.poster}`,
    contentUrl: `${getSiteUrl()}${featuredProject.videoSrc}`,
    duration: "PT3M24S",
    creator: {
      "@type": "Person",
      name: site.name,
    },
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrument.variable} ${plex.variable} ${tamil.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
