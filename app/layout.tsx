import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GlobalUI } from "@/components/global-ui";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muskangujar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muskan Gujar | AI & SRE Engineer",
    template: "%s | Muskan Gujar",
  },
  description: "Muskan Gujar is an AI & SRE Engineer and Associate Specialist at NielsenIQ. Architecting autonomous AI agent frameworks (AgentPhased), ServiceNow automation, and high-availability cloud systems.",
  keywords: [
    "Muskan Gujar",
    "Muskan Gujar Portfolio",
    "Muskan Gujar AI",
    "Muskan Gujar NielsenIQ",
    "AI Agent Engineer",
    "SRE Engineer",
    "AgentPhased",
    "AgentID",
    "AgenTool",
    "AgentMem",
    "ServiceNow Automation",
    "Cloud Reliability",
    "Azure GCP Operations",
    "Python Rust Go",
    "Medium Technical Writer"
  ],
  authors: [{ name: "Muskan Gujar", url: "https://github.com/Muskangujar" }],
  creator: "Muskan Gujar",
  publisher: "Muskan Gujar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Muskan Gujar | AI & SRE Engineer",
    description: "Architecting autonomous AI agent frameworks (AgentPhased) and reliable, cost-efficient cloud systems at NielsenIQ.",
    siteName: "Muskan Gujar Engineering Portfolio",
    images: [
      {
        url: `${siteUrl}/portfolio_v2.png`,
        width: 1200,
        height: 630,
        alt: "Muskan Gujar - AI & SRE Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muskan Gujar | AI & SRE Engineer",
    description: "Building autonomous AI agents (AgentPhased), ServiceNow automation, and hybrid cloud reliability.",
    images: [`${siteUrl}/portfolio_v2.png`],
    creator: "@muskangujar_",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google69531f5596338672",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muskan Gujar",
    "url": siteUrl,
    "image": `${siteUrl}/portfolio_v2.png`,
    "jobTitle": "Associate Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "NielsenIQ"
    },
    "sameAs": [
      "https://github.com/Muskangujar",
      "https://linkedin.com/in/muskangujar",
      "https://medium.com/@muskangujar_"
    ],
    "knowsAbout": [
      "Autonomous AI Agents",
      "Site Reliability Engineering (SRE)",
      "ServiceNow Incident Automation",
      "Cloud Infrastructure & Cost Reduction",
      "Python",
      "Rust",
      "Go",
      "PyTorch",
      "Azure & GCP"
    ],
    "description": "AI & SRE Engineer specializing in autonomous AI agent ecosystems (AgentPhased) and enterprise cloud reliability at NielsenIQ."
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Muskan Gujar Portfolio",
    "url": siteUrl,
    "author": {
      "@type": "Person",
      "name": "Muskan Gujar"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body 
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
        <GlobalUI />
      </body>
    </html>
  );
}
