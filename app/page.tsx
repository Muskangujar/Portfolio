'use client';

import React, { useEffect, useState } from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Github, Linkedin, Mail, Award, ArrowRight, BookOpen, FileText, Code2 } from 'lucide-react';
import Link from 'next/link';
import { fetchMediumArticles, MediumArticle, FALLBACK_ARTICLES } from '@/lib/medium';
import { ProjectsBooklet } from '@/components/projects-booklet';



const EXPERIENCES = [
  {
    role: "Associate Specialist",
    company: "NielsenIQ",
    period: "2025 - Present",
    description: "Co-Application Owner: onboarding applications from scratch and maintaining them for 100% availability and reliability. Working with the AI & automation team to streamline enterprise operations across hybrid Azure & GCP environments.",
    tags: ["App Ownership", "100% Availability", "Azure", "GCP", "Automation", "SRE Ops"]
  },
  {
    role: "Intern : Engineer, NEC Program",
    company: "NielsenIQ",
    period: "2025",
    description: "Supported incident workflows and deployment validation pipelines. Pioneered proactive monitoring protocols that scaled production resilience.",
    tags: ["Monitoring", "CI/CD", "Resilience"]
  },
  {
    role: "AI Research Assistant",
    company: "BVCOE",
    period: "2024 - 2025",
    description: "Collaborated directly with a PhD candidate on advanced neural architecture research. Optimized hybrid deep learning models through hyperparameter tuning and refinements.",
    tags: ["Model Tuning", "ResNet", "Hybrid DL", "Research"]
  },
  {
    role: "Engineering Intern",
    company: "Primetals Technologies",
    period: "Jan 2024",
    description: "Gained industrial exposure to PLC and HMI systems. Developed foundational understanding of industrial automation workflows and hardware-software integration.",
    tags: ["PLC", "HMI", "Automation"]
  },
  {
    role: "Finalist",
    company: "BOROSA (Bosch Road Safety) Hackathon",
    period: "2024",
    description: "Designed an intelligent vehicle safety and awareness system. Engineered hardware modules combining proximity sensors, object detection, and collision alerts to enhance road safety through real-time physical telemetry.",
    tags: ["Hardware", "Sensors", "Vehicle Safety", "Embedded Systems"]
  },
  {
    role: "Graduate Apprentice",
    company: "Zensar Technologies",
    period: "Aug 2023 - Oct 2023",
    description: "Expanded foundational software engineering skills, focusing on Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA). Gained practical experience with Java, Python, and enterprise databases (SQL/PLSQL) while heavily emphasizing professional soft skills.",
    tags: ["Java", "Python", "DSA & OOP", "SQL"]
  }
];

export default function Home() {
  const [latestArticle, setLatestArticle] = useState<MediumArticle>(FALLBACK_ARTICLES[0]);

  useEffect(() => {
    async function loadLatestArticle() {
      try {
        const articles = await fetchMediumArticles('muskangujar_');
        if (articles && articles.length > 0) {
          setLatestArticle(articles[0]);
        }
      } catch (e) {
        console.error("Error loading latest Medium article:", e);
      }
    }
    loadLatestArticle();
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
      <DottedSurface className="opacity-40 sm:opacity-60" />
      
      <div className="relative z-10">

        {/* Hero Section / First Page */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
          {/* Background Video - Fully covering 100% */}
          <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full min-h-full min-w-full object-cover object-center scale-105"
            >
              <source src="/portfolio.mp4" type="video/mp4" />
            </video>
            {/* Crisp light overlay to maintain video sharpness */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/60" />
          </div>

          <div className="relative z-10 w-full max-w-5xl">
            <h1 className="mb-6 text-5xl font-black tracking-tighter text-white sm:mb-8 sm:text-8xl lg:text-9xl">
              Muskan <span className="block text-white/30 italic font-light sm:inline">Gujar</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-zinc-200 font-medium sm:mb-12 sm:text-xl">
              An engineer with expertise in AI: I code, play with math, and maintain high-availability systems. Associate Specialist at <strong className="text-white">NielsenIQ</strong> working with the automation team.
            </p>

            {/* Establish Connection / Interactive Contact Links directly on First Page */}
            <div className="mt-8 flex flex-col items-center justify-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-4 text-xs font-bold text-white transition-all hover:bg-white/10 backdrop-blur-md sm:px-8 sm:text-sm"
                >
                  <Code2 size={15} />
                  <span>EXPLORE PROJECTS</span>
                </Link>
                
                <Link
                  href="/articles"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-4 text-xs font-bold text-white transition-all hover:bg-white/10 backdrop-blur-md sm:px-8 sm:text-sm"
                >
                  <BookOpen size={15} />
                  <span>EXPLORE ARTICLES</span>
                </Link>

                <a
                  href="/Muskan%20Gujar.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-4 text-xs font-bold text-white transition-all hover:bg-white/10 backdrop-blur-md sm:px-8 sm:text-sm"
                >
                  <FileText size={15} />
                  <span>Resume (PDF)</span>
                </a>
              </div>

              {/* Direct Social & Contact Strip */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap justify-center gap-6 text-xs font-mono font-bold text-zinc-400">
                <a
                  href="mailto:muskangujar220104@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/Muskangujar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/muskangujar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://medium.com/@muskangujar_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <BookOpen size={15} />
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of page with other.mp4 background */}
        <div className="relative overflow-hidden w-full">
          <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full min-h-full min-w-full object-cover sticky top-0"
              style={{ minHeight: '100vh' }}
            >
              <source src="/other.mp4" type="video/mp4" />
            </video>
            {/* Crisp clear overlay without washing out video */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />
          </div>
          <div className="relative z-10">

        {/* Narrative Intro */}
        <section id="about" className="relative py-12 px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-start">
              <div>
                <h2 className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase sm:mb-4 sm:text-sm">The Objective</h2>
                <p className="text-2xl font-bold leading-tight text-white sm:text-4xl">
                  Turning experimental models into <span className="text-white/40 italic">production-grade</span> intelligence.
                </p>
              </div>
              <div className="space-y-3 text-base text-zinc-300 leading-relaxed sm:space-y-4 sm:text-lg">
                <p>
                  I specialize in building end-to-end perception pipelines, autonomous AI agents (AgentPhased), and enterprise automation workflows. 
                </p>
                <p>
                  At <span className="text-white font-bold underline decoration-white/30 underline-offset-4">NielsenIQ</span>, as an Associate Specialist, I onboard applications from scratch and ensure 100% availability, while collaborating with the automation team to streamline enterprise operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-12 px-6 sm:py-20 overflow-hidden border-t border-white/10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 sm:mb-12">
                <h2 className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase sm:text-sm">Professional Log</h2>
                <h3 className="text-3xl font-black text-white sm:text-5xl">Experience</h3>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={`${exp.company}-${idx}`} className="group relative grid gap-4 md:grid-cols-[1fr_2.2fr] md:gap-8 pb-8 border-b border-white/5 last:border-b-0 last:pb-0">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xs font-mono tracking-widest text-zinc-400">{exp.period}</div>
                    <h4 className="text-xl font-black text-white group-hover:text-white transition-colors sm:text-2xl">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-400 sm:text-base">
                      <span className="hidden h-px w-4 bg-white/20 sm:block" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-zinc-300 font-medium sm:text-base">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-bold text-zinc-300 group-hover:border-white/30 transition-colors sm:text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Impact Section */}
        <section className="relative py-12 px-6 border-t border-white/10 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ecosystem Leadership</span>
                <h2 className="mt-2 text-3xl font-black tracking-tighter text-white sm:text-5xl uppercase">Strategic <br/>Impact</h2>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="group border-b border-white/10 pb-6 transition-colors hover:border-white/30">
                   <h4 className="text-lg font-black text-white mb-2 uppercase sm:text-xl">Co-Application Owner</h4>
                   <p className="text-sm text-zinc-300 leading-relaxed font-medium sm:text-base">
                     Onboarding applications from scratch and maintaining them for 100% availability and reliability. Partnering with enterprise support and cloud infrastructure teams to manage incident workflows and system stability.
                   </p>
                </div>
                <div className="group border-b border-white/10 pb-6 transition-colors hover:border-white/30">
                   <h4 className="text-lg font-black text-white mb-2 uppercase sm:text-xl">Training & Placement Coordinator</h4>
                   <p className="text-sm text-zinc-300 leading-relaxed font-medium sm:text-base">
                     Orchestrated placement drives and acted as the bridge between industry heads and the engineering cohort. Designed the visual identity and billboards for the placement team's outreach.
                   </p>
                </div>
                <div className="group">
                   <h4 className="text-lg font-black text-white mb-2 uppercase sm:text-xl">Head of Test Series Committee</h4>
                   <p className="text-sm text-zinc-300 leading-relaxed font-medium sm:text-base">
                     Engineered the end-to-end infrastructure for placement test series. Responsible for designing technical exams, conducting skill-gap workshops, and managing the core evaluation pipeline.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Hub & Projects Booklet */}
        <section className="relative py-12 px-6 sm:py-20 border-t border-white/10">
          <div className="mx-auto max-w-6xl space-y-12 sm:space-y-16">
            {/* Interactive Projects Booklet */}
            <ProjectsBooklet />

            {/* Certificates & Articles Links */}
            <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
              <Link href="/certifications" className="group relative p-6 rounded-[2rem] border border-white/10 bg-zinc-950/70 backdrop-blur-xl transition-all hover:border-white/30 hover:scale-[1.01] sm:p-8 sm:rounded-[2.5rem]">
                <div className="mb-4 flex items-center justify-between sm:mb-6">
                  <h3 className="text-2xl font-black text-white sm:text-3xl">Certificates</h3>
                  <div className="p-3 rounded-2xl bg-white text-black transition-transform group-hover:rotate-45 sm:p-3.5">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed mb-4 sm:text-base sm:mb-6">
                  Industry validations from AWS, Oracle, and leading AI labs.
                </p>
                <div className="grid gap-2 sm:gap-3">
                  {['Machine Learning A-Z', 'Oracle AI Foundations', 'AWS Cloud Foundations', 'IoT Cert (Dolphins Lab)'].map(c => (
                    <div key={c} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 transition-colors group-hover:bg-white/[0.08] sm:gap-3 sm:p-3.5">
                      <Award size={16} className="text-zinc-400" />
                      <span className="text-xs font-bold text-zinc-200 sm:text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </Link>

              <Link href="/articles" className="group relative p-6 rounded-[2rem] border border-white/10 bg-zinc-950/70 backdrop-blur-xl transition-all hover:border-white/30 hover:scale-[1.01] sm:p-8 sm:rounded-[2.5rem]">
                <div className="mb-4 flex items-center justify-between sm:mb-6">
                  <h3 className="text-2xl font-black text-white sm:text-3xl">Articles</h3>
                  <div className="p-3 rounded-2xl bg-white text-black transition-transform group-hover:rotate-45 sm:p-3.5">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed mb-4 sm:text-base sm:mb-6">
                  Engineering notes on production AI, SRE reliability, and cloud cost optimization.
                </p>
                <div className="grid gap-2 sm:gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 transition-colors group-hover:bg-white/[0.08]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <BookOpen size={13} className="text-zinc-400" />
                      <span className="text-[10px] font-black tracking-[0.15em] text-zinc-400 uppercase">Featured on Medium</span>
                    </div>
                    <span className="text-xs font-bold text-zinc-200 leading-relaxed sm:text-sm">{latestArticle.title}</span>
                  </div>
                  {['Cloud Cost Architectures for SRE', 'AgentPhased: Modular Agent Runtimes'].map(a => (
                    <div key={a} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 transition-colors group-hover:bg-white/[0.08] sm:gap-3 sm:p-3.5">
                      <BookOpen size={16} className="text-zinc-400" />
                      <span className="text-xs font-bold text-zinc-200 sm:text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/10 py-8 text-center sm:py-12">
          <a 
            href="mailto:muskangujar220104@gmail.com"
            className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 uppercase hover:text-white hover:underline transition-colors sm:text-xs"
          >
            Muskan Gujar • Associate Specialist • Drop a DM / Email Directly (muskangujar220104@gmail.com)
          </a>
        </footer>
          </div> {/* End z-10 content wrapper */}
        </div> {/* End other.mp4 background wrapper */}
      </div>
    </main>
  );
}
