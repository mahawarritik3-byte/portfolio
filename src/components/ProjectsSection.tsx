import { motion } from "framer-motion";
import { ExternalLink, Github, Mail, MessageCircle } from "lucide-react";

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
