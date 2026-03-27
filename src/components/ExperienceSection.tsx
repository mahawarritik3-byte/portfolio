import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <Briefcase size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-mono font-bold text-foreground text-base">Web Development Intern</h3>
                <span className="font-mono text-xs text-muted-foreground">15 Days</span>
              </div>
              <p className="font-mono text-sm text-accent mb-4">Kistechno Software Pvt. Ltd.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                  <p className="font-mono text-sm text-muted-foreground">
                    Learned and worked with: HTML, CSS, JavaScript, Bootstrap, PHP, MySQL
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                  <p className="font-mono text-sm text-muted-foreground">
                    Built real-world mini projects during the internship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
