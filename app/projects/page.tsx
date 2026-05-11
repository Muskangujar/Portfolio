'use client';

import React, { useEffect, useState } from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowLeft, Github, ExternalLink, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { fetchUserRepos } from '@/lib/github';

const FEATURED_PROJECTS = [
  {
    title: "AgentID",
    description: "A production-grade memory layer for AI agents designed to enable long-term context, personalization, and stateful behavior through a structured SDK.",
    tags: ["LLMs", "Memory SDK", "Stateful AI"],
    image: "/agentid.png",
    githubUrl: "https://github.com/Muskangujar/AgentID",
  },
  {
    title: "AgentMem",
    description: "Multi-modal memory system for AI agents featuring a high-performance Rust core. Designed for long-term context retention and robust storage retrieval.",
    tags: ["Rust", "Python", "Vector DB"],
    image: "/agentmem.png",
    githubUrl: "https://github.com/Muskangujar/AgentMem",
    status: "In-Progress"
  },
  {
    title: "Quant Regime Analysis",
    description: "Advanced financial research pipeline utilizing Reinforcement Learning for market regime detection, alpha research, and portfolio optimization.",
    tags: ["Quant", "RL", "Financial ML"],
    image: "/quant.png",
    githubUrl: "https://github.com/Muskangujar/regime-lab",
    status: "In-Progress"
  },
  {
    title: "Autonomous Driving Perception",
    description: "Real-time perception pipeline for edge devices. Integrates classical OpenCV lane detection with YOLOv8-nano for multi-class object detection on CPU-only hardware.",
    tags: ["YOLOv8", "OpenCV", "Edge AI"],
    image: "/driving.png",
    githubUrl: "https://github.com/Muskangujar/autonomous-driving-perception",
  },
  {
    title: "Healthcare Chatbot",
    description: "AI-driven medical assistant utilizing Tesseract-based OCR for document digitization and modular ML models for automated symptom analysis and diagnosis support.",
    tags: ["OCR", "ML", "Healthcare AI"],
    image: "/healthcare_v2.png",
    githubUrl: "https://github.com/Muskangujar/healthcare-chatbot",
  },
  {
    title: "Music Emotion Classification",
    description: "Hybrid CNN-LSTM deep learning architecture for classifying audio into mood categories. Extracts MFCC and spectral features to map audio to the Russell Emotion Model.",
    tags: ["CNN-LSTM", "MFCC", "Audio DSP"],
    image: "/music_v2.png",
    githubUrl: "https://github.com/Muskangujar/Music_Classification",
  },
  {
    title: "Bank Simulation & AI",
    description: "Sophisticated ATM simulator with an interactive Streamlit UI and integrated AI assistant for real-time transaction processing and guidance.",
    tags: ["Streamlit", "Python", "AI Concierge"],
    image: "/bank_v2.png",
    githubUrl: "https://github.com/Muskangujar/Bank-Simulation",
  },
  {
    title: "Hotel Management System",
    description: "Comprehensive web-based platform for managing hotel operations, room availability, and customer workflows using Flask and MySQL.",
    tags: ["Python", "Flask", "MySQL"],
    image: "/hotel_v2.png",
    githubUrl: "https://github.com/Muskangujar/Hotel_Management_system",
  },
  {
    title: "Cervical Cancer Detection",
    description: "Deep learning screening system using MobileNetV2 Transfer Learning to classify Pap smear cell images into distinct diagnostic categories with high precision.",
    tags: ["MobileNetV2", "Medical Imaging", "Transfer Learning"],
    image: "/cancer_v2.png",
    githubUrl: "https://github.com/Muskangujar/CervicalCancer_Detection",
  },
  {
    title: "Drowsiness Detection",
    description: "Safety-critical CV system calculating Eye Aspect Ratio (EAR) to monitor driver fatigue. Integrates real-time webcam processing with Arduino-based physical alert systems.",
    tags: ["CV", "EAR", "Arduino", "IoT"],
    image: "/drowsiness_v2.png",
    githubUrl: "https://github.com/Muskangujar/Drowsiness-Detection",
  },
  {
    title: "Food Spoilage Detection",
    description: "IoT monitoring system utilizing MQ-series gas sensors and DHT11 sensors for real-time food quality assessment and automated safety alerting.",
    tags: ["IoT", "Gas Sensors", "Arduino"],
    image: "/food_v2.png",
    githubUrl: "https://github.com/Muskangujar/Food-Spoilage-Detection",
  }
];

export default function ProjectsPage() {
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const loadRepos = async () => {
      const repos = await fetchUserRepos('Muskangujar');
      
      const normalize = (s: string) => s.toLowerCase().replace(/[-_]/g, '').trim();

      const filteredRepos = repos.filter(repo => {
        const repoName = normalize(repo.name);
        // Explicitly remove "what coding", "Python-Mini-Projects", or "Portfolio"
        if (
          repoName.includes('whatcoding') || 
          repoName.includes('pythonminiprojects') ||
          repoName.includes('portfolio')
        ) return false;

        // Prevent duplicates with featured projects
        return !FEATURED_PROJECTS.some(fp => {
          const featuredTitle = normalize(fp.title);
          const featuredUrl = normalize(fp.githubUrl.split('/').pop() || "");
          return featuredTitle.includes(repoName) || featuredUrl.includes(repoName) || repoName.includes(featuredTitle);
        });
      }).map(repo => ({
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || "Experimental repository and codebase.",
        tags: [repo.language, ...(repo.topics || [])].filter(Boolean) as string[],
        image: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200`,
        githubUrl: repo.html_url,
        isDynamic: true
      }));

      setGithubProjects(filteredRepos);
      setLoading(false);
    };

    loadRepos();
  }, []);

  const allProjects = isMounted ? [...FEATURED_PROJECTS, ...githubProjects] : FEATURED_PROJECTS;

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <DottedSurface className="opacity-60 sm:opacity-80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 sm:py-24">
        <Link href="/" className="group mb-8 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-foreground/40 hover:text-foreground transition-colors uppercase sm:mb-12 sm:text-xs">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Terminal
        </Link>

        <header className="mb-12 sm:mb-24">
          <h1 className="mb-4 text-4xl font-black tracking-tighter sm:text-8xl">
            Selected <span className="text-foreground/20 italic font-light block sm:inline">Deployments</span>
          </h1>
          <p className="max-w-2xl text-base text-foreground/60 leading-relaxed font-medium sm:text-xl">
            A comprehensive catalog of high-availability AI systems and CV pipelines, including live telemetry from GitHub.
          </p>
        </header>

        <div className="grid gap-16 sm:grid-gap-24">
          {allProjects.map((project, idx) => (
            <div key={`${project.title}-${idx}`} className="group grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 items-center">
              <div className={(idx % 2 === 1) ? "lg:order-2" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-foreground/5 bg-foreground/5 transition-transform duration-700 group-hover:scale-[1.02] sm:rounded-[3.5rem]">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  {(project.isDynamic || project.status) && (
                    <div className="absolute top-6 right-6 z-20 flex gap-2">
                      {project.status && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 backdrop-blur-md border border-orange-500/20 text-[8px] font-black tracking-widest uppercase text-orange-500">
                          <Sparkles size={10} className="animate-pulse" /> {project.status}
                        </span>
                      )}
                      {project.isDynamic && (
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 text-[8px] font-black tracking-widest uppercase text-foreground/60">
                          Live from GitHub
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4 sm:space-y-8">
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag: string) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-foreground/[0.03] border border-foreground/5 text-[8px] font-black tracking-widest uppercase text-foreground/30 sm:px-3 sm:py-1 sm:text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-black tracking-tighter text-foreground sm:text-4xl capitalize">{project.title}</h2>
                  <p className="text-base leading-relaxed text-foreground/60 font-medium sm:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 font-black text-[10px] tracking-widest uppercase text-foreground hover:text-foreground/60 transition-colors sm:text-xs">
                    <Github size={16} className="sm:size-18" /> Source
                  </a>
                  <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 font-black text-[10px] tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors group sm:text-xs">
                    Telemetry <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform sm:size-14" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <Loader2 className="animate-spin text-foreground/20" size={40} />
              <span className="text-[10px] font-black tracking-widest uppercase text-foreground/20">Syncing with GitHub Registry...</span>
            </div>
          )}
        </div>
      </div>

      <footer className="relative border-t border-foreground/5 py-12 text-center sm:py-16">
        <div className="font-mono text-[8px] tracking-[0.4em] text-foreground/20 uppercase sm:text-[10px] sm:tracking-[0.5em]">
          End of Deployment Log ● Muskan Gujar
        </div>
      </footer>
    </main>
  );
}
