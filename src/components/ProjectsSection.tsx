import { motion } from "framer-motion";
import {
  Brain,
  ExternalLink,
  Github,
  Mail,
  Gamepad2,
  FileText,
} from "lucide-react";

type Project = {
  icon?: any;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
};

const projects: Project[] = [
  {
    icon: Mail,
    title: "Newsletter System",
    image: "/newsletter.png",
    description: "Developed a full-stack newsletter platform with email verification, subscriber management, and admin-side message broadcasting.",
    tech: [
  "🌐 HTML5",
  "🎨 CSS3",
  "⚡ JavaScript",
  "🐘 PHP",
  "🗄️ MySQL",
  "📧 PHPMailer",
  "☁️ InfinityFree Hosting",
],
    github: "https://github.com/mahawarritik3-byte/newsletter_system",
    demo: "https://newslettergo.ct.ws",
  },
  {
    icon: Gamepad2,
    title: "Game Application",
    image: "/game-zone.png",
    description:
      "Built an arcade-style web app with multiple mini-games like Tic-Tac-Toe, Snake, Memory, Flappy Bird, and Car Dodge.",
    tech: [
      "⚛️ React",
      "🟦 TypeScript",
      "🎨 Tailwind CSS",
      "🔄 React Router",
      "⚡ React Query",
      "🎯 Lucide React",
    ],
    github: "https://github.com/mahawarritik3-byte/GAME_ZONE",
    demo: "https://gamezone-jade.vercel.app/",
  },
  {
    icon: Brain,
    title: "QuizSphere",
    image: "/quizsphere.png",
    description:
      "Built a modern quiz web app with timed tests, difficulty levels, and performance tracking across Math, Coding, and GK.",
    tech: [
      "⚛️ React",
      "🟦 TypeScript",
      "🎨 Tailwind CSS",
      "⚡ Vite",
      "🔄 React Router",
      "💾 LocalStorage",
    ],
    github: "https://github.com/mahawarritik3-byte/QuizSphere",
    demo: "https://quizsphere-five.vercel.app/",
  },
  {
    icon: FileText,
    title: "AI Resume Analyzer",
    image: "/resume-analyzer.png",
    description:
      "Built an AI-powered resume analyzer that matches resumes with job descriptions, calculates ATS score, detects missing skills, and gives improvement suggestions.",
    tech: [
      "⚛️ React",
      "⚡ Vite",
      "🐍 Python",
      "🚀 FastAPI",
      "🎨 CSS",
      "✨ Framer Motion",
      "☁️ Render",
      "▲ Vercel",
    ],
    github: "https://github.com/mahawarritik3-byte/Resume_analyzer",
    demo: "https://resume-analyzer-henna-ten.vercel.app/",
  },
  {
    icon: Mail,
    title: "Newswave Newsletter",
    image: "/newswave.png",
    description:
      "Built a newsletter web app with OTP-based subscribe/unsubscribe, email verification, subscriber management, and admin message broadcasting.",
    tech: [
  "🌐 HTML5",
  "🎨 CSS3",
  "⚡ JavaScript",
  "🧩 Bootstrap",
  "🐘 PHP",
  "🗄️ MySQL",
  "📧 PHPMailer",
  "☁️ InfinityFree Hosting",
],
    github: "https://github.com/mahawarritik3-byte/newsletter_newswave",
    demo: "https://newswave.infinityfreeapp.com/",
  },
  {
    icon: FileText,
    title: "ATS Resume Builder",
    image: "/publicats-builder.png",
    description:
      "Built an ATS-friendly resume builder with live preview, editable sections, grouped skills, and downloadable PDF support.",
    tech: [
      "⚛️ React",
      "🎨 Tailwind CSS",
      "📄 HTML2PDF.js",
      "🎯 Lucide React Icons",
      "⚡ Vite",
      "🧩 JavaScript",
    ],
    github: "https://github.com/mahawarritik3-byte/ats_resume_builder",
    demo: "https://ats-resume-builder-mocha.vercel.app/",
  },
  {
  icon: Users,
  title: "Employee Management System",
  image: "/ems.png",
  description:
    "Developed a full-stack Employee Management System with employee records, department and designation management, attendance tracking, leave management, payroll, and secure admin authentication.",
  tech: [
    "🌐 HTML5",
    "🎨 CSS3",
    "⚡ JavaScript",
    "🐘 PHP",
    "🗄️ MySQL",
    "📧 PHPMailer",
    "☁️ InfinityFree Hosting",
  ],
    github: "https://github.com/mahawarritik3-byte/Employee-Management-System",
    demo: "https://emp-track.ct.ws/",
},
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group"
            >
              {/* Project Screenshot */}
              <div className="relative w-full h-48 overflow-hidden border-b border-border">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  {project.icon && (
                    <project.icon size={22} className="text-accent" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-mono text-foreground mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-mono text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-accent border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
