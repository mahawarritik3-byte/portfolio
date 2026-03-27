import { motion } from "framer-motion";
import { Trophy, Award, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "LNMIIT LMN Hacks Hackathon",
    description: "Participated and competed with talented developers from across the country.",
  },
  {
    icon: Award,
    title: "Smart India Hackathon (SIH)",
    description: "Participated in one of India's biggest hackathons organized by the Government of India.",
  },
  {
    icon: FileCheck,
    title: "Internship Certificate",
    description: "Received certificate for Web Development internship at Kistechno Software Pvt. Ltd.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Achievements</span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Certifications & Awards
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-accent/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-mono font-bold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
