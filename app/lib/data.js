export const portfolioData = {
  personal: {
    name: "Madan C S",
    title: "Aspiring Software Developer",
    tagline: "Aspiring-Software Developer | Java Developer & Mern Stack | Spring boot | React.js | 1+ Years Hands-On Experience | REST APIs | Git & GitHub | AWS Cloud | Docker | CI/CD | Open to Software Engineering Roles",
    location: "Bengaluru, Karnataka, India",
    email: "csmadan868@gmail.com",
    github: "https://github.com/MADANCS",
    linkedin: "https://www.linkedin.com/in/madan-c-s-084492246/",
    resumes: {
      java: "https://drive.google.com/file/d/1IFeXVwz43aPLKL93EbgBAnqmzBk-dDWe/view?usp=sharing",
      mern: "https://drive.google.com/file/d/1OUFvbkq-XUsB8yCrcKvh75VQIb0OvFSu/view?usp=sharing",
    },
    avatar: "/madan.jpg",
  },

  about: {
    bio: [
      "Passionate MCA student and Full-Stack Developer with 1+ year of hands-on experience building scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Java. I have practical experience developing RESTful APIs, implementing authentication & authorization, database design, and deploying applications on cloud platforms.",
      "Currently learning: Microservices Architecture, System Design, Cloud-Native Development, DevOps Practices, and Advanced Backend Engineering. I am actively seeking Software Developer, Java Developer, Full-Stack Developer, and Backend Developer opportunities where I can contribute, learn, and grow while building impactful technology solutions."
    ],
    stats: [
      { label: "Years Experience", value: "1+" },
      { label: "Projects Completed", value: "4" },
      { label: "Technologies", value: "15+" },
      { label: "Certifications", value: "7" },
    ],
  },

  skills: {
    marquee: [
      "MERN Stack", "Java", "Spring Boot", "React.js", "Node.js", "Express.js",
      "MongoDB", "MySQL", "REST APIs", "Microservices", "AWS Cloud", "Docker",
      "Git & GitHub", "Socket.io", "Role-Based Access (RBAC)", "CI/CD", "Data Structures & Algorithms"
    ],
    categories: [
      {
        title: "Web Development (MERN Stack)",
        icon: "Monitor",
        skills: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Responsive UI/UX",
          "Redux / State Management",
          "Real-time features with Socket.io",
          "RESTful API integration",
          "Redis (caching & real-time data)",
        ],
      },
      {
        title: "Backend & Cloud Engineering",
        icon: "Server",
        skills: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "Microservices Architecture",
          "RESTful API Design",
          "Docker & Kubernetes",
          "AWS (Cloud Essentials)",
          "CI/CD Pipelines",
          "Database Design (SQL & NoSQL)",
        ],
      },
      {
        title: "Tools & Professional Practices",
        icon: "Wrench",
        skills: [
          "Git & GitHub",
          "Postman",
          "OOP Principles",
          "Data Structures & Algorithms",
          "System Design",
          "Agile & SDLC",
        ],
      },
    ],
  },

  experience: [
    {
      role: "Full Stack Development",
      company: "Excerpt Technologies Pvt. Ltd.",
      period: "Feb '26 — Jun '26",
      duration: "4 months",
      location: "Bengaluru, Karnataka (Onsite)",
      current: true,
      bullets: [
        "Engineered a MERN stack platform with JWT/RBAC auth, scalable REST APIs, and optimized MongoDB queries (40% faster response time); integrated Razorpay payments with webhooks and Socket.io for real-time messaging.",
        "Built the React/Tailwind UI and deployed via CI/CD (GitHub Actions, Vercel, AWS) with zero downtime, following Agile/SDLC and Git-based code workflows, while applying Data Structures & Algorithms (DSA) and Problem Solving to develop efficient solutions."
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "MCR Technology Pvt Ltd",
      period: "May '25 — Jan '26",
      duration: "8 months",
      location: "Bengaluru, Karnataka (Hybrid)",
      current: false,
      bullets: [
        "Architected and delivered full-stack modules with Java, Spring Boot, and REST APIs across the SDLC, applying Object-Oriented Programming (OOP) principles and Maven-based builds to create scalable and maintainable applications.",
        "Optimized backend services and PostgreSQL schemas, improving query performance, API response times, and data integrity; resolved production issues via root-cause analysis, Data Structures & Algorithms (DSA), Problem Solving, and Algorithmic Thinking, strengthening system stability while driving agile sprint execution to meet deadlines."
      ],
    },
  ],

  projects: [
    {
      title: "Talent-Hub Marketplace",
      repoName: "Talent-Hub-MarketPlace-",
      category: "AI & RECRUITMENT PLATFORM",
      description: "AI-powered recruitment marketplace featuring automated resume-job matching with Gemini AI, live video interviews via Agora RTC, real-time chat, recruiter analytics, and Razorpay subscriptions.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Agora RTC", "AI/Gemini"],
      image: "/talent-hub.png",
      github: "https://github.com/MADANCS/Talent-Hub-MarketPlace-",
      badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      glowClass: "from-purple-500/20 via-indigo-500/10 to-transparent",
      accentBorder: "group-hover:border-purple-500",
    },
    {
      title: "TaskFlow Pro",
      repoName: "TaskFlow-Pro--Project-Management",
      category: "FULL-STACK MERN ARCHITECTURE",
      description: "Full-stack MERN project management application featuring interactive drag-and-drop Kanban task boards, team progress analytics, role assignments, and real-time collaboration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      image: "/taskflow-pro.png",
      github: "https://github.com/MADANCS/TaskFlow-Pro--Project-Management",
      badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      glowClass: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accentBorder: "group-hover:border-emerald-500",
    },
    {
      title: "SecureBank Platform",
      repoName: "SecureBank-",
      category: "JAVA FULL-STACK & FINTECH",
      description: "Enterprise Java Full-Stack digital banking platform engineered with Spring Boot, RESTful APIs, Role-Based Access Control (RBAC), secure authentication, and real-time account transaction ledgers.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API", "RBAC", "React.js"],
      image: "/secure-bank.png",
      github: "https://github.com/MADANCS/SecureBank-",
      badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      glowClass: "from-amber-500/20 via-yellow-500/10 to-transparent",
      accentBorder: "group-hover:border-amber-500",
    },
    {
      title: "DevFlow Microservices",
      repoName: "-Microservice-Based-Devflow-",
      category: "CLOUD-NATIVE BACKEND",
      description: "Scalable cloud-native microservices architecture platform built with Spring Boot, API Gateway routing, independent service discovery, Docker containerization, and H2/PostgreSQL persistence.",
      tech: ["Java", "Spring Boot", "Microservices", "Docker", "API Gateway", "React.js"],
      image: "/devflow.png",
      github: "https://github.com/MADANCS/-Microservice-Based-Devflow-",
      badgeClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      glowClass: "from-sky-500/20 via-blue-500/10 to-transparent",
      accentBorder: "group-hover:border-sky-500",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sir M Visvesvaraya Institute of Technology",
      university: "Visvesvaraya Technological University (VTU)",
      year: "2024 – 2026",
      details: "Advanced specialization in Enterprise Software Engineering, Distributed Systems, Cloud Architecture, and Full-Stack Development (Java & MERN Stack). Focus on scalable system design, microservices, and modern web application development."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Tumkur University",
      university: "Tumkur University",
      year: "2021 – 2024",
      details: "Core Computer Science foundation specializing in Object-Oriented Programming (Java/C++), Data Structures & Algorithms (DSA), Relational Database Design (SQL), and Web Development."
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Gurukula PU College, Tiptur",
      university: "Karnataka State Board (PUE)",
      year: "2019 – 2021",
      details: "Higher secondary education specializing in Science & Mathematics, establishing strong analytical, mathematical, and logical problem-solving skills for technical computing."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Gurukula English Medium High School, Tiptur",
      university: "KSEEB Board",
      year: "2019",
      details: "Secondary education foundational coursework with excellence in Mathematics, Science, and English, developing strong foundational reasoning and computer literacy."
    },
  ],

  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
    {
      name: "JavaScript Essentials 1",
      issuer: "Cisco / Python Institute",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
    {
      name: "JPMorganChase – Software Engineering",
      issuer: "JPMorganChase & Co.",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
    {
      name: "Hewlett Packard Enterprise – Software Engineering Job Simulation",
      issuer: "Hewlett Packard Enterprise",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
    {
      name: "Frontend Developer (React)",
      issuer: "React & Web Development",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
    {
      name: "Programming Using Java",
      issuer: "Java SE Certification",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
    {
      name: "Node.js",
      issuer: "Backend Web Development",
      url: "https://www.linkedin.com/in/madan-c-s-084492246/details/certifications/",
    },
  ],

  chatbotResponses: {
    greeting: "Hi there! 👋 I'm Madan's AI assistant. Ask me anything about his experience, education, skills, or projects!",
    skills: "Madan specializes in MERN Stack (MongoDB, Express.js, React.js, Node.js), Java, Spring Boot, REST APIs, Microservices, MySQL, AWS Cloud, Docker, Git & GitHub, RBAC, and Socket.io.",
    experience: "Madan has 1+ years of hands-on experience: Full Stack Development at Excerpt Technologies Pvt. Ltd. (Feb '26 – Jun '26, Onsite) building MERN & payment systems, and Full Stack Developer Intern at MCR Technology Pvt Ltd (May '25 – Jan '26, Hybrid) engineering Java Spring Boot & PostgreSQL backends.",
    education: "Madan is pursuing an MCA at Sir M Visvesvaraya Institute Of Technology (VTU). He completed his BCA at Tumkur University, PUC at Gurukula PU College Tiptur, and SSLC at Gurukula English Medium High School Tiptur.",
    projects: "Madan has featured 4 major GitHub projects: Talent-Hub Marketplace, TaskFlow Pro, SecureBank Platform, and DevFlow Microservices. Explore the Work section to see them!",
    contact: "You can reach Madan at csmadan868@gmail.com or connect with him on LinkedIn at linkedin.com/in/madan-c-s-084492246.",
    certifications: "Madan holds 7 professional certifications including AWS Cloud Practitioner, JavaScript Essentials 1, JPMorganChase Software Engineering, HPE Job Simulation, Frontend Developer (React), Programming Using Java, and Node.js. All are verified on his LinkedIn profile.",
    location: "Madan is based in Bengaluru, Karnataka, India.",
    availability: "Madan is actively seeking Software Developer, Java Developer, Full-Stack Developer, and Backend Developer roles.",
    default: "I'm happy to help! You can also contact Madan directly at csmadan868@gmail.com."
  },

  navLinks: [
    { label: "Home", href: "#hero", num: "01" },
    { label: "About", href: "#about", num: "02" },
    { label: "Skills", href: "#skills", num: "03" },
    { label: "Work", href: "#projects", num: "04" },
    { label: "Experience", href: "#experience", num: "05" },
    { label: "Contact", href: "#contact", num: "06" },
  ],
};

