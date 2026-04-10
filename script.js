/**
 * Muskan Gujar — Portfolio
 * Immersive Interactive Engine
 */

class CosmosEngine {
  constructor() {
    this.container = document.getElementById('cosmos-bg');
    if (!this.container) return;

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.stars = [];
    this.mouse = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };

    this.init();
    this.animate();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    const starCount = Math.floor((this.canvas.width * this.canvas.height) / 8000);
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.05 + 0.02,
        opacity: Math.random() * 0.5 + 0.2,
        depth: Math.random() * 0.5 + 0.5
      });
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.velocity.x += (this.mouse.x / window.innerWidth - 0.5 - this.velocity.x) * 0.05;
    this.velocity.y += (this.mouse.y / window.innerHeight - 0.5 - this.velocity.y) * 0.05;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const starColor = isDark ? 'rgba(255, 255, 255, ' : 'rgba(91, 76, 219, ';

    this.stars.forEach(s => {
      s.y -= s.speed;
      if (s.y < -10) s.y = this.canvas.height + 10;

      const px = s.x - (this.velocity.x * 20 * s.depth);
      const py = s.y - (this.velocity.y * 20 * s.depth);

      this.ctx.fillStyle = starColor + s.opacity + ')';
      this.ctx.beginPath();
      this.ctx.arc(px, py, s.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CosmosEngine();

  // Theme Toggle
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // Scroll Progress
  const progressBar = document.getElementById("progress-bar");
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && progressBar) {
      progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
    }
  };

  // Scroll Reveal
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade").forEach((el) => revealObserver.observe(el));

  // Back to Top
  const backBtn = document.getElementById("back-to-top");
  const updateBackToTop = () => {
    if (!backBtn) return;
    if (window.scrollY > 500) backBtn.classList.add("visible");
    else backBtn.classList.remove("visible");
  };

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateProgress();
  updateBackToTop();
});