import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects & Engineering Systems",
  description: "Explore Muskan Gujar's engineering projects in autonomous AI agents (AgentPhased), computer vision, financial ML, and hardware integration.",
  openGraph: {
    title: "Projects & Engineering Systems | Muskan Gujar",
    description: "Detailed technical architectures for AI agents, computer vision pipelines, and SRE infrastructure.",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
