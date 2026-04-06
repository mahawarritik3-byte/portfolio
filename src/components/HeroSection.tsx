import React from "react";
import { ArrowRight, Github, Linkedin, Mail, Download, Code } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/mahawarritik3-byte", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/ritik-mahawar-b313a6282/", 
    label: "LinkedIn" 
  },
  { 
    icon: Code, 
    href: "#", 
    label: "LeetCode" 
  },
  { 
    icon: Mail, 
    href: "mailto:mahawarritik3@gmail.com", 
    label: "Email" 
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 glow-green pointer-events-none" />

      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 left-[10%] w-40 h-40 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary font-mono text-sm mb-6 border border-primary/20">
            B.Tech CSE Student
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight mb-4">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <span className="gradient-text">RITIK</span>
          </h1>

          <p className="text-muted-foreground font-mono text-sm sm:text-base mb-4 leading-relaxed max-w-lg">
            Aspiring AI/ML Engineer & Full Stack Developer. Passionate about building web applications and exploring Artificial Intelligence.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border">
              <span className="text-primary font-mono font-bold text-lg">SKIT</span>
              <span className="text-muted-foreground font-mono text-xs">Jaipur</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-mono text-sm hover:bg-card transition-colors"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="icon-circle flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary transition-all text-muted-foreground hover:text-primary" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right profile image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-primary/30 flex items-center justify-center">
              <div className="w-48 h-48 lg:w-60 lg:h-60 rounded-full border-2 border-accent/30 flex items-center justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                  
                  {/* ✅ YOUR IMAGE ADDED HERE */}
                  <img 
                    src="https://drive.google.com/file/d/1igNscFH71WaDJO38mR0WMvGI83QLwJhw/view?usp=sharing"
                    alt="Ritik Mahawar"
                    className="w-full h-full object-cover rounded-full"
                  />

                </div>
              </div>
            </div>

            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4"
            >
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
