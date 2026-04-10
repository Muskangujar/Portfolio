# Muskan Gujar | AI & Cloud Engineer Portfolio

A futuristic, high-end portfolio featuring an intelligent AI Concierge (Tyrion) and a continuous-flow narrative layout.

## 🚀 Built With
- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Agent**: [Groq LPU](https://groq.com/) (Llama-3.1-8B)
- **Visuals**: [Lucide React](https://lucide.dev/) & [Three.js](https://threejs.org/)

## 🤖 Features
- **Tyrion (AI Concierge)**: A lightning-fast, witty assistant that handles professional inquiries and CV downloads.
- **Dynamic Backgrounds**: Interactive dotted surface background with optimized z-index.
- **Continuous Narrative**: A scroll-focused storytelling layout for career progression.

## 🛠️ Local Development

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Create a `.env.local` file and add your Groq API key:
   ```env
   GROQ_API_KEY=your_key_here
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment

**Recommended: Vercel**
Since this project uses **Next.js Server Actions** for secure AI inference, it requires a Node.js environment. Deployment to static hosts like GitHub Pages will break the AI functionality.

---
© 2026 Muskan Gujar
