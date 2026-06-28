import React from "react";
import {
  Instagram,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Sparkles,
  MapPin,
  Cpu,
  BrainCircuit,
  Terminal,
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
  {
  icon: Instagram,
  href: "https://www.instagram.com/ritikmahawar011/",
  label: "Instagram",
},
];

const floatingSkills = [
  {
    icon: Cpu,
    text: "React",
    className: "top-[18%] left-[7%]",
    delay: 0,
  },
  {
    icon: BrainCircuit,
    text: "AI/ML",
    className: "top-[28%] right-[8%]",
    delay: 0.8,
  },
  {
    icon: Terminal,
    text: "C++",
    className: "bottom-[20%] left-[10%]",
    delay: 1.3,
  },
  {
    icon: Code,
    text: "DSA",
    className: "bottom-[16%] right-[12%]",
    delay: 1.8,
  },
];

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 bg-[#050816]"
    >
      {/* Main animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,#050816,#0f172a,#111827)]" />

      {/* Moving gradient layer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,rgba(168,85,247,0.25),rgba(34,211,238,0.2),rgba(244,114,182,0.18),rgba(168,85,247,0.25))] bg-[length:300%_300%]"
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#67e8f9_1px,transparent_1px),linear-gradient(to_bottom,#c084fc_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Moving light beam */}
      <motion.div
        animate={{ x: ["-100%", "120%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent rotate-12"
      />

      {/* Big decorative blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-[8%] w-52 h-52 rounded-full bg-purple-500/30 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 13, repeat: Infinity }}
        className="absolute bottom-20 left-[8%] w-56 h-56 rounded-full bg-cyan-400/25 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"
      />

      {/* Floating skill cards */}
      {floatingSkills.map((item) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -18, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            opacity: { delay: item.delay, duration: 0.5 },
            y: {
              delay: item.delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              delay: item.delay,
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`hidden lg:flex absolute ${item.className} z-10 items-center gap-2 px-4 py-2 rounded-2xl border border-cyan-300/20 bg-white/5 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,0.12)]`}
        >
          <item.icon size={16} className="text-cyan-300" />
          <span className="font-mono text-xs text-slate-200">
            {item.text}
          </span>
        </motion.div>
      ))}

      <div className="relative z-20 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 text-cyan-200 font-mono text-sm mb-6 border border-cyan-300/20 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
          >
            <Sparkles size={15} />
            B.Tech CSE Student
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight mb-5">
            <span className="text-slate-100">Hello, I'm</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:250%_250%]"
            >
              RITIK
            </motion.span>
          </h1>

          <p className="text-slate-300 font-mono text-sm sm:text-base mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Aspiring AI/ML Engineer & Full Stack Developer. Passionate about
            building modern web applications, solving real-world problems, and
            exploring Artificial Intelligence.
          </p>

          {/* Info cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-7">
            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-cyan-300/20 shadow-sm"
            >
              <span className="text-cyan-300 font-mono font-bold text-lg">
                SKIT
              </span>
              <span className="text-slate-300 font-mono text-xs">Jaipur</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-purple-300/20 shadow-sm"
            >
              <MapPin size={15} className="text-purple-300" />
              <span className="text-slate-300 font-mono text-xs">
                Rajasthan, India
              </span>
            </motion.div>
          </div>

          {/* Premium Action Buttons */}
          <div className="relative mb-8">
            <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.12)]">
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                {/* View Projects */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => scrollToSection("#projects")}
                  className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-mono text-sm font-semibold shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:shadow-[0_0_55px_rgba(168,85,247,0.55)] transition-all"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Explore Projects</span>
                  <ArrowRight
                    size={17}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>

                {/* Download Resume */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  href="/ritik@resume.pdf"
                  download
                  className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-cyan-300/30 text-cyan-100 font-mono text-sm font-semibold hover:bg-cyan-300/10 hover:border-cyan-300/60 shadow-[0_0_25px_rgba(34,211,238,0.12)] hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] transition-all"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Download size={17} className="relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </motion.a>

                {/* Contact Me */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  href="mailto:mahawarritik3@gmail.com"
                  className="relative overflow-hidden group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-300/30 text-pink-100 font-mono text-sm font-semibold hover:border-pink-300/60 shadow-[0_0_25px_rgba(244,114,182,0.12)] hover:shadow-[0_0_45px_rgba(244,114,182,0.35)] transition-all"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Mail size={17} className="relative z-10" />
                  <span className="relative z-10">Contact Me</span>
                </motion.a>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-4 text-center md:text-left text-xs font-mono text-slate-400"
            >
              Open to internships, collaborations, and project opportunities.
            </motion.p>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-cyan-300/20 bg-white/5 backdrop-blur-sm text-slate-300 hover:text-cyan-300 hover:border-cyan-300/60 transition-all hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
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
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -left-10 z-20 px-4 py-2 rounded-2xl bg-white/10 border border-cyan-300/20 shadow-xl backdrop-blur-md"
            >
              <p className="font-mono text-xs text-cyan-200">
                AI/ML Enthusiast
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], rotate: [1, -1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 -right-10 z-20 px-4 py-2 rounded-2xl bg-white/10 border border-purple-300/20 shadow-xl backdrop-blur-md"
            >
              <p className="font-mono text-xs text-purple-200">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Image rings */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyan-300/45"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-purple-300/45"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-pink-300/25"
              />

              <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full border-2 border-cyan-300/35 p-3 bg-white/5 backdrop-blur-md shadow-[0_0_70px_rgba(34,211,238,0.22)]">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-300/25">
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.9)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16"
              >
                <div className="absolute left-0 top-1/2 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_22px_rgba(244,114,182,0.8)]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
