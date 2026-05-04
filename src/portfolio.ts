export const portfolio = {
  identity: {
    name: "Mithun Barath M R",
    firstName: "Mithun",
    initials: "MR",
    splashInitials: "MB",
    title:
      "AI Engineer · Data Scientist · Data Analyst · Published Researcher",
    roles: [
      "AI Engineer",
      "Data Scientist",
      "Data Analyst",
      "RAG Architect",
      "Agentic AI Builder",
      "Published Researcher",
    ],
    keywords: [
      "AI Engineer",
      "Data Scientist",
      "Data Analyst",
      "ML Engineer",
      "LLM Engineer",
      "GenAI Developer",
      "Analytics Engineer",
    ],
    tagline:
      "I turn data into decisions, models into products, and ideas into impact.",
    location: "Bengaluru, India",
    email: "barathmithun1548@gmail.com",
    phone: "+91-8428379930",
    github: "https://github.com/mithunbarath",
    linkedin: "https://linkedin.com/in/mithunbarath13",
    resumeLink: "",
  },

  about: {
    summary:
      "I'm an AI Engineer who thinks like a Data Scientist and ships like an Analyst. As the sole AI engineer at a startup, I architected production RAG and agentic systems on AWS that serve hundreds of users daily - and as a researcher I co-authored a deep-learning paper now published in Cureus. I love taking messy data, finding the story, and turning it into something people can use.",
    miniBio:
      "Gold-medal CS & Data Analytics graduate. 1.5+ years shipping GenAI in production. Equally happy in a Jupyter notebook, a SageMaker endpoint, or a Power BI dashboard.",
    highlights: [
      {
        label: "End-to-end GenAI",
        detail:
          "Architecture → SageMaker → SLA monitoring at XDOSO Tech Labs",
      },
      {
        label: "Published researcher",
        detail: "Lead author · Cureus Journal · 2025",
      },
      {
        label: "9.3 / 10 CGPA",
        detail: "Gold Medalist · PSG College of Arts & Science",
      },
      {
        label: "3 cloud certifications",
        detail: "Google Data Analytics · Google MLOps · IBM RAG & Agentic AI",
      },
    ],
  },

  stats: [
    { value: 50, suffix: "K+", label: "Documents / day" },
    { value: 99.7, suffix: "%", label: "Production uptime" },
    { value: 200, suffix: "+", label: "Concurrent users" },
    { value: 1500, suffix: "+", label: "Patients served" },
  ],

  experience: [
    {
      company: "XDOSO Tech Labs",
      position: "AI Engineer",
      previousPosition: "Promoted from AI Intern (Oct 2024)",
      location: "Bengaluru, India",
      duration: "May 2025 – Present",
      tenure: "1 year 8 months total",
      summary:
        "Sole AI engineer. Took GenAI features from whiteboard to production.",
      bullets: [
        "Shipped a LangChain + LangGraph RAG pipeline on AWS SageMaker - 50K+ docs/day, 200+ concurrent users, 99.7% uptime, sub-200ms latency.",
        "Orchestrated multi-provider LLMs (GPT-4, Mistral-7B, custom fine-tunes); kept accuracy >90% while cutting deploy cycles 40%.",
        "Automated 20+ hrs/week of ops via n8n; led sprint planning and mentored teammates on LLM best practices.",
      ],
      stack: [
        "LangChain",
        "LangGraph",
        "AWS SageMaker",
        "Pinecone",
        "ChromaDB",
        "FastAPI",
        "n8n",
        "Python",
      ],
    },
    {
      company: "PSG Hospitals",
      position: "Machine Learning Developer",
      location: "Coimbatore, India",
      duration: "Dec 2024 – Jun 2025",
      summary: "Co-built an award-winning fetal-biometry diagnostic system.",
      bullets: [
        "Co-developed a CNN system that automates fetal-biometry measurements from ultrasound - built pixel-to-mm conversion with the Hough transform.",
        "Set up MLOps with Azure DevOps + Jenkins so radiologists got reproducible models, not notebooks.",
        "Stood up telemedicine portals serving 1,500+ rural patients.",
        "Lead author of the Cureus paper that came out of the work (2025).",
      ],
      stack: ["PyTorch", "OpenCV", "CNNs", "Azure DevOps", "Jenkins","NLP"],
    },
    {
      company: "XDOSO Tech Labs",
      position: "AI Intern",
      location: "Coimbatore, India",
      duration: "Oct 2024 – April 2025",
      summary: "focused on building early-stage GenAI systems and RAG prototypes",
      bullets: [
        "Developed foundational RAG pipelines and semantic search systems that later scaled into production-grade solutions.",
        "Built AI agent frameworks and multi-agent orchestration systems to automate enterprise workflows.",
        "Implemented LLMOps practices (prompt management, versioning, monitoring) and created automation pipelines using tools like n8n.",
      ],
      stack: ["React", "Node.js", "JavaScript","RAG","NLP"],
    },
  ],

  education: {
    school: "PSG College of Arts & Science, Coimbatore",
    degree: "B.Sc. Computer Science with Data Analytics",
    duration: "2022 – 2025",
    cgpa: "9.3 / 10",
    honors: [
      "Gold Medalist for Academic Excellence",
      "Best Major Project Award",
      "Adcointec'24 National Conference Organizer",
      "Emerald Class Entrepreneur",
      "Rotaract Club Volunteer",
    ],
  },

  skills: [
    {
      title: "Languages",
      icon: "code",
      items: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "R",],
    },
    {
      title: "AI · GenAI · LLMs",
      icon: "brain",
      items: [
        "RAG",
        "Agentic AI",
        "Multi-Agent Systems",
        "Prompt Engineering",
        "Fine-tuning (LoRA / QLoRA)",
        "NLP",
        "Deep Learning",
      ],
    },
    {
      title: "Frameworks",
      icon: "layers",
      items: [
        "LangChain",
        "LangGraph",
        "PyTorch",
        "HuggingFace",
        "Scikit-Learn",
        "FastAPI",
        "Pandas",
        "NumPy",
      ],
    },
    {
      title: "Cloud · MLOps",
      icon: "cloud",
      items: ["AWS SageMaker", "Docker", "MLflow", "n8n", "CI/CD", "LLMOps"],
    },
    {
      title: "Databases · Vector",
      icon: "database",
      items: ["PostgreSQL", "MongoDB", "Pinecone", "ChromaDB"],
    },
    {
      title: "Analytics · BI",
      icon: "chart",
      items: [
        "EDA",
        "ETL",
        "Statistical Modeling",
        "A/B Testing",
        "Power BI",
        "Tableau",
      ],
    },
    {
      title: "Tools",
      icon: "tool",
      items: ["Git", "GitHub Copilot", "VS Code", "Jupyter","IBM Bob","Claude Code", "OpenClaw"],
    },
  ],

  projects: [
    {
      name: "Elections 2026 - Political Sentiment Engine",
      period: "2025 – 2026",
      tag: "Data Science · NLP",
      description:
        "Multi-platform scraper + sentiment pipeline tracking political content across 234 Tamil Nadu constituencies. Headless browsers ingest from Instagram, Facebook, YouTube and X; a Tamil-aware NLP layer (Groq + Gemma2-9b-it) classifies, summarises, and auto-generates PDF/DOCX intelligence reports.",
      stack: [
        "Python",
        "Playwright",
        "Instaloader",
        "Groq API",
        "Gemma2-9b-it",
        "NLP",
      ],
      github: "https://github.com/mithunbarath/Sentimental-analysis-for-Election-2026-using-Web-scraping",
      accent: "from-amber-400 via-coral-400 to-rose-400",
      tone: "warm",
    },
    {
      name: "Medical ASR & Clinical NLP Pipeline",
      period: "2024 – 2025",
      tag: "AI Engineering · Healthcare",
      description:
        "Real-time clinical transcription for Tamil-English doctor-patient audio. Whisper + Mistral-7B extract ICD-10 codes, symptoms and prescriptions; FastAPI services push automated EMR updates and cut clinician data-entry by 70%.",
      stack: ["Whisper", "Mistral-7B", "FastAPI", "Python", "NLP"],
      github: "https://github.com/mithunbarath/Medical-ASR-Clinical-Pipeline",
      accent: "from-indigo-500 via-blue-500 to-emerald-400",
      tone: "cool",
    },
    {
      name: "Air Automate - Networking Copilot",
      period: "2025 – 2026",
      tag: "Multimodal · Local-first",
      description:
        "Desktop overlay that watches your screen and explains LinkedIn profiles and job posts in real time. Vision + language locally with LLaVA + LLaMA3 over Ollama - zero API cost, full data privacy.",
      stack: ["LLaVA", "LLaMA3", "Ollama", "Python", "Multimodal"],
      github: "https://github.com/mithunbarath/Air-Automate",
      accent: "from-emerald-400 via-teal-400 to-sky-500",
      tone: "cool",
    },
    {
      name: "Fetal Biometry Deep-Learning System",
      period: "2024 – 2025 · PSG Hospitals",
      tag: "Computer Vision · Research",
      description:
        "CNN ultrasound analysis with pixel-to-mm calibration via the Hough transform. Automates fetal biometry that radiologists previously hand-measured. Published as lead author in Cureus Journal 2025.",
      stack: ["PyTorch", "OpenCV", "CNNs", "Azure DevOps", "Jenkins"],
      github: "https://github.com/mithunbarath/Automated-Fetal-Biomterics-identification-using-Deep-Learning",
      accent: "from-sky-500 via-indigo-500 to-violet-500",
      tone: "cool",
    },
  ],

  achievements: [
    {
      year: "2025",
      title: "Gold Medalist",
      detail: "B.Sc. CS & Data Analytics · PSGCAS",
      icon: "medal",
    },
    {
      year: "2024",
      title: "Smart India Hackathon Winner",
      detail: "Government of India · District level",
      icon: "sih",
    },
    {
      year: "2024",
      title: "Ideathon'24 Winner",
      detail: "PSG College of Arts & Science",
      icon: "trophy",
    },
    {
      year: "2024",
      title: "YUKTI 2.0 National Innovation",
      detail: "AgriCommerce platform · National pitch",
      icon: "yukti",
    },
    {
      year: "2024",
      title: "GDSC Chapter Lead",
      detail: "Google Developer Student Clubs · AdcoinTec organiser",
      icon: "gdsc",
    },
    {
      year: "Ongoing",
      title: "LeetCode 120+ Solved",
      detail: "DSA · Dynamic Programming · Graphs",
      icon: "leetcode",
    },
  ],

  publication: {
    title:
      "A Modular Deep-Learning Framework for Automated Fetal Biometry",
    venue: "Cureus Journal of Medical Science",
    year: "2025",
    role: "Lead Author",
    link: "https://www.cureus.com/articles/441376-a-modular-deep-learning-framework-for-automated-fetal-biometry-proof-of-concept-evaluation-of-head-abdominal-and-femur-measurements?utm_medium=email&utm_source=transaction#!/",
    tags: ["Deep Learning", "Medical Imaging", "Fetal Biometry"],
  },

  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      issuerIcon: "google",
      year: "2024",
      link: "https://drive.google.com/file/d/1m54f7hMpQVniXYAeam5MaK2_9Hk9jrd3/view?usp=drive_link",
    },
    {
      title: "MLOps with Vertex AI",
      issuer: "Google Cloud",
      issuerIcon: "googlecloud",
      year: "2024",
      link: "https://drive.google.com/file/d/1lyiUYkr9kz9O5fsDutDhFSKM6v-jCSjM/view?usp=drive_link",
    },
    {
      title: "RAG & Agentic AI",
      issuer: "IBM",
      issuerIcon: "ibm",
      year: "2026",
      link: "https://drive.google.com/file/d/1SRjcZ9DaVyTTJc1iCeCVbeqgwAZkrA1K/view?usp=sharing",
    },
  ],

  teaching: {
    summary:
      "Beyond shipping code, I love sharing it. I've delivered hands-on workshops and seminars on AI/ML, full-stack and emerging tech to 600+ students across three engineering colleges, and I lead student communities on my own campus.",
    venues: [
      {
        name: "NPR College of Engineering & Technology",
        topic: "Hands-on AI/ML & GenAI workshop",
        location: "Natham, Tamil Nadu",
        gradient: "from-indigo-500 via-blue-500 to-teal-400",
      },
      {
        name: "Velammal College of Engineering & Technology",
        topic: "Seminar - Agentic AI & RAG in production",
        location: "Madurai, Tamil Nadu",
        gradient: "from-emerald-500 via-teal-500 to-sky-500",
      },
      {
        name: "Kamaraj College of Engineering & Technology",
        topic: "Workshop - Full-stack + IoT for AI students",
        location: "Virudhunagar, Tamil Nadu",
        gradient: "from-amber-400 via-orange-400 to-rose-500",
      },
    ],
    communities: [
      {
        name: "Google Developer Student Clubs",
        role: "Chapter Lead - PSG College of Arts & Science",
        icon: "gdsc",
      },
      {
        name: "Rotaract Club",
        role: "Active member - community service & leadership",
        icon: "rotary",
      },
    ],
  },

  contact: {
    email: "barathmithun1548@gmail.com",
    phone: "+91-8428379930",
    location: "Bengaluru, India",
    socials: [
      { name: "GitHub", url: "https://github.com/mithunbarath", handle: "@mithunbarath" },
      { name: "LinkedIn", url: "https://linkedin.com/in/mithunbarath13", handle: "in/mithunbarath13" },
      { name: "Email", url: "mailto:barathmithun1548@gmail.com", handle: "barathmithun1548@gmail.com" },
    ],
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "teaching", label: "Teaching" },
    { id: "achievements", label: "Awards" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export type Portfolio = typeof portfolio;
export default portfolio;
