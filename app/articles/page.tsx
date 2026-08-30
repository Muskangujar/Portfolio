'use client';

import React, { useEffect, useState } from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowLeft, BookOpen, ExternalLink, Clock, CheckCircle2, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { fetchMediumArticles, MediumArticle, FALLBACK_ARTICLES } from '@/lib/medium';

const TAKEAWAYS = [
  {
    title: "Context Window Explosion",
    detail: "Unchecked agent memory was causing runaway latency and huge token costs. We fixed this with sliding-window memory and structured state checkpoints."
  },
  {
    title: "Tool Call Failures & Hallucinations",
    detail: "Agents would hallucinate API arguments and get stuck in infinite retry loops. We implemented strict Pydantic schemas and circuit breakers."
  },
  {
    title: "Automated Incident Triage",
    detail: "Integrated SRE health checks and ServiceNow automated alert routing to catch degraded agent sessions before users notice."
  },
  {
    title: "Slashing Operating Costs",
    detail: "Reduced LLM token waste and API costs by over 40% with intelligent caching and local fallback routing."
  }
];

const UPCOMING_TOPICS = [
  {
    title: "Designing Cost-Efficient Cloud Architectures for SRE Teams",
    category: "Cloud SRE & Cost Optimization",
    status: "Drafting",
    desc: "How we analyze cloud utilization, right-size Azure and GCP workloads, and use automated scripts to prevent surprise cloud bills."
  },
  {
    title: "AgentPhased: Building Modular Rust and Python Agent Runtimes",
    category: "AI Agent Architecture",
    status: "Planned",
    desc: "A deep dive into AgentID, AgenTool, and AgentMem for long-term state retention and sandboxed tool calling."
  },
  {
    title: "AI-Powered ServiceNow Automation for Fast Incident Resolution",
    category: "ITSM & Automation",
    status: "Planned",
    desc: "Using LLM pipelines to triage tickets, suggest remediation steps, and speed up incident resolution times."
  }
];

export default function ArticlesPage() {
  const [articles, setArticles] = useState<MediumArticle[]>(FALLBACK_ARTICLES);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const liveArticles = await fetchMediumArticles('muskangujar_');
        if (liveArticles && liveArticles.length > 0) {
          setArticles(liveArticles);
        }
      } catch (err) {
        console.error("Could not fetch live Medium feed:", err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

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
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-zinc-400 uppercase transition-colors hover:text-white sm:text-xs"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <a
            href="https://medium.com/@muskangujar_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-white/10 backdrop-blur-md"
          >
            <span>Follow on Medium (@muskangujar_)</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <header className="mb-8 sm:mb-12">
          <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-zinc-400 uppercase sm:text-xs">
            Technical Publications
          </p>
          <h1 className="text-3xl font-black tracking-tighter text-white sm:text-5xl">
            Articles & <span className="text-white/30 italic font-light">Notes</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 font-medium sm:text-base">
            Notes on building reliable AI agents, cloud reliability, cost optimization, and automated systems.
          </p>
        </header>

        {/* Live Medium Articles Feed */}
        <section className="mb-14 sm:mb-20">
          {loading && (
            <div className="flex items-center justify-center py-10 gap-3 text-zinc-400 font-mono text-xs uppercase tracking-widest">
              <Loader2 className="animate-spin text-white/40" size={18} />
              <span>Fetching latest publications from Medium...</span>
            </div>
          )}

          <div className="space-y-6 sm:space-y-8">
            {articles.map((article, idx) => (
              <div 
                key={`${article.link}-${idx}`}
                className="rounded-[1.75rem] border border-white/10 bg-zinc-950/75 backdrop-blur-xl p-6 transition-all hover:border-white/30 sm:p-8 sm:rounded-[2.25rem]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-bold text-zinc-300">
                      {article.publication || "Medium"}
                    </span>
                    {article.readTime && (
                      <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-400">
                        <Clock size={13} /> {article.readTime}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">
                    Published {article.pubDate}
                  </span>
                </div>

                <div className="mt-6">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="group/title">
                    <h2 className="text-xl font-black tracking-tight text-white transition-colors group-hover/title:text-zinc-300 sm:text-3xl">
                      {article.title}
                    </h2>
                  </a>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-medium sm:text-base">
                    {article.snippet}
                  </p>
                </div>

                {/* Categories */}
                {article.categories && article.categories.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.categories.map((cat) => (
                      <span key={cat} className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[9px] font-mono text-zinc-300 uppercase tracking-wider">
                        #{cat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Key Takeaways (shown for flagship article) */}
                {idx === 0 && (
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="mb-6 font-mono text-[10px] tracking-[0.3em] text-zinc-400 uppercase sm:text-xs">
                      Key Engineering Takeaways
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {TAKEAWAYS.map((item) => (
                        <div key={item.title} className="p-5 rounded-xl bg-white/[0.03] border border-white/10 sm:rounded-2xl">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 size={16} className="text-zinc-400 flex-shrink-0" />
                            <span className="text-xs font-black text-white sm:text-sm">{item.title}</span>
                          </div>
                          <p className="text-[10px] text-zinc-400 leading-relaxed font-medium sm:text-xs">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 flex items-center justify-end">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-black text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95 sm:text-sm"
                  >
                    Read Full Article on Medium <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Articles */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Sparkles size={16} className="text-zinc-400" />
            <h2 className="font-mono text-[10px] tracking-[0.3em] text-zinc-400 uppercase sm:text-xs">
              Upcoming Articles & Case Studies
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {UPCOMING_TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="group rounded-[2rem] border border-white/10 bg-zinc-950/75 backdrop-blur-xl p-8 transition-all hover:border-white/30 sm:rounded-[2.5rem]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-zinc-500 uppercase sm:text-[10px]">
                    {topic.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[8px] font-black text-zinc-300 sm:text-[10px]">
                    {topic.status}
                  </span>
                </div>
                <h3 className="text-base font-black text-white leading-tight mb-3 sm:text-lg">
                  {topic.title}
                </h3>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-medium sm:text-xs">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
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
