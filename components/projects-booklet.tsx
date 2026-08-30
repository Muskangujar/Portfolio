'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Sparkles, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';

export interface ProjectPage {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  highlight?: string;
}

const BOOKLET_PROJECTS: ProjectPage[] = [
  {
    title: "AgentID",
    category: "Flagship AI Framework",
    description: "Production-grade stateful identity and long-term memory layer for AI agents. Enables user personalization and persistent context across sessions.",
    tags: ["LLM Agents", "Memory SDK", "Python", "Stateful AI"],
    image: "/agentid.png",
    githubUrl: "https://github.com/Muskangujar/AgentID",
    highlight: "Flagship Identity Core"
  },
  {
    title: "AgentMem",
    category: "Flagship AI Framework",
    description: "Multi-modal vector and context memory engine featuring a high-performance Rust core. Compresses context to reduce LLM token usage and lower cloud costs.",
    tags: ["Rust Core", "Vector DB", "Cost Reduction", "Context Recall"],
    image: "/agentmem.png",
    githubUrl: "https://github.com/Muskangujar/AgentMem",
    highlight: "High-Speed Rust Core"
  },
  {
    title: "Quant Regime Analysis",
    category: "Financial Machine Learning",
    description: "Financial research pipeline utilizing Reinforcement Learning for market regime detection, alpha research, and portfolio optimization.",
    tags: ["Quant ML", "RL", "Python", "Time Series"],
    image: "/quant.png",
    githubUrl: "https://github.com/Muskangujar/regime-lab",
    highlight: "Quant & RL Research"
  },
  {
    title: "Autonomous Driving Perception",
    category: "Computer Vision & Edge AI",
    description: "Real-time edge perception combining YOLOv8 multi-class object detection with OpenCV lane analysis for low-cost hardware.",
    tags: ["YOLOv8", "OpenCV", "Edge AI", "Computer Vision"],
    image: "/driving.png",
    githubUrl: "https://github.com/Muskangujar/autonomous-driving-perception",
    highlight: "Edge Vision Pipeline"
  },
  {
    title: "Healthcare Chatbot & OCR",
    category: "Healthcare AI",
    description: "Medical assistant leveraging Tesseract OCR for document digitization and modular machine learning models for automated symptom triage.",
    tags: ["OCR", "Healthcare AI", "Python", "ML Triage"],
    image: "/healthcare_v2.png",
    githubUrl: "https://github.com/Muskangujar/healthcare-chatbot",
    highlight: "Medical Diagnostics"
  },
  {
    title: "Music Emotion Classification",
    category: "Audio Deep Learning",
    description: "Hybrid CNN-LSTM deep learning model mapping audio spectral features to emotional moods and acoustic characteristics.",
    tags: ["CNN-LSTM", "Audio DSP", "PyTorch", "Deep Learning"],
    image: "/music_v2.png",
    githubUrl: "https://github.com/Muskangujar/Music_Classification",
    highlight: "Audio Signal Processing"
  },
  {
    title: "Bank Simulation & AI Assistant",
    category: "Interactive Applications",
    description: "ATM simulator featuring a Streamlit interactive interface with an integrated AI assistant for real-time banking workflows.",
    tags: ["Streamlit", "Python", "Interactive App"],
    image: "/bank_v2.png",
    githubUrl: "https://github.com/Muskangujar/Bank-Simulation",
    highlight: "Interactive Banking UI"
  },
  {
    title: "Hotel Management System",
    category: "Full-Stack Web Systems",
    description: "Web-based hotel operations platform built with Flask and MySQL for room inventory, customer booking, and administrative workflows.",
    tags: ["Flask", "MySQL", "Web App"],
    image: "/hotel_v2.png",
    githubUrl: "https://github.com/Muskangujar/Hotel_Management_system",
    highlight: "Enterprise Web Systems"
  }
];

export function ProjectsBooklet() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = BOOKLET_PROJECTS.length;
  const project = BOOKLET_PROJECTS[currentPage];

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Booklet Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-white text-black">
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white sm:text-4xl">Featured Projects</h3>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
              Browse deployments • Page {currentPage + 1} of {totalPages}
            </p>
          </div>
        </div>

        {/* Page Flip Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white hover:text-black disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous Project Page"
          >
            <ChevronLeft size={16} />
            <span>PREV PAGE</span>
          </button>
          
          <span className="font-mono text-xs font-bold text-zinc-400 px-2">
            {currentPage + 1} / {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white hover:text-black disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next Project Page"
          >
            <span>NEXT PAGE</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Interactive Booklet Page */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/75 backdrop-blur-2xl p-8 shadow-2xl transition-all duration-500 sm:p-12 sm:rounded-[3.5rem]">
        {/* Top Spine / Binder Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
              {project.category}
            </span>
            {project.highlight && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                <Sparkles size={11} /> {project.highlight}
              </span>
            )}
          </div>
          <span className="font-mono text-xs font-bold text-zinc-500">
            Project No. 0{currentPage + 1}
          </span>
        </div>

        {/* Booklet Page Content */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          {/* Image Side */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Details Side */}
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                Deployment Overview
              </span>
              <h4 className="text-3xl font-black tracking-tight text-white sm:text-4xl mt-1">
                {project.title}
              </h4>
              <p className="mt-4 text-base text-zinc-300 leading-relaxed font-medium sm:text-lg">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-bold text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Repository Button */}
            {project.githubUrl && (
              <div className="pt-4 flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-black transition-all hover:bg-zinc-200 hover:scale-105"
                >
                  <Github size={15} />
                  <span>VIEW REPOSITORY</span>
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  <span>All Projects</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Booklet Bottom Page Navigation Dots */}
        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {BOOKLET_PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to project page ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentPage
                    ? 'w-8 bg-white'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black disabled:opacity-20 transition-colors"
              aria-label="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black disabled:opacity-20 transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
