import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Certifications & Credentials",
  description: "Industry certifications for Muskan Gujar from AWS Academy, Oracle Cloud AI, Udemy Machine Learning, and LinkedIn Learning.",
  openGraph: {
    title: "Certifications & Credentials | Muskan Gujar",
    description: "Official credentials in Cloud Architecture, Generative AI Foundations, and Machine Learning.",
  },
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
