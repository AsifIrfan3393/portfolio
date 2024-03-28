import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DownloadCloud, FileText, ExternalLink } from "lucide-react";

const RESUME_PATH = "/resume.pdf";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function formatBytes(bytes: number | null) {
  if (!bytes || bytes <= 0) return "—";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let num = bytes;
  while (num >= 1024 && i < units.length - 1) {
    num /= 1024;
    i++;
  }
  return `${num.toFixed(num < 10 && i ? 1 : 0)} ${units[i]}`;
}

export default function ResumeSection() {
  const shouldReduceMotion = useReducedMotion();
  const [sizeBytes, setSizeBytes] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(RESUME_PATH, { method: "HEAD" });
        if (!mounted) return;
        const len = res.headers.get("content-length");
        if (len) setSizeBytes(parseInt(len, 10));
      } catch (e) {
        // ignore; size unknown
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const float = shouldReduceMotion
    ? undefined
    : {
        y: [0, -8, 0],
        rotate: [0, 4, 0],
        transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-black-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <motion.h2 variants={card} className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Resume
          </motion.h2>
          <motion.p variants={card} className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download the latest version of my resume — concise, recruiter-friendly, and up-to-date.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          {/* CTA card (single, centered) */}
          <motion.div
            variants={card}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-2xl"
          >
            {/* vibrant gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-teal-400 via-indigo-600 to-pink-500 opacity-95"
              style={{ mixBlendMode: "multiply" }}
            />

            {/* subtle angled stripe overlay */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <svg width="100%" height="100%" preserveAspectRatio="none" className="opacity-6">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.00)" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#g1)" transform="skewX(-12)" />
              </svg>
            </div>

            <div className="relative p-6 text-white">
              <motion.div animate={float} className="inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-white/12 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
              </motion.div>

              <h3 className="text-xl font-semibold">Get my resume</h3>
              <p className="mt-2 text-sm opacity-90">Well-structured PDF optimized for recruiters and ATS.</p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={RESUME_PATH}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-700 font-semibold shadow hover:shadow-lg transition-transform transform"
                  aria-label="Download resume"
                >
                  <DownloadCloud className="w-4 h-4" />
                  Download
                </a>

                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-white/95 text-sm hover:bg-white/10 transition"
                  aria-label="Preview resume"
                >
                  <ExternalLink className="w-4 h-4" />
                  Preview
                </a>

                <div className="ml-auto text-sm opacity-90">
                  <div>
                    Size: <strong>{formatBytes(sizeBytes)}</strong>
                  </div>
                </div>
              </div>

              {/* nicer tip style */}
              <div className="mt-5 text-sm bg-white/10 rounded-lg p-3 inline-block">
                <strong className="mr-2">Note:</strong>
                Recruiters really do prefer a focused, single-page PDF — keep it scannable and show 2–3 highlights at the top.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        /* small shimmer on the primary CTA */
        @keyframes shimmer {
          0% { background-position: -200% 0 }
          100% { background-position: 200% 0 }
        }
        a[aria-label="Download resume"] {
          background-image: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          background-size: 200% 100%;
        }
        a[aria-label="Download resume"]:hover { animation: shimmer 2.4s linear infinite }

        /* subtle card focus ring */
        section#resume a:focus, section#resume button:focus { outline: none; box-shadow: 0 0 0 4px rgba(99,102,241,0.12); border-radius: 8px }
      `}</style>
    </section>
  );
}
