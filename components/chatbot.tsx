'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Mail, Github, Sparkles, Loader2 } from 'lucide-react';
import { askAI } from '@/app/actions/ai';
import ReactMarkdown from 'react-markdown';

type Message = {
  role: 'bot' | 'user';
  content: string;
  links?: { label: string; url: string; icon: any }[];
};

const SUGGESTIONS = [
  "Why hire Muskan?",
  "Her latest deployments?",
  "Her technical arsenal?",
  "Send a raven to Muskan"
];

const BOT_DATA = {
  name: "Muskan Gujar",
  role: "Associate Engineer at NielsenIQ",
  skills: "PyTorch, TensorFlow, OpenCV, FastAPI, Azure, GCP, Datadog, Automation, Model Tuning",
  projects: [
    { title: "Autonomous Driving", tech: "YOLOv8", detail: "Real-time perception @ 30+ FPS." },
    { title: "Healthcare OCR", tech: "Tesseract", detail: "Prescription analysis and classification." },
    { title: "Music Emotion", tech: "CNN-LSTM", detail: "Audio sentiment analysis." },
    { title: "Cancer Detection", tech: "MobileNetV2", detail: "Medical histopathology diagnostics." },
    { title: "Drowsiness & Food IoT", tech: "dlib/MQ", detail: "Real-time safety and monitoring systems." }
  ],
  upcoming: ["Edge Transformer Perception", "Self-evolving CI/CD bots", "Distributed Neural Architectures"],
  email: "muskangujar220104@gmail.com",
  github: "github.com/Muskangujar"
};

const BOT_CONTEXT = `
You are Tyrion, Muskan's AI Portfolio Assistant. You act as the "Hand of the Engineer" to guide visitors through her work.
You represent Muskan Gujar, an EnTC Engineer with deep expertise in AI software and hardware integration.
Current Role: ${BOT_DATA.role}.
Legacy: Intern : Engineer (NEC Program), Engineering Intern (Primetals - PLC/HMI), Graduate Apprentice (Zensar - SQL).
Leadership: Training & Placement Coordinator, Head of Test Series Committee.
Key Projects: ${BOT_DATA.projects.map(p => `${p.title} (${p.tech}): ${p.detail}`).join(' | ')}
Tech Stack: ${BOT_DATA.skills}.
Contact: ${BOT_DATA.email} | GitHub: ${BOT_DATA.github}

STRICT IDENTITY & TONE RULES:
1. You are Tyrion (inspired by Tyrion Lannister). You serve as Muskan's trusted advisor and Hand.
2. Tone: Highly intelligent, professional, and helpful, with a subtle touch of dry wit.
3. Keep the core of your responses purely technical and concise. You may add a sprinkle of classic charm at the opening or closing, but do not overdo it.
4. Third Person: Refer to Muskan as "She" or "Muskan". Do not over-praise her; keep the facts grounded and professional.
5. If asked what you do: you drink, and you know things about her technical deployments.
`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "I am Tyrion, Hand of the Engineer. I drink, and I know things about Muskan's portfolio. How may I assist your inquiry?" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [messages]);

  const localFallback = (text: string): string => {
    const q = text.toLowerCase();
    if (q.includes("hire") || q.includes("why")) return `A mind needs information... Why hire Muskan? She brings a rare combination of cloud infrastructure expertise and deep neural architecture research. It is a strategic move, I assure you.`;
    if (q.includes("project") || q.includes("work")) return `She has deployed several systems, including Autonomous Driving perception and Healthcare OCR pipelines. Which specific deployment shall we dissect?`;
    if (q.includes("tech") || q.includes("stack") || q.includes("skill")) return `Her primary technical stack includes: ${BOT_DATA.skills}.`;
    if (q.includes("name") || q.includes("who")) return `I am Tyrion, representing Muskan Gujar. I guide visitors through her deployments.`;
    if (q.includes("email") || q.includes("contact") || q.includes("raven")) return `If you wish to send a raven, Muskan can be reached at **${BOT_DATA.email}**.`;
    return `Connecting to the records... Muskan specializes in ${BOT_DATA.skills}. You can reach her at ${BOT_DATA.email}.`;
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await askAI(text, BOT_CONTEXT);

      let botResponseText = "";
      
      if (result.error) {
        botResponseText = localFallback(text);
      } else {
        botResponseText = result.text || "";
      }

      const botMessage: Message = { role: 'bot', content: botResponseText };

      // Smart link injection
      const query = text.toLowerCase();
      if (query.includes("email") || query.includes("contact") || query.includes("raven") || query.includes("hire")) {
        botMessage.links = [{ label: "Email Muskan", url: `mailto:${BOT_DATA.email}`, icon: Mail }];
      } else if (query.includes("github") || query.includes("code") || query.includes("source") || query.includes("repositories")) {
        botMessage.links = [{ label: "Open GitHub", url: `https://${BOT_DATA.github}`, icon: Github }];
      } else if (query.includes("resume") || query.includes("cv") || query.includes("logs") || query.includes("deployment")) {
        botMessage.links = [{ label: "Download CV", url: "/resume.pdf", icon: Sparkles }];
      }

      setMessages(prev => [...prev, botMessage]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', content: localFallback(text) }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 sm:bottom-10 sm:left-10">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-2xl transition-all hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
        >
          <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-foreground animate-pulse" />
          <Bot size={24} />
        </button>
      )}

      {isOpen && (
        <div className="flex h-[80dvh] w-[90vw] sm:h-[550px] sm:w-[400px] flex-col overflow-hidden rounded-[2rem] border border-foreground/10 bg-background/95 shadow-2xl backdrop-blur-3xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-foreground/5 bg-foreground/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Bot size={20} />}
              </div>
              <div>
                <h3 className="text-sm font-black tracking-tight uppercase tracking-widest">Tyrion</h3>
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${isLoading ? 'bg-orange-500 animate-bounce' : 'bg-green-500 animate-pulse'}`} />
                  <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    {isLoading ? 'Processing...' : 'Hand of the Engineer'}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-2 hover:bg-foreground/5 text-foreground/40 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} ref={i === messages.length - 1 ? lastMessageRef : null} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] space-y-3 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`rounded-3xl px-5 py-3 text-sm font-medium leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-foreground text-background rounded-tr-none shadow-lg' 
                      : 'bg-foreground/5 text-foreground rounded-tl-none border border-foreground/5'
                  }`}>
                    {m.role === 'bot' ? (
                      <div className="prose prose-sm prose-invert max-w-none">
                        <ReactMarkdown>
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                  {m.links && (
                    <div className="flex flex-wrap gap-2">
                       {m.links.map(l => (
                         <a key={l.label} href={l.url} target="_blank" className="flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 text-xs font-black text-foreground hover:bg-foreground transition-all hover:text-background">
                            <l.icon size={14} /> {l.label}
                         </a>
                       ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-foreground/5 bg-foreground/[0.02] p-4 sm:p-6 space-y-4">
            {!isLoading && messages.length <= 1 && (
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 px-1">Quick Inquiries</span>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map(s => (
                    <button 
                      key={s} 
                      onClick={() => handleSend(s)}
                      className="rounded-xl border border-foreground/10 px-3 py-1.5 text-[11px] font-bold text-foreground/40 transition-all hover:border-foreground/60 hover:text-foreground hover:bg-foreground/[0.02]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder={isLoading ? "Analyzing..." : "State your inquiry..."}
                disabled={isLoading}
                className="flex-1 rounded-2xl border border-foreground/10 bg-transparent px-4 py-3 text-sm font-medium text-foreground placeholder:text-foreground/20 focus:border-foreground/30 focus:outline-none disabled:opacity-50"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={isLoading}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background transition-all hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
