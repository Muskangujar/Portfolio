'use client';

import React from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowLeft, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const CERTIFICATIONS = [
  {
    name: "Machine Learning A-Z: AI, Python & R",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-0b68ae37-e73c-4e6f-ab9b-bd67d60e8b90/",
    color: "bg-blue-500/10 text-blue-500",
    description: "Comprehensive mastery of supervised and unsupervised learning algorithms and deep learning neural nets."
  },
  {
    name: "Oracle Cloud Infrastructure 2025 AI Foundations",
    issuer: "Oracle",
    date: "2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=20187B393E1F862921ECA8E5B850841C0210A3C10BA0764FAC72C0A6A6DE93F4",
    color: "bg-orange-500/10 text-orange-500",
    description: "Validation of foundational knowledge in Generative AI architectures and LLM fine-tuning."
  },
  {
    name: "Machine Learning with Python: Foundations",
    issuer: "LinkedIn Learning",
    date: "2025",
    link: "https://www.linkedin.com/learning/certificates/440c38e83429812e86067460f599a4b936c232fcbbebd7bee1e88e14e9970fda?trk=share_certificate",
    color: "bg-blue-600/10 text-blue-600",
    description: "Core competence in regression analysis and classification vectors using Scikit-learn."
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024",
    link: "https://www.credly.com/go/iNIPQ72V",
    color: "bg-yellow-500/10 text-yellow-500",
    description: "Certified proficiency in AWS cloud architecture and managed ML service deployment."
  },
  {
    name: "Fundamentals of Robotics",
    issuer: "Kodacy",
    date: "2023",
    link: "https://kodacy.com/kodacy-certificate?cert_hash=30a9f2075f633ef9",
    color: "bg-red-500/10 text-red-500",
    description: "Verification of foundational competencies in robotic kinematics and control systems."
  }
];

export default function CertificationsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/other.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/75" />
      </div>

      <DottedSurface className="opacity-40 sm:opacity-60" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-8 sm:py-14">
        <Link href="/" className="group mb-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-400 hover:text-white transition-colors uppercase sm:mb-12 sm:text-xs">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <header className="mb-12 sm:mb-24">
          <div className="flex items-center gap-3 mb-4 sm:gap-4">
             <ShieldCheck className="text-white/60 size-6 sm:size-8" />
             <h1 className="text-[10px] font-mono tracking-[0.3em] text-zinc-400 uppercase sm:text-xs sm:tracking-[0.4em]">Verified Credentials</h1>
          </div>
          <h2 className="mb-4 text-4xl font-black tracking-tighter text-white sm:text-8xl">
            Authenticated <span className="text-white/30 italic font-light block sm:inline">Expertise</span>
          </h2>
          <p className="max-w-2xl text-base text-zinc-300 leading-relaxed font-medium sm:text-xl">
            Industry-standard validations across cloud computing and neural architectures.
          </p>
        </header>

        <div className="space-y-4 sm:space-y-8">
          {CERTIFICATIONS.map((cert) => (
            <a 
              key={cert.name} 
              href={cert.link} 
              target="_blank" 
              className="group block relative p-6 rounded-[2rem] border border-white/10 bg-zinc-950/75 backdrop-blur-xl transition-all hover:bg-zinc-900/80 hover:border-white/30 sm:p-12 sm:rounded-[3.5rem]"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex p-3 rounded-xl sm:p-4 sm:rounded-2xl bg-white/10 text-white border border-white/15">
                    <Award size={20} className="sm:size-6" />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-xl font-black tracking-tight text-white group-hover:text-white transition-colors sm:text-3xl">{cert.name}</h3>
                    <p className="text-sm font-bold text-zinc-400 sm:text-lg">{cert.issuer} • {cert.date}</p>
                  </div>
                  <p className="text-base leading-relaxed text-zinc-300 font-medium max-w-2xl sm:text-xl">
                    {cert.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 font-black text-[10px] tracking-widest uppercase text-zinc-400 group-hover:text-white transition-colors sm:text-xs">
                  Validate <ExternalLink size={14} className="sm:size-16" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="relative border-t border-white/10 py-12 text-center sm:py-16">
        <a 
          href="mailto:muskangujar220104@gmail.com"
          className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 uppercase hover:text-white hover:underline transition-colors sm:text-xs"
        >
          Muskan Gujar • Associate Specialist • Drop a DM / Email Directly (muskangujar220104@gmail.com)
        </a>
      </footer>
    </main>
  );
}
