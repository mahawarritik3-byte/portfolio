import { Home, User, GraduationCap, Briefcase, Code2, FolderOpen, Award, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Award, label: "Achievements", href: "#achievements" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const SideNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <motion.nav
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-2 flex-col gap-1 hidden md:flex"
      >
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-icon group relative" title={item.label}>
            <item.icon size={18} />
            <span className="absolute right-14 bg-card border border-border text-foreground text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </a>
        ))}
      </motion.nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 right-4 z-[60] w-10 h-10 rounded-lg bg-card/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors font-mono text-lg"
                >
                  <item.icon size={20} />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNav;
