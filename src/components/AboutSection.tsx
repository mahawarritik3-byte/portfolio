import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Heart,
  Target,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "B.Tech CSE",
    detail: "SKIT, Jaipur (2024–2028)",
    color: "text-cyan-300",
    border: "border-cyan-300/20",
  },
  {
    icon: Target,
    label: "Goal",
    detail: "AI/ML Engineer",
    color: "text-purple-300",
    border: "border-purple-300/20",
  },
  {
    icon: MapPin,
    label: "Location",
    detail: "Jaipur, Rajasthan",
    color: "text-pink-300",
    border: "border-pink-300/20",
  },
  {
    icon: Heart,
    label: "Hobby",
    detail: "Playing Badminton",
    color: "text-cyan-300",
    border: "border-cyan-300/20",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 bg-[#050816]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.2),transparent_35%),linear-gradient(135deg,#050816,#0f172a,#111827)]" />

      {/* Animated gradient layer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-35 bg-[linear-gradient(120deg,rgba(168,85,247,0.22),rgba(34,211,238,0.18),rgba(244,114,182,0.14),rgba(168,85,247,0.22))] bg-[length:300%_300%]"
      />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#67e8f9_1px,transparent_1px),linear-gradient(to_bottom,#c084fc_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Moving blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{ duration: 11, repeat: Infinity }}
        className="absolute top-24 left-[8%] w-52 h-52 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 13, repeat: Infinity }}
        className="absolute bottom-20 right-[8%] w-56 h-56 rounded-full bg-purple-500/25 blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"
      />

      {/* Floating small elements */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden lg:flex absolute top-[22%] left-[10%] z-10 items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-300/20 shadow-[0_0_35px_rgba(34,211,238,0.12)]"
      >
        <BrainCircuit size={16} className="text-cyan-300" />
        <span className="font-mono text-xs text-slate-200">AI Mindset</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hidden lg:flex absolute bottom-[18%] right-[10%] z-10 items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-300/20 shadow-[0_0_35px_rgba(168,85,247,0.12)]"
      >
        <Sparkles size={16} className="text-purple-300" />
        <span className="font-mono text-xs text-slate-200">Creative Builder</span>
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 text-cyan-200 font-mono text-sm uppercase tracking-widest border border-cyan-300/20 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <Sparkles size={15} />
            About Me
          </span>

          <h2 className="text-3xl md:text-5xl font-bold font-mono mt-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Designing Solutions, Not Just Code
          </h2>

          <p className="mt-4 text-slate-400 font-mono text-sm max-w-2xl mx-auto">
            A quick look at who I am, what I am learning, and what I am building
            toward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-cyan-300/20 rounded-3xl p-6 md:p-8 shadow-[0_0_55px_rgba(34,211,238,0.12)]"
          >
            {/* Card shine */}
            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent rotate-12"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-300/10 border border-cyan-300/20 mb-5">
                <BrainCircuit size={16} className="text-cyan-300" />
                <span className="font-mono text-xs text-cyan-100">
                  AI/ML + Full Stack
                </span>
              </div>

              <p className="text-slate-300 font-mono text-sm md:text-base leading-relaxed mb-4">
                I'm a B.Tech 2nd year Computer Science student at Swami
                Keshvanand Institute of Technology (SKIT), Jaipur. I am
                passionate about building web applications and exploring the
                field of Artificial Intelligence and Machine Learning.
              </p>

              <p className="text-slate-300 font-mono text-sm md:text-base leading-relaxed">
                My goal is to become a skilled AI/ML Engineer. I enjoy turning
                ideas into real-world projects and constantly learning new
                technologies. In my free time, I enjoy playing badminton.
              </p>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-xl border ${item.border} rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_35px_rgba(34,211,238,0.08)] hover:shadow-[0_0_45px_rgba(168,85,247,0.2)] transition-all`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <div
                  className={`relative z-10 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border ${item.border}`}
                >
                  <item.icon size={19} className={item.color} />
                </div>

                <div className="relative z-10">
                  <h4 className="font-mono text-sm font-semibold text-slate-100">
                    {item.label}
                  </h4>
                  <p className="font-mono text-xs text-slate-400 mt-1">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
