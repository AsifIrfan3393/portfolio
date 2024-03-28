import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Copy, Send } from "lucide-react";
import { contact } from "@/data";
import emailjs from "@emailjs/browser";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const copy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied(null), 1800);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const sendMail = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setStatusMsg(null);

    // env vars (define these in .env.local)
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS env vars missing");
      setStatusMsg("Email service not configured. Please contact admin.");
      return;
    }

    // template params (match these with your EmailJS template variables)
    const templateParams = {
      from_name: form.name || "Anonymous",
      from_email: form.email || "no-reply@example.com",
      message: form.message || "",
      // Either set the recipient in the EmailJS template or pass a to_email here
      to_email: "asifi.it.23@nitj.ac.in",
    };

    try {
      setSending(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatusMsg("Message sent — thanks! I'll reply within 24–48 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatusMsg("Failed to send. Please try again or email me directly.");
    } finally {
      setSending(false);
      // clear status after a while
      setTimeout(() => setStatusMsg(null), 6000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative z-40 py-24 bg-gradient-to-b from-white/60 to-gray-50 dark:from-black-900 dark:to-black-100"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="pointer-events-none absolute left-4 top-6 w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-300 to-pink-300 blur-3xl mix-blend-soft-light"
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0.04 }}
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="pointer-events-none absolute right-6 bottom-8 w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-300 to-cyan-300 blur-3xl mix-blend-soft-light"
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={item} className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold">Get in touch</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m open to opportunities and collaborations. Pick a method below — or send a message using the form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Big contact cards */}
          <motion.div variants={item} className="space-y-6">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative z-10 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4">Direct contact</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <a
                        href={`mailto:asifi.it.23@nitj.ac.in`}
                        className="text-sm font-medium underline-offset-4 underline"
                        aria-label={`Email asifi.it.23@nitj.ac.in`}
                      >
                        asifi.it.23@nitj.ac.in
                      </a>
                      <button
                        className="ml-auto text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800"
                        onClick={() => copy("asifi.it.23@nitj.ac.in", "email")}
                        aria-label="Copy email"
                      >
                        <Copy className="w-4 h-4 inline-block mr-1" />
                        {copied === "email" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">I reply usually within 24–48 hours.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-sm font-medium underline-offset-4 underline"
                        aria-label={`Call ${contact.phone}`}
                      >
                        {contact.phone}
                      </a>
                      <button
                        className="ml-auto text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800"
                        onClick={() => copy(contact.phone, "phone")}
                        aria-label="Copy phone"
                      >
                        <Copy className="w-4 h-4 inline-block mr-1" />
                        {copied === "phone" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available on WhatsApp and calls (India +91).</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline-offset-4 underline"
                      aria-label="LinkedIn profile"
                    >
                      LinkedIn
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connect with me on LinkedIn.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gray-800 to-black flex items-center justify-center text-white shadow-md">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline-offset-4 underline"
                      aria-label="GitHub profile"
                    >
                      GitHub
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Check my code & open-source projects.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact form (EmailJS) */}
          <motion.form
            variants={item}
            onSubmit={sendMail}
            className="relative z-10 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4">Send a message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent"
                  placeholder="your@domain.com"
                  type="email"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col mt-3">
              <span className="text-sm font-medium mb-1">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                className="px-3 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-transparent resize-y"
                placeholder="Write a short message..."
                required
              />
            </label>

            <div className="mt-4 flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send"}
              </motion.button>

              <button
                type="button"
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                }}
                className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-800"
              >
                Clear
              </button>

              {statusMsg && (
                <span className="ml-auto text-sm text-green-600">{statusMsg}</span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
