export const personalInfo = {
  name: "Rawand Farhad",
  email: "me@rawand.dev",
  blogDivText: "On my free time, I write about tech and non-tech topics. You can check my tech-related articles at",
  blog: "blog.rawand.dev",
  location: "Iraqi Kurdistan 🏔️",
  tagline: "Software Engineer",
  tagline2: "Freelancer",
  description:
    "Passionate software engineer with over a decade of experience.",
  profileImage: "/profile.png",
  links: {
    github: "https://github.com/rawandfarhad",
    linkedin: "https://linkedin.com/in/rawandfarhad",
    resume: "/RawandFarhad_CV.pdf",
  },
}

export const aboutInfo = {
  bio: "Hi! I'm Rawand Farhad, a software engineer from Iraqi Kurdistan with over a decade of experience in the tech industry. I'm passionate about building robust, scalable systems and exploring the latest technologies to solve complex problems.",
  education: {
    university: "University of Human Development",
    degree: "B.Sc. Computer Science",
    period: "2014 - 2018",
    achievement: "First of class",
  },
  interests: [
    {
      title: "Distributed Systems",
      description: "Building scalable, fault-tolerant systems that handle millions of requests",
    },
    {
      title: "Machine Learning",
      description: "Developing intelligent solutions using modern ML frameworks and techniques",
    },
    // {
    //   title: "Full-Stack Development",
    //   description: "Creating end-to-end solutions from database to user interface",
    // },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and user experience",
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "Go",
    "React",
    "Next.js",
    "Node.js",
    "Docker",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "TensorFlow",
    "PyTorch",
    "Microservices",
    "CI/CD",
    "System Design",
  ],
}

export const experiencePageData = {
  title: "Experience",
  shortText: "Over a decade of experience building software solutions across various industries and technologies.",
}


export const experiences = [
  {
    title: "*****",
    company: "*****",
    location: "Remote",
    period: "06/2021 - Present",
    type: "*****",
    description: `- Built initial prototypes to validate concepts quickly, then transitioned them into production-ready solutions within a robust framework to ensure scalability and maintainability.

    - Contributed to foundational components of the core system architecture, enabling higher-level functionality and extensibility across the platform.

    - Engineered large-scale data migration workflows involving complex multi-format datasets, including the transformation and structured extraction of spreadsheet-based information.

    - Developed custom pipelines and tools to automate conversion, ensure accuracy, and handle edge cases at scale.

    - Built post-migration debugging and correction utilities to accelerate issue resolution.

    - Designed, implemented and improved automation scripts to handle backups, and staging setup, improving reliability and reducing manual effort in development workflows.
    ` ,
    technologies: ["GraphQL", "Postgres", "Typescript", "NodeJS", "MikroORM", "Golang", "*****"],
  },
  {
    title: "Programmer Assistant",
    company: "University of Human Development",
    location: "On-Site",
    period: "10/2019 - 9/2022",
    type: "Full-time",
    description:
      "Taught and assisted in practical classes covering a range of subjects, including Networks, Object-Oriented Programming, Algorithms, and Cybersecurity.",
    technologies: ["Java", "Android SDK", "Wordpress", "RDBMS", "Oracle DB", "Kali-Linux",
      "OOP", "Data Structures & Advanced Data Structures", "PHP", "CSS/HTML"],
  },
  {
    title: "Software Developer, IT Technician",
    company: "Self Employed",
    location: "Iraqi Kurdistan",
    period: "06/2012 - 09/2019",
    type: "Full-time",
    description:
      "Provided freelance application development services and offered technical support by troubleshooting computer and communication device issues.",
    technologies: [],
  },
  {
    title: "Software Engineer",
    company: "KnowledgeFlow BVBA",
    location: "Remote",
    period: "02/2018 - 07/2018",
    type: "Erasmus+ Blended AIM",
    description:
      "Contributed to chatbot development and API integration using Microsoft Bot Builder, Node.js, and related frameworks, with hands-on work in testing, debugging, and Microsoft LUIS. Collaborated as part of the Erasmus Blended AIM program (2018).",
    technologies: ["JavaScript", "LUIS", "KF API", "Azure"],
  },
]

export const projectsPageData = {
  title: "Featured Projects",
  shortText: "A selection of projects showcasing my expertise in various technologies and domains. For more details, please check my",
  linkLabel: "LinkedIn profile",
}

export const projects = [
  {
    title: "AI-Powered Missing Person Finder",
    description:
      "Advanced machine learning system for finding and reporting missing people using computer vision and facial recognition technology.",
    technologies: ["Python", "OpenCV", "Flask", "PostgreSQL"],
    type: "AI/ML",
    links: {
      code: "https://github.com/RawandKurdy/hackasuly-2019-face-recognition",
      // demo: "#",
    },
    image: "/ai-facial-recognition-dashboard.png",
    date: "2019-09-01",
  },
  {
    title: "Ella - Intelligent Chatbot",
    description:
      "Smart chatbot built using Microsoft's BotBuilder and LUIS with Azure integration. Features KnowledgeFlow as knowledge source for contextual responses.",
    technologies: ["Javascript", "Bot Framework", "LUIS", "Azure", "Cognitive Services"],
    type: "Concept",
    links: {
      code: "https://b-aim-knowledgeflow.github.io",
      website: "https://www.knowledgeflow.io",
      demo: "https://ella.netlify.app",
    },
    image: "",
    date: "2018-07-01",
  },
  {
    title: "eDoctor - Medical Management System",
    description:
      "Comprehensive all-in-one doctor management system for clinics and doctors. Handles patient records, appointments, and medical history.",
    technologies: ["Java", "JavaFX", "PHP", "MySQL"],
    type: "Web/Desktop App",
    links: {
      code: "https://github.com/RawandKurdy/eDoctor",
    },
    image: "",
    date: "2018-06-01",
  },
  {
    title: "iPlant - Plant Growth Tracker",
    description:
      "Android application for tracking plant growth and development with beautiful UI. Extendable with plant identification and care recommendations.",
    technologies: ["Java", "Android SDK", "SQLite", "Material Design"],
    type: "Mobile App",
    links: {
      code: "https://github.com/RawandKurdy/iPlant",
    },
    image: "",
    date: "2018-04-01",
  },
  {
    title: "Toferba - Kurdish Learning Platform",
    description:
      "Multiplatform application for learning the Kurdish alphabet and pronunciation using Flash technologies and interactive UI.",
    technologies: ["ActionScript", "Flash", "XML", "Audio Processing"],
    type: "Educational",
    links: {
      website: "https://toferba.en.uptodown.com/android",
    },
    image: "/kurdish-alphabet-app.png",
    date: "2018-01-01",
  },
]

export const contactPageData = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Location",
    value: "Iraqi Kurdistan",
    href: null,
  },
  {
    label: "Available for",
    value: "Remote Work & Freelance",
    href: null,
  },
]

export const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.links.github,
  },
  {
    label: "LinkedIn",
    href: personalInfo.links.linkedin,
  },
  {
    label: "Resume/CV",
    href: personalInfo.links.resume,
  },
]

export const siteConfig = {
  copyright: `Copyright ©${new Date().getFullYear()} Rawand Farhad`,
  createdWith: null,
  // createdWith: {
  //   name: "",
  //   url: "",
  // },
}
