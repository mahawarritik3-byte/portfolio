import { motion } from "framer-motion";
import { Code2, Globe, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C", "C++", "Java (Basics)", "Python","Object Oriented Programming (OOPS)"],
    color: "text-primary",
    bg: "bg-primary/15",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js"
    ],
    color: "text-accent",
    bg: "bg-accent/15",
  },
  {
    icon: Brain,
    title: "AI/ML (Beginner)",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "OpenCV"
    ],
    color: "text-primary",
    bg: "bg-primary/15",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Git", "GitHub", "Streamlit"],
    color: "text-accent",
    bg: "bg-accent/15",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${cat.bg} flex items-center justify-center`}>
                  <cat.icon size={18} className={cat.color} />
                </div>
                <h3 className="font-mono font-bold text-foreground text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-muted font-mono text-xs text-foreground border border-border hover:border-accent/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
