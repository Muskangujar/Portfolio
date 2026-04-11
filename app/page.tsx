'use client';

import React from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Github, Linkedin, Mail, Sun, Moon, Briefcase, Award, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Marquee = () => {
  const skills = [
    "Computer Vision", "Deep Learning", "NLP", "PyTorch", "TensorFlow", 
    "OpenCV", "YOLO", "Azure", "Python", "FastAPI", "GCP", "Datadog", "Automation"
  ];
  
  return (
    <div className="relative flex overflow-x-hidden bg-foreground/[0.03] py-4 border-y border-foreground/5 sm:py-6">
      <div className="animate-marquee whitespace-nowrap flex gap-8 items-center sm:gap-16">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {skills.map((skill) => (
              <span key={`${skill}-${i}`} className="text-[10px] font-black tracking-[0.2em] text-foreground/30 uppercase flex items-center gap-8 sm:text-xs sm:gap-16">
                {skill} <span className="opacity-20 text-[6px]">■</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const EXPERIENCES = [
  {
    role: "Associate Engineer",
    company: "NielsenIQ",
    period: "2025 — Present",
    description: "Leading cloud infrastructure management and enterprise automation strategies across hybrid Azure & GCP environments. Architecting high-availability pipelines and proactive monitoring solutions.",
    tags: ["Azure", "GCP", "Automation", "Cloud Ops"]
  },
  {
    role: "Intern : Engineer, NEC Program",
    company: "NielsenIQ",
    period: "2025",
    description: "Architecting automated incident workflows and deployment validation pipelines. Pioneered proactive anomaly detection protocols that scaled production resilience.",
    tags: ["Automation", "CI/CD", "Resilience"]
  },
  {
    role: "AI Research Assistant",
    company: "BVCOE",
    period: "2024 — 2025",
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
    period: "Aug 2023 — Oct 2023",
    description: "Explored enterprise database management and data orchestration using SQL and PL/SQL for optimized querying.",
    tags: ["SQL", "PL/SQL", "Databases"]
  }
];

const FEATURED_PROJECTS = [
  {
    title: "Autonomous Driving Perception",
    description: "High-throughput, low-latency perception pipeline utilizing YOLOv8 architectures.",
    tags: ["YOLOv8", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Healthcare Chatbot (OCR)",
    description: "Multi-label symptom classification assistant integrating Tesseract OCR.",
    tags: ["NLP", "Tesseract OCR"],
    image: "/healthcare.png",
  },
  {
    title: "Music Emotion Classifier",
    description: "Hybrid CNN-LSTM architecture for real-time audio sentiment analysis.",
    tags: ["Deep Learning", "CNN-LSTM"],
    image: "/music.png",
  },
  {
    title: "Cancer Detection System",
    description: "MobileNetV2-based diagnostic system for histopathological classification.",
    tags: ["Vision", "Diagnostics"],
    image: "/cancer.png",
  },
  {
    title: "Drowsiness Intervention",
    description: "Driver safety system using dlib facial landmarks and EAR monitoring.",
    tags: ["IoT", "Surveillance"],
    image: "/drowsiness.png",
  },
  {
    title: "IoT Food Spoilage",
    description: "Multi-sensor gas detection array with cloud-based telemetry.",
    tags: ["IoT", "Edge AI"],
    image: "/food.png",
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-foreground/10 selection:text-foreground overflow-x-hidden">
      <DottedSurface className="opacity-70 sm:opacity-90" />
      
      <div className="relative z-10">
        <Marquee />

        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[90vh]">
          <div className="z-10 w-full max-w-5xl">
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-foreground/40 uppercase animate-fade-in sm:mb-6 sm:text-sm sm:tracking-[0.4em]">
              System Initialized: Multi-Disciplinary EnTC Engineer
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tighter text-foreground sm:mb-8 sm:text-8xl lg:text-9xl">
              Muskan <span className="block text-foreground/20 italic font-light sm:inline">Gujar</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-foreground/60 font-medium sm:mb-12 sm:text-xl">
              Architecting intelligent systems where AI, hardware, 
              and high-availability operations converge.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/projects" className="group flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-8 py-4 text-xs font-black text-background transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:text-sm">
                <span>EXPLORE DEPLOYMENTS</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="/resume.pdf" target="_blank" className="flex w-full items-center justify-center rounded-full border border-foreground/10 px-8 py-4 text-xs font-black text-foreground transition-all hover:bg-foreground/[0.03] backdrop-blur-sm sm:w-auto sm:px-10 sm:text-sm">
                ACCESS SYSTEM LOGS (CV)
              </a>
            </div>
          </div>
        </section>

        {/* Narrative Intro */}
        <section id="about" className="relative py-24 px-6 sm:py-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              <div>
                <h2 className="mb-4 font-mono text-xs tracking-widest text-foreground/30 uppercase sm:mb-6 sm:text-sm">The Objective</h2>
                <p className="text-2xl font-bold leading-tight text-foreground sm:text-4xl">
                  Turning experimental models into <span className="text-foreground/40 italic">production-grade</span> intelligence.
                </p>
              </div>
              <div className="space-y-4 text-base text-foreground/60 leading-relaxed sm:space-y-6 sm:text-lg">
                <p>
                  I specialize in building end-to-end perception pipelines and conversational AI that solve real-world problems. 
                  From transit safety to medical diagnostics, my work bridges the gap between raw data and actionable insight.
                </p>
                <p>
                  Currently at <span className="text-foreground font-bold underline decoration-foreground/20 underline-offset-4">NielsenIQ</span>, 
                  I manage enterprise-scale cloud operations, ensuring stability and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-24 px-6 sm:py-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-foreground/[0.01] -skew-x-12 translate-x-20 hidden sm:block" />
          
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 sm:mb-20">
                <h2 className="mb-2 font-mono text-xs tracking-widest text-foreground/30 uppercase sm:mb-4 sm:text-sm">Professional Log</h2>
                <h3 className="text-4xl font-black text-foreground sm:text-6xl">Experience</h3>
            </div>

            <div className="space-y-16 sm:space-y-32">
              {EXPERIENCES.map((exp, idx) => (
                <div key={`${exp.company}-${idx}`} className="group relative grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
                  <div className="space-y-2 sm:space-y-4">
                    <div className="text-xs font-mono tracking-widest text-foreground/40 sm:text-sm">{exp.period}</div>
                    <h4 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors sm:text-3xl">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-base font-bold text-foreground/60 sm:text-lg">
                      <span className="hidden h-px w-6 bg-foreground/20 sm:block" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-8">
                    <p className="text-base leading-relaxed text-foreground/50 font-medium sm:text-xl">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-foreground/[0.03] border border-foreground/5 text-[10px] font-bold text-foreground/40 group-hover:border-foreground/20 transition-colors sm:px-4 sm:py-1.5 sm:text-xs">
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
        <section className="relative py-24 px-6 border-t border-foreground/5 sm:py-40">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Ecosystem Leadership</span>
                <h2 className="mt-4 text-4xl font-black tracking-tighter sm:text-6xl uppercase">Strategic <br/>Impact</h2>
              </div>
              <div className="space-y-12">
                <div className="group border-b border-foreground/5 pb-10 transition-colors hover:border-foreground/20">
                   <h4 className="text-xl font-black text-foreground mb-4 uppercase sm:text-2xl">Training & Placement Coordinator</h4>
                   <p className="text-base text-foreground/50 leading-relaxed font-medium sm:text-lg">
                     Orchestrated placement drives and acted as the bridge between industry heads and the engineering cohort. Designed the visual identity and billboards for the placement team's outreach.
                   </p>
                </div>
                <div className="group">
                   <h4 className="text-xl font-black text-foreground mb-4 uppercase sm:text-2xl">Head of Test Series Committee</h4>
                   <p className="text-base text-foreground/50 leading-relaxed font-medium sm:text-lg">
                     Engineered the end-to-end infrastructure for placement test series. Responsible for designing technical exams, conducting skill-gap workshops, and managing the core evaluation pipeline.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Hub */}
        <section className="relative py-24 px-6 bg-foreground/[0.02] sm:py-40">
          <div className="mx-auto max-w-6xl">
             <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
               <Link href="/projects" className="group relative p-8 rounded-[2rem] border border-foreground/5 bg-background transition-all hover:border-foreground/20 hover:scale-[1.01] sm:p-12 sm:rounded-[3.5rem]">
                  <div className="mb-6 flex items-center justify-between sm:mb-8">
                     <h3 className="text-2xl font-black text-foreground sm:text-4xl">Projects</h3>
                     <div className="p-3 rounded-2xl bg-foreground text-background transition-transform group-hover:rotate-45 sm:p-4 sm:rounded-3xl">
                        <ArrowRight size={20} className="sm:size-6" />
                     </div>
                  </div>
                  <p className="text-base text-foreground/40 font-medium leading-relaxed mb-6 sm:text-xl sm:mb-8">
                     Deep dive into technical architectures for Computer Vision and NLP.
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {FEATURED_PROJECTS.map(p => (
                        <div key={p.title} className="aspect-video relative rounded-xl overflow-hidden group/img sm:rounded-3xl">
                           <div className="absolute inset-0 bg-foreground/20 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                           <img src={p.image} className="h-full w-full object-cover grayscale brightness-75 transition-all duration-700 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-110" alt="" />
                        </div>
                      ))}
                  </div>
               </Link>

               <Link href="/certifications" className="group relative p-8 rounded-[2rem] border border-foreground/5 bg-background transition-all hover:border-foreground/20 hover:scale-[1.01] sm:p-12 sm:rounded-[3.5rem]">
                  <div className="mb-6 flex items-center justify-between sm:mb-8">
                     <h3 className="text-2xl font-black text-foreground sm:text-4xl">Certificates</h3>
                     <div className="p-3 rounded-2xl bg-foreground text-background transition-transform group-hover:rotate-45 sm:p-4 sm:rounded-3xl">
                        <ArrowRight size={20} className="sm:size-6" />
                     </div>
                  </div>
                  <p className="text-base text-foreground/40 font-medium leading-relaxed mb-6 sm:text-xl sm:mb-8">
                     Industry validations from AWS, Oracle, and leading AI labs.
                </p>
                <div className="grid gap-2 sm:gap-4">
                   {['Machine Learning A-Z', 'Oracle AI Foundations', 'AWS Cloud Foundations', 'IoT Cert (Dolphins Lab)'].map(c => (
                     <div key={c} className="flex items-center gap-2 p-3 rounded-xl bg-foreground/[0.02] border border-foreground/5 transition-colors group-hover:bg-foreground/[0.05] sm:gap-3 sm:p-4 sm:rounded-2xl">
                        <Award size={16} className="text-foreground/20 sm:size-20" />
                        <span className="text-[10px] font-bold text-foreground/60 sm:text-sm">{c}</span>
                     </div>
                   ))}
                </div>
             </Link>
           </div>
        </div>
      </section>

        {/* Upcoming Section */}
        <section className="py-24 relative overflow-hidden sm:py-40">
          <div className="absolute inset-0 bg-foreground/[0.03] -skew-y-3 origin-right transform-gpu" />
          <div className="mx-auto max-w-6xl relative z-10 px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 sm:text-xs">Technical Roadmap</span>
                <h2 className="mt-4 text-4xl font-black tracking-tighter sm:text-7xl uppercase">Beyond the <br/>Horizon</h2>
                <p className="mt-8 text-lg font-medium text-foreground/50 leading-relaxed sm:text-2xl">
                  The current deployments are only the foundation. My technical roadmap includes upcoming research in Transformer-based edge perception, distributed neural architectures, and self-evolving automation scripts. 
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                   <div className="h-12 w-[1.5px] bg-foreground/10" />
                   <div className="text-sm font-black text-foreground/20 italic tracking-[0.2em] sm:text-base">
                     12+ PROJECTS IN QUEUE
                   </div>
                </div>
                <div className="flex flex-wrap gap-2">
                   {["Edge Transformers", "Auto-Bots", "Distributed NN"].map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-lg bg-foreground/5 border border-foreground/5 text-[10px] font-bold text-foreground/40 sm:text-xs">
                        {tag}
                     </span>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Contact / Footer */}
      <section id="contact" className="relative py-24 px-6 sm:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-black text-foreground sm:mb-8 sm:text-6xl">Establish Connection</h2>
          <p className="mb-10 text-base text-foreground/40 leading-relaxed font-medium sm:mb-16 sm:text-xl">
            Open for technical collaboration or research opportunities.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
            {[
              { IconComp: Mail, label: "Email", href: "mailto:muskangujar220104@gmail.com" },
              { IconComp: Github, label: "GitHub", href: "https://github.com/Muskangujar" },
              { IconComp: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/muskangujar" }
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-2 sm:gap-4">
                <div className="p-4 rounded-[1.5rem] border border-foreground/5 bg-foreground/[0.02] text-foreground/40 group-hover:text-foreground group-hover:bg-foreground group-hover:text-background transition-all sm:p-6 sm:rounded-[2rem]">
                  <link.IconComp size={24} className="sm:size-28" />
                </div>
                <span className="font-black text-[10px] tracking-[0.2em] text-foreground/30 uppercase sm:text-xs">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative border-t border-foreground/5 py-12 text-center sm:py-16">
        <div className="font-mono text-[8px] tracking-[0.4em] text-foreground/20 uppercase mb-2 sm:text-[10px] sm:tracking-[0.5em] sm:mb-4">
          Muskan Gujar ● Applied Intelligence Lab ● 2026
        </div>
      </footer>
      </div>
    </main>
  );
}
