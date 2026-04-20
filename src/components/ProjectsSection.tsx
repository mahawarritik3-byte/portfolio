import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { ExternalLink, Github, Mail, MessageCircle, Gamepad2, Joystick, Trophy, Play } from "lucide-react";
const projects = [
  {
    icon: Mail,
    title: "Newsletter System",
    description: "Developed a full-stack newsletter platform with email verification. Users can register and receive updates.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/mahawarritik3-byte/newsletter_system",
    demo: "https://newslettergo.ct.ws"
  },
  {
    icon: MessageCircle,
    title: "Chatting Application",
    description: "Built a real-time chat application. Implemented user communication system with backend support.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/your-username/chat-app-repo", // Replace with actual link
    demo: "https://your-chat-app-demo.com" // Replace with actual link
  },
   {
    icon: Gamepad2,
    title: "Game Application",
    description: "Game Zone is a fun arcade-style web app where you can play multiple mini-games like Tic-Tac-Toe, Snake, Memory, Flappy Bird, and Car Dodge—all in one place.",
    tech: ["⚛️ React", "🟦 TypeScript", "🎨 Tailwind CSS", "🔄 React Router", "⚡ React Query", "🎯 Lucide React (icons)"],
    github: "https://github.com/mahawarritik3-byte/GAME_ZONE", // Replace with actual link
    demo: "https://gamezone-jade.vercel.app/" // Replace with actual link
  },
  {
  icon: Brain,
  title: "QuizSphere",
  description: "QuizSphere is a modern quiz web application where users can test their knowledge across Math, Coding, and General Knowledge with timed tests, difficulty levels, and performance tracking.",
  tech: ["⚛️ React","🟦 TypeScript","🎨 Tailwind CSS","⚡ Vite","🔄 React Router","💾 LocalStorage"],
  github: "https://github.com/mahawarritik3-byte/QuizSphere",
  demo: "https://quizsphere-five.vercel.app/"
},
  ];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <project.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold font-mono text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground font-mono text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-accent border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {/* Dynamically call the github link from the array */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                {/* Dynamically call the demo link from the array */}
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
