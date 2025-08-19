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
    image: "/modern-chatbot-interface.png",
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
]

