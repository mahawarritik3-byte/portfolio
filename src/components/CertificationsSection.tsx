import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Web Development Internship",
    issuer: "Kistechno Software Pvt. Ltd.",
    date: "2025",
    // Change your PDF to a PNG/JPG first, then use this path:
    image: "/internship.png", 
    link: "https://drive.google.com/file/d/12mRINSqvWwRR2ts2bvAtkjzj7f4pUcIL/view?usp=sharing",
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "2025",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/py.png", 
    link: "https://drive.google.com/file/d/12Pgr1TZqQqJYGTniUJiJi9C__98MxqRi/view?usp=sharing", // Update with actual Coursera link if you have it
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Certifications
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono gradient-text mt-2">
            Licenses & Certificates
          </h2>
          <p className="text-muted-foreground font-mono text-sm mt-3 max-w-lg mx-auto">
            Courses and certifications I've completed to sharpen my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors"
            >
              {/* Certificate image */}
              <div className="relative h-40 sm:h-48 bg-muted/30 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <Award size={16} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Certificate info */}
              <div className="p-5">
                <h3 className="font-mono font-bold text-foreground text-sm mb-1">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mb-3">
                  {cert.issuer} · {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-accent transition-colors"
                >
                  View Credential <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
