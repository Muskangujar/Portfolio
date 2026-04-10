'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-foreground/5 bg-foreground/[0.01] transition-all duration-700 hover:scale-[1.01] hover:bg-foreground/[0.03] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground/10">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
        
        <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
           <div className="flex gap-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-foreground text-background transition-transform hover:scale-110">
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-foreground text-background transition-transform hover:scale-110">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-10 pt-8">
        <h3 className="mb-4 text-3xl font-black tracking-tighter text-foreground leading-none">
          {title}
        </h3>
        <p className="mb-8 text-lg leading-relaxed text-foreground/40 font-medium line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-foreground/[0.04] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-foreground/30 border border-foreground/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic Border Glow */}
      <div className="absolute -inset-px rounded-[2.5rem] border border-foreground/0 opacity-0 transition-opacity duration-700 group-hover:border-foreground/10 group-hover:opacity-100" />
    </div>
  );
}
