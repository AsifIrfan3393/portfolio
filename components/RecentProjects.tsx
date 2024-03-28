"use client"

import React from "react";
import { motion } from "framer-motion";
import { projects as defaultProjects } from "@/data";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function ProjectGrid({ projects }: { projects?: Project[] }) {
  const list = projects ?? defaultProjects;

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Selected Projects</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">A handpicked set of recent work — hover to reveal details and smooth motion.</p>
      </div>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {list.map((p) => (
          <motion.article
            key={p.id}
            className="group perspective-1000"
            variants={card}
          >
            {/* Card wrapper with 3D hover and glassy effect */}
            <motion.div
              whileHover={{ y: -10, rotateX: 3, rotateY: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-gray-100/30 dark:from-white/5 dark:to-black/10 border border-white/10 shadow-2xl p-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image area */}
              <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-500"
                  initial={{ scale: 1.02 }}
                  whileHover={{ scale: 1.08, x: -6 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
                />

                {/* subtle gradient overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* icon cluster top-right */}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-3 right-3 flex items-center gap-2"
                >
                  {p.iconLists?.map((ic, i) => (
                    <img key={i} src={ic} alt={`icon-${i}`} className="w-7 h-7 rounded-md bg-white/70 p-1 shadow" />
                  ))}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold leading-snug">{p.title}</h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-2 text-sm text-muted-foreground line-clamp-3"
                >
                  {p.des}
                </motion.p>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={p.link ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium shadow-sm border border-transparent hover:scale-105 transition-transform"
                  >
                    View Repo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transform translate-y-[1px]">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  <div className="flex items-center gap-2">
                    <small className="text-xs text-muted-foreground">#{p.id}</small>
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center border border-white/6 shadow-inner"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* subtle bottom flourish */}
              <div className="absolute -bottom-8 left-0 w-full pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full opacity-6">
                  <path fill="currentColor" d="M0,64L24,74.7C48,85,96,107,144,128C192,149,240,171,288,170.7C336,171,384,149,432,133.3C480,117,528,107,576,117.3C624,128,672,160,720,170.7C768,181,816,171,864,154.7C912,139,960,117,1008,112C1056,107,1104,117,1152,133.3C1200,149,1248,171,1296,165.3C1344,160,1392,128,1416,112L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z" />
                </svg>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      <p className="mt-6 text-sm text-muted-foreground">Tip: tweak the motion timings in the <code>container</code> and <code>card</code> variants to make the entrance faster or more dramatic.</p>
    </section>
  );
}
