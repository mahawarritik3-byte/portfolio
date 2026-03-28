import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Swami Keshvanand Institute of Technology, Jaipur",
    period: "2024 – 2028",
    detail: "Current CGPA: 7.8 (till 3rd semester)",
    current: true,
  },
  {
    degree: "Class 12th (Senior Secondary)",
    institution: "Kota, Rajasthan",
    period: "2024",
    detail: "Scored: 81.40%",
    current: false,
  },
   {
    degree: "Class 10th (Secondary)",
    institution: "Kota, Rajasthan",
    period: "2022",
    detail: "Scored: 73.40%",
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Education</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Academic Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start gap-4 mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pl-14 md:pl-0`}>
                <div className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 ${edu.current ? "border-primary/40" : ""}`}>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted-foreground">
                    <Calendar size={12} className="text-accent" />
                    {edu.period}
                    {edu.current && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px]">Current</span>
                    )}
                  </div>
                  <h3 className="font-mono font-bold text-foreground text-sm mb-1">{edu.degree}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="font-mono text-xs text-accent">{edu.detail}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <GraduationCap size={10} className="text-primary" />
              </div>

              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
