import { motion } from "framer-motion";
import { GraduationCap, MapPin, Heart, Target } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CSE", detail: "SKIT, Jaipur (2024–2028)" },
  { icon: Target, label: "Goal", detail: "AI/ML Engineer" },
  { icon: MapPin, label: "Location", detail: "Jaipur, Rajasthan" },
  { icon: Heart, label: "Hobby", detail: "Playing Badminton" },
];

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Designing Solutions, Not Just Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
          >
            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed mb-4">
              I'm a B.Tech 2nd year Computer Science student at Swami Keshvanand Institute of Technology (SKIT), Jaipur. I am passionate about building web applications and exploring the field of Artificial Intelligence and Machine Learning.
            </p>
            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              My goal is to become a skilled AI/ML Engineer. I enjoy turning ideas into real-world projects and constantly learning new technologies. In my free time, I enjoy playing badminton.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-foreground">{item.label}</h4>
                  <p className="font-mono text-xs text-muted-foreground">{item.detail}</p>
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
