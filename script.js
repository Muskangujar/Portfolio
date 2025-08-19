// ========== Terminal Animation ==========
const terminal = document.getElementById('terminal');
const messages = [
    "> Launching Muskan's AI-powered portfolio...",
    "> BE E&TC | Class of 2025 | Pune, India",
    "> Passionate about AI, ML, and Generative AI",
    "> Projects: Emotion Recognition | Drowsiness Detection | AI Chatbot",
    "> Systems ready — let's connect and innovate!"
];
let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;



function typeTerminal() {
    const current = messages[messageIndex];
    const text = current.substring(0, charIndex);
    terminal.textContent = text;
    terminal.style.setProperty('--cursor-opacity', isDeleting ? '0.5' : '1');

    if (!isDeleting && charIndex < current.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) messageIndex = (messageIndex + 1) % messages.length;
    }

    setTimeout(typeTerminal, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// ========== Projects ==========
const projects = [
    {
        title: "Music Emotion Classification System",
        description: "Deep learning-based music emotion classifier with a GUI, using a CNN + LSTM hybrid model.",
        details: `Developed an advanced Music Emotion Classification System that leverages a hybrid deep learning architecture (CNN + LSTM) to classify songs into multiple emotional states based on their audio features. The system includes a Streamlit-based GUI that allows users to upload WAV or MP3 files and receive real-time emotion predictions, along with spectrogram visualizations and probability scores.

Key capabilities:
- Hybrid CNN + LSTM model combining spatial and temporal features
- Multi-label classification for complex emotional states (e.g., excited + stressed)
- Real-time audio analysis and prediction via a user-friendly interface
- Emotion categories based on the Russell Emotion Model (Happy, Sad, Excited, Calm, etc.)

Built for scalability, extensibility, and interactive real-time performance.`,
        tags: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "Streamlit", "Librosa", "Matplotlib"],
        icon: "https://thumbs.dreamstime.com/b/d-humanoid-robot-playing-piano-music-notes-dark-room-ai-generated-329684165.jpg",
        github: "https://github.com/Muskangujar/Music_Classification"
    },
    {
        title: "Drowsiness Detection System",
        description: "Real-time driver drowsiness detection using computer vision and embedded electronics with Python, OpenCV, and Arduino.",
        details: `Developed a robust Drowsiness Detection System that combines computer vision with embedded hardware to detect driver fatigue in real-time. The system uses Python (OpenCV + dlib) for facial landmark detection and eye tracking, and communicates with an Arduino microcontroller to trigger physical alerts.

Key features:
- Real-time Eye Aspect Ratio (EAR) analysis using webcam input and dlib's facial landmarks
- Alerts through buzzer, LED, and 16x2 LCD triggered by Arduino based on serial input
- EAR thresholds intelligently classify sleep, drowsiness, and alertness
- Full circuit simulated in Proteus and implemented physically on a custom PCB
- Git LFS used to manage large .dat model file for facial landmark detection

Hands-on with both software and hardware: Python image processing, Arduino programming, serial communication, and Proteus circuit design.`,
        tags: ["Python", "OpenCV", "dlib", "Arduino", "Serial", "Proteus", "Embedded Systems", "Computer Vision"],
        icon: "https://www.labellerr.com/blog/content/images/2024/11/driver_drowsiness_detection.webp",
        github: "https://github.com/Muskangujar/Drowsiness-Detection"
    },
    {
        title: "Food Spoilage Detection System",
        description: "Arduino + IoT-based food spoilage detection using methane, temperature, and humidity sensors with real-time alerts and cloud monitoring.",
        details: `Developed an IoT-enabled Food Spoilage Detection System that uses gas (MQ3/MQ4), temperature, humidity, and light sensors to identify spoiled food in storage environments. The system is built around Arduino UNO with an ESP8266 Wi-Fi module for IoT connectivity and real-time monitoring via the ThingSpeak dashboard.

Key capabilities:
- Spoilage detection using methane gas (MQ3/MQ4) and environmental sensors (DHT11, LDR).
- Real-time alerts via buzzer, LED, and 16x2 LCD display when spoilage thresholds are exceeded.
- IoT integration with ThingSpeak for live monitoring and graphical analysis of sensor data.
- Simulation tested in Proteus before hardware implementation.
- Remote monitoring of food storage conditions through Wi-Fi-enabled data logging.

Built for scalability, low-cost hardware prototyping, and real-world applications in food safety and storage monitoring.`,
        tags: ["Arduino", "C++", "MQ3", "MQ4", "ESP8266", "ThingSpeak", "IoT", "Proteus", "Sensors", "LCD"],
        icon: "https://electronicsforu.com/wp-content/uploads/2016/03/7D4_Checkpack.png",
        github: "https://github.com/Muskangujar/Food-Spoilage-Detection"
    },
    {
    title: "Hotel Management System",
    description: "A Flask + MySQL based Hotel Management System for managing customers, rooms, and bookings with a simple web interface.",
    details: `Developed a full-stack Hotel Management System that enables hotel staff to manage customers, rooms, and bookings efficiently. The system automates room status updates and provides a clean, user-friendly interface for hotel operations.

Key capabilities:
- Customer management: Add, view, and delete customers
- Room management: Add rooms, set types & prices, manage availability
- Booking management: Assign rooms, check-in, and check-out process
- Automatic room status updates (Available / Occupied)
- Continuous IDs in UI for cleaner display despite DB skips
- Flask backend with MySQL database for all CRUD operations

Tech stack:
- Frontend: HTML, CSS, Bootstrap
- Backend: Python (Flask)
- Database: MySQL
- Tools: MySQL Workbench, VS Code, Git/GitHub

Future Enhancements:
- Search and filter for customers and bookings
- Room types with images and descriptions
- User authentication (admin/staff login)
- AI-based room recommendation system.`,
    tags: ["Python", "Flask", "MySQL", "HTML", "CSS", "Bootstrap"],
    icon: "https://tse1.mm.bing.net/th/id/OIP.fhxAW8bu3HciYzE4wK2O0QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    github: "https://github.com/Muskangujar/hotel-management-system"
},
];

function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map((project, index) => `
        <div class="project-card" tabindex="0">
            <div class="project-image">
                ${project.icon?.startsWith('http') ?
            `<img src="${project.icon}" alt="${project.title} icon">` :
            project.icon ? `<i class="${project.icon}"></i>` : `<i class="fas fa-folder-open"></i>`
        }
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-buttons">
                    <button class="btn-details" data-index="${index}">View Details</button>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-details') && projects[index].github) {
                window.open(projects[index].github, '_blank');
            }
        });
    });

    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = e.target.getAttribute('data-index');
            showModal(projects[index]);
        });
    });
}

// ========== Modal ==========
function showModal(project) {
    const modal = document.getElementById('project-modal');
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').innerText = project.details;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setupModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay')?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ========== Responsive Zoom ==========
function adjustScreenZoom() {
    const screenWidth = window.innerWidth;
    document.documentElement.style.fontSize = (screenWidth >= 992 && screenWidth <= 1440) ? "13.5px" : "";
}

// ========== Layout Adjustments ==========
function adjustLayoutForHeader() {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

function checkMobileLayout() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.toggle('mobile-layout', window.innerWidth < 768);
    }
}

// ========== Smooth Scroll ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }

            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('popstate', function () {
        const hash = location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
}

// ========== Scroll Spy ==========
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    let lastActiveLink = null;

    function onScroll() {
        let currentSection = '';
        const scrollPosition = window.scrollY + headerHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection && (!lastActiveLink || lastActiveLink !== `#${currentSection}`)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                    lastActiveLink = `#${currentSection}`;
                }
            });
        }
    }

    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(onScroll, 100);
    }, false);

    onScroll();
}

// ========== Mobile Navigation ==========
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// ========== Particle Background ==========
function createParticles() {
    const container = document.querySelector('.particle-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous particles
    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;

        Object.assign(particle.style, {
            width: `${size}px`,
            height: `${size}px`,
            left: `${posX}%`,
            top: `${posY}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
        });

        container.appendChild(particle);
    }
}

// ========== Timeline Animation ==========
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => observer.observe(item));
}

// ========== Initialization ==========
function init() {
    checkMobileLayout();
    adjustLayoutForHeader();
    adjustScreenZoom();
    loadProjects();
    setupMobileMenu();
    setupSmoothScroll();
    setupScrollSpy();
    setupTimelineAnimations();
    typeTerminal();
    createParticles();
    setupModal();

    window.scrollTo(0, 0);
    history.replaceState(null, null, ' ');
}

// ========== Event Listeners ==========
window.addEventListener('load', init);
window.addEventListener('resize', () => {
    checkMobileLayout();
    adjustLayoutForHeader();
    adjustScreenZoom();
});
