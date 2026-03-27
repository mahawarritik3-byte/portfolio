import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
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
      // Using your unique code: https://formspree.io/f/mee
      const response = await fetch("https://formspree.io/f/meepjjkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Show success screen for 2.5 seconds, then refresh
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
    <section id="contact" className="py-24 px-4 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#40e0d0] font-mono text-sm uppercase tracking-widest">Connect</span>
          <h2 className="text-5xl md:text-7xl font-bold font-mono text-white mt-4 mb-8">
            Let's <span className="text-[#ff40b4]">Talk</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-5 text-gray-400 font-mono text-sm">
              <Mail className="text-[#40e0d0]" size={20} />
              <span>mahawarritik3@gmail.com</span>
            </div>
            <div className="flex items-center gap-5 text-gray-400 font-mono text-sm">
              <MapPin className="text-[#ff40b4]" size={20} />
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Form with Success Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0d0d0d] border border-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Success Screen Animation */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0d0d0d] z-20 flex flex-col items-center justify-center text-center p-6"
              >
                <CheckCircle2 size={70} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2 font-mono">Sent Successfully!</h3>
                <p className="text-gray-400 text-sm font-mono">Page refreshing in a moment...</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-800 rounded-2xl p-4 text-white focus:border-[#40e0d0] outline-none transition-all placeholder:text-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gray-800 rounded-2xl p-4 text-white focus:border-[#40e0d0] outline-none transition-all placeholder:text-gray-700"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-800 rounded-2xl p-4 text-white focus:border-[#40e0d0] outline-none transition-all placeholder:text-gray-700"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-800 rounded-2xl p-4 text-white focus:border-[#40e0d0] outline-none transition-all placeholder:text-gray-700 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-[#ff40b4] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(255,64,180,0.4)] transition-all disabled:opacity-50"
            >
              {status === "sending" ? (
                <><Loader2 className="animate-spin" size={20} /> Sending...</>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === "error" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 text-xs font-mono justify-center">
                <AlertCircle size={14} /> Something went wrong. Check Formspree ID.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;