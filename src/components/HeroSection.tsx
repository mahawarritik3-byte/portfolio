import React from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Sparkles,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/mahawarritik3-byte",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ritik-mahawar-b313a6282/",
    label: "LinkedIn",
  },
  {
    icon: Code,
    href: "https://leetcode.com/u/ritikmahawar011/",
    label: "LeetCode",
  },
  {
    icon: Mail,
    href: "mailto:mahawarritik3@gmail.com",
    label: "Email",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 glow-green pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[8%] w-40 h-40 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 left-[8%] w-48 h-48 rounded-full bg-accent/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary font-mono text-sm mb-6 border border-primary/20 shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          >
            <Sparkles size={15} />
            B.Tech CSE Student
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight mb-5">
            <span className="text-foreground">Hello, I'm</span>
            <br />
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="gradient-text bg-[length:200%_200%]"
            >
              RITIK
            </motion.span>
          </h1>

          <p className="text-muted-foreground font-mono text-sm sm:text-base mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Aspiring AI/ML Engineer & Full Stack Developer. Passionate about
            building modern web applications, solving real-world problems, and
            exploring Artificial Intelligence.
          </p>

          {/* Info cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-sm">
              <span className="text-primary font-mono font-bold text-lg">SKIT</span>
              <span className="text-muted-foreground font-mono text-xs">Jaipur</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-sm">
              <MapPin size={15} className="text-primary" />
              <span className="text-muted-foreground font-mono text-xs">
                Rajasthan, India
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(34,197,94,0.25)] hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] hover:-translate-y-1"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="/ritik@resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-mono text-sm hover:bg-card hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group icon-circle flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card/70 backdrop-blur-sm hover:border-primary transition-all text-muted-foreground hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right profile image */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative">
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-8 z-20 px-4 py-2 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-sm"
            >
              <p className="font-mono text-xs text-muted-foreground">
                AI/ML Enthusiast
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-8 z-20 px-4 py-2 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-sm"
            >
              <p className="font-mono text-xs text-muted-foreground">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Image rings */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/40"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-accent/40"
              />

              <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full border-2 border-primary/30 p-3 bg-card/40 backdrop-blur-sm shadow-[0_0_60px_rgba(34,197,94,0.18)]">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-border">
                  <img
                    src="/ritik_image.webp"
                    alt="Ritik Mahawar"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
