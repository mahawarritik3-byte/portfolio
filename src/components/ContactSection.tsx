import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } else {
        const errorData = await response.json();
        console.error("Formspree Error:", errorData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,transparent_35%)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Get In Touch
          </span>

          <h2 className="text-5xl md:text-7xl font-bold font-mono text-white mt-4 mb-8 leading-tight">
            Let's Build <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Something Great
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
            Have a project, opportunity, or idea? Feel free to contact me.
            I’ll try to respond as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 text-gray-300 font-mono text-sm">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Mail className="text-cyan-400" size={20} />
              </div>
              <span>mahawarritik3@gmail.com</span>
            </div>

            <div className="flex items-center gap-5 text-gray-300 font-mono text-sm">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <MapPin className="text-purple-400" size={20} />
              </div>
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl overflow-hidden"
        >
          {/* Top Border Glow */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          {/* Success Screen */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#050816]/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-6"
              >
                <CheckCircle2 size={70} className="text-green-400 mb-4" />

                <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                  Sent Successfully!
                </h3>

                <p className="text-gray-400 text-sm font-mono">
                  Page refreshing in a moment...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0f172a]/80 border border-white/10 rounded-2xl p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] outline-none transition-all placeholder:text-gray-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0f172a]/80 border border-white/10 rounded-2xl p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] outline-none transition-all placeholder:text-gray-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-[#0f172a]/80 border border-white/10 rounded-2xl p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] outline-none transition-all placeholder:text-gray-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-[#0f172a]/80 border border-white/10 rounded-2xl p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] outline-none transition-all placeholder:text-gray-500 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-red-400 text-xs font-mono justify-center"
              >
                <AlertCircle size={14} />
                Something went wrong. Check Formspree ID.
              </motion.div>
            )}
          </form>

          <p className="text-center text-gray-500 text-sm mt-6 font-mono">
            Designed & Developed by{" "}
            <span className="text-cyan-400">Ritik Mahawar</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
