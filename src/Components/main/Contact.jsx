import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Github, Linkedin, Youtube, Loader2, CheckCircle } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const SOCIAL_LINKS = [
    { id: "github", icon: <Github size={20} />, link: "https://github.com/Ishikaapal", label: "Github" },
    { id: "linkedin", icon: <Linkedin size={20} />, link: "https://linkedin.com/in/ishikaapal", label: "LinkedIn" },
    { id: "youtube", icon: <Youtube size={20} />, link: "https://youtube.com/@IPTechWarriors", label: "YouTube" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/mkoqzbga", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        e.target.reset(); // Clear form on success

        // RESET: Change text back to "Send Message" after 3 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 3000);

      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Oops! There was a problem submitting your form");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
      
      // Auto-clear error message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <section className="mainContainer">
      <div className="insideContainer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- Left Side: Info & Presence --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 text-italic font-light">Connect</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed max-w-md">
                Have a project in mind or just want to chat about tech? I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-accent" />, label: "Email", value: "ishh.tech08@gmail.com" },
                { icon: <MapPin className="text-accent" />, label: "Location", value: "India, Remote" },
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-4 bg-text-primary/5 border border-text-primary/10 rounded-2xl group-hover:border-accent/50 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-secondary uppercase tracking-widest font-bold">{info.label}</p>
                    <p className="text-text-primary font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-text-primary/5 border border-text-primary/10 rounded-2xl text-secondary hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 backdrop-blur-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-text-primary/[0.03] backdrop-blur-xl border border-text-primary/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary ml-1">Your Name</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary ml-1">Email Address</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary ml-1">Subject</label>
                  <input 
                    name="subject"
                    required
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary ml-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your vision..."
                    className="w-full bg-text-primary/5 border border-text-primary/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  disabled={status.loading}
                  whileHover={!status.loading ? { scale: 1.02 } : {}}
                  whileTap={!status.loading ? { scale: 0.98 } : {}}
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-accent to-primary p-px rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="bg-primary group-hover:bg-transparent transition-colors duration-300 rounded-[calc(1rem-1px)] px-8 py-4 flex items-center justify-center gap-3">
                    {status.loading ? (
                      <Loader2 className="animate-spin text-background" size={20} />
                    ) : status.success ? (
                      <CheckCircle className="text-background" size={20} />
                    ) : (
                      <Send size={18} className="text-background group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    )}
                    <span className="text-background">
                      {status.loading ? "Sending..." : status.success ? "Message Sent!" : "Send Message"}
                    </span>
                  </div>
                </motion.button>
                
                {status.error && (
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-red-500 text-center text-sm font-medium mt-2"
                  >
                    {status.error}
                  </motion.p>
                )}
              </form>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-md flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">Available for new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;