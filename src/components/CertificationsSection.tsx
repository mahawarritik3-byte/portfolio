import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Active Listening Skills for Students",
    issuer: "Infosys Spring Boards",
    date: "2024",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/listening.png", 
    link: "https://drive.google.com/file/d/1sGpqc0dYVHGgjSfzfb5vdeUp_3lRm2Zp/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Web Development Internship",
    issuer: "Kistechno Software Pvt. Ltd.",
    date: "2025",
    // Change your PDF to a PNG/JPG first, then use this path:
    image: "/internship.png", 
    link: "https://drive.google.com/file/d/12mRINSqvWwRR2ts2bvAtkjzj7f4pUcIL/view?usp=sharing",
  },
  {
    title: "Fundamentals of cyber security",
    issuer: "Infosys Spring Boards",
    date: "2025",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/cyber.png", 
    link: "https://drive.google.com/file/d/1vczZkHpvX2AtkvywwNkQ590Qbq5hWcW9/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Fundamentals of web development",
    issuer: "Infosys Spring Boards",
    date: "2024",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/webdev.png", 
    link: "https://drive.google.com/file/d/1vr2hmsH8yM148JrL4Muu4S_NXQmOd1k7/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Participation Certificate - 2025",
    issuer: "Smart India Hackathon ",
    date: "2025",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/SIH2025.png", 
    link: "https://drive.google.com/file/d/16Q6TZ2KCs-Kr_e8fBOcbYkRpB8R8IUNC/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Course completion certificate - NPTEL Problem Solving Through Programming In C",
    issuer: "NPTEL - ",
    date: "2026",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/nptelc.png", 
    link: "https://drive.google.com/file/d/1Y4Pha5zAJhtxBfcHO-67aO-aqWr28o1R/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Course completion certificate - NPTEL Programming in Modern C++",
    issuer: "NPTEL - ",
    date: "2026",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/nptelcpp.png", 
    link: "https://drive.google.com/file/d/19XSQpfalnJkJ1ECOrsstB5MccQOyaoVF/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Participation certificate - LMNHACKS 8.0",
    issuer: "LNMIIT",
    date: "2026",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/LMNIIT.png", 
    link: "https://drive.google.com/file/d/1n2m9EJadZnEhjq0JcTgEGbhSH-gITNmA/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "Problem Solving (Basic) certificate - HACKER RANK",
    issuer: "HACKER RANK",
    date: "2026",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/basic.png", 
    link: "https://drive.google.com/file/d/1L21CQ2c4tgrkAPS6zSMGlBha7FLdxj1O/view?usp=sharing", // Update with actual Coursera link if you have it
  },
  {
    title: "SQL (Basic) certificate - HACKER RANK",
    issuer: "HACKER RANK",
    date: "2026",
    // Matches the "py.png" file seen in your public folder screenshot
    image: "/sqlbasic.png", 
    link: "https://drive.google.com/file/d/1HGNGuCfOppnD9E1THHfZKolE67b3m90b/view?usp=sharing", // Update with actual Coursera link if you have it
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
