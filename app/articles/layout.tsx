import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Technical Articles & Medium Publications",
  description: "Technical articles on production AI agents, cloud reliability (SRE), cost reduction, and ServiceNow automation by Muskan Gujar.",
  openGraph: {
    title: "Technical Articles & Medium Publications | Muskan Gujar",
    description: "Engineering notes auto-synced from Medium (@muskangujar_) on AI reliability and SRE best practices.",
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
