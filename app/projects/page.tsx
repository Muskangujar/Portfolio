import React, { useEffect, useState } from 'react';
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowLeft, Github, ExternalLink, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { fetchUserRepos, GitHubRepo } from '@/lib/github';

const FEATURED_PROJECTS = [
  {
    title: "AgentID Python SDK",
    description: "Architecting a high-performance, Rust-backed Python SDK for secure agent identification. Implemented Maturin/PyO3 for token verification and integrated with LangGraph/CrewAI/FastAPI ecosystems.",
    tags: ["Rust", "Python", "gRPC", "AI Security"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/Muskangujar/AgentID",
  },
  {
    title: "Autonomous Driving Perception",
    description: "Developing a high-throughput, low-latency perception pipeline for autonomous navigational frameworks leveraging YOLOv8 architectures optimized for real-time inference.",
    tags: ["YOLOv8", "Computer Vision", "PyTorch", "TensorRT"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/Muskangujar",
  },
  {
    title: "Predictive Healthcare & OCR",
    description: "Architecting a multi-label symptom classification engine utilizing TF-IDF orchestration and Tesseract-based OCR for prescriptive data extraction.",
    tags: ["NLP", "Tesseract OCR", "FastAPI", "Python"],
    image: "/healthcare.png",
    githubUrl: "https://github.com/Muskangujar/healthcare-chatbot",
  },
  {
    title: "CNN-LSTM Music Emotion Classifier",
    description: "A hybrid deep learning architecture employing CNNs for spatial features and LSTMs for temporal dependency modeling in audio DSP.",
    tags: ["TensorFlow", "CNN-LSTM", "Librosa", "Audio DSP"],
    image: "/music.png",
    githubUrl: "https://github.com/Muskangujar/Music_Classification",
  },
  {
    title: "Histopathological Cancer Diagnostics",
    description: "Deep convolutional neural network orchestration utilizing fine-tuned MobileNetV2 with transfer learning for Pap smear classification.",
    tags: ["Deep Learning", "Medical AI", "Transfer Learning"],
    image: "/cancer.png",
    githubUrl: "https://github.com/Muskangujar/CervicalCancer_Detection",
  },
  {
    title: "Drowsiness Detection & IoT",
    description: "Safety-critical CV framework employing facial-landmark point-cloud analysis to monitor Eye Aspect Ratio (EAR) in real-time.",
    tags: ["Python", "dlib", "IoT", "Real-time CV"],
    image: "/drowsiness.png",
    githubUrl: "https://github.com/Muskangujar/Drowsiness-Detection",
  },
  {
    title: "IoT Food Spoilage Monitoring",
    description: "IoT-orchestrated multi-sensor array detecting methane and ethanol with real-time telemetry streaming to cloud dashboards.",
    tags: ["IoT", "ESP8266", "Cloud Telemetry", "Sensors"],
    image: "/food.png",
    githubUrl: "https://github.com/Muskangujar/Food-Spoilage-Detection",
  }
];

export default function ProjectsPage() {
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      const repos = await fetchUserRepos('Muskangujar');
      
      // Filter out repos that are already in FEATURED_PROJECTS
      const filteredRepos = repos.filter(repo => 
        !FEATURED_PROJECTS.some(fp => 
          fp.githubUrl.toLowerCase().includes(repo.name.toLowerCase())
        )
      ).map(repo => ({
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || "Experimental repository and codebase.",
        tags: [repo.language, ...(repo.topics || [])].filter(Boolean),
        image: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200`, // Default tech image
        githubUrl: repo.html_url,
        isDynamic: true
      }));

      setGithubProjects(filteredRepos);
      setLoading(false);
    };

    loadRepos();
  }, []);

  const allProjects = [...FEATURED_PROJECTS, ...githubProjects];

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
                  {project.isDynamic && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 text-[8px] font-black tracking-widest uppercase text-foreground/60">
                        Live from GitHub
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4 sm:space-y-8">
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map(tag => (
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
