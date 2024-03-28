"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import AnimatedAvatar from "@/components/AnimatedAvatar";

export default function Hero() {
  const reduce = useReducedMotion();

  // sizes
  const desktopSize = 260; // avatar size on desktop
  const ringSize = desktopSize + 64; // visual ring diameter

  // animation timing (slower, more professional)
  const orbitDuration = 28; // seconds for a full orbit (slower = calmer)

  // meteor data: reduced intensity and slower motion for a refined look
  const meteors = [
    { id: "m-a", left: "6%", top: "12%", length: 320, duration: 5.2, delay: 0.6, scale: 0.95 },
    { id: "m-b", left: "20%", top: "24%", length: 380, duration: 6.4, delay: 1.6, scale: 0.9 },
    { id: "m-c", left: "32%", top: "8%", length: 280, duration: 6.8, delay: 1.0, scale: 0.95 },
    { id: "m-d", left: "54%", top: "20%", length: 360, duration: 5.8, delay: 2.0, scale: 1.0 },
    { id: "m-e", left: "74%", top: "10%", length: 300, duration: 5.0, delay: 0.8, scale: 1.05 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12">
      {/* spotlights (kept) */}
      <div aria-hidden>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* background grid / mask (kept) */}
      <div
        className="absolute inset-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.18]"
        style={{ pointerEvents: "none" }}
      >
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* refined meteors layer (pointer-events-none) */}
      {!reduce && (
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {meteors.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: 0, y: 0, rotate: -14 }}
              animate={{
                opacity: [0, 1, 0.85, 0],
                x: [0, m.length * 0.6, m.length * 1.1],
                y: [0, m.length * 0.06, m.length * 0.16],
              }}
              transition={{
                duration: m.duration,
                delay: m.delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: [0.22, 0.8, 0.2, 1],
              }}
              style={{ position: "absolute", left: m.left, top: m.top, transform: "translate(-50%, -50%)" }}
            >
              {/* subtle tail */}
              <div
                style={{
                  position: "absolute",
                  left: -m.length,
                  top: "50%",
                  transform: "translateY(-50%) rotate(-12deg)",
                  width: m.length,
                  height: Math.max(2, Math.round(5 * m.scale)),
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,230,150,0.75) 18%, rgba(255,150,50,0.45) 40%, rgba(255,110,30,0.08) 75%, rgba(255,110,30,0))",
                  filter: "blur(8px)",
                  borderRadius: 9999,
                  boxShadow: "0 8px 26px rgba(255,120,40,0.09)",
                  opacity: 0.85,
                }}
              />
              {/* small head */}
              <div
                style={{
                  width: 10 * m.scale,
                  height: 10 * m.scale,
                  borderRadius: 9999,
                  background: "radial-gradient(circle at 30% 30%, #fff, #ffd9a0 28%, #ff8a2a 54%, rgba(255,60,0,0.9) 100%)",
                  boxShadow: "0 8px 24px rgba(255,110,40,0.28), 0 0 48px rgba(255,120,40,0.08)",
                }}
              />
            </motion.div>
          ))}

          {/* calmer comet from top-left (less aggressive path, slower) */}
          <motion.div
            initial={{ opacity: 0, x: -180, y: -180, rotate: -22 }}
            animate={{
              opacity: [0, 1, 0.9, 0],
              x: [-180, 160, 780],
              y: [-180, 160, 680],
              rotate: [-22, -24, -24],
            }}
            transition={{
              duration: 5.6,
              delay: 1.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.2, 0.85, 0.2, 1],
            }}
            style={{ position: "absolute", left: "-8%", top: "-6%", transform: "translate(-50%, -50%)", zIndex: 5 }}
            className="meteor pointer-events-none"
          >
            {/* long but soft tail */}
            <div
              style={{
                position: "absolute",
                left: -700,
                top: "50%",
                transform: "translateY(-50%) rotate(-28deg)",
                width: 700,
                height: 14,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,238,170,0.88) 12%, rgba(255,170,70,0.6) 32%, rgba(255,120,40,0.18) 60%, rgba(255,120,40,0))",
                filter: "blur(12px)",
                borderRadius: 9999,
                boxShadow: "0 18px 60px rgba(255,110,30,0.08)",
                opacity: 0.9,
              }}
            />
            {/* inner flicker */}
            <div
              style={{
                position: "absolute",
                left: -480,
                top: "50%",
                transform: "translateY(-50%) rotate(-28deg)",
                width: 500,
                height: 8,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,220,140,0.8) 14%, rgba(255,140,60,0.45) 36%, rgba(255,140,60,0))",
                filter: "blur(6px)",
                borderRadius: 9999,
                opacity: 0.9,
              }}
            />

            {/* refined comet head */}
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 22,
                height: 22,
                borderRadius: 9999,
                background: "radial-gradient(circle at 30% 30%, #fff, #ffe3b8 24%, #ff8f40 50%, #ff4100 100%)",
                boxShadow: "0 12px 36px rgba(255,110,40,0.38), 0 0 100px rgba(255,100,30,0.12)",
                transform: "translateZ(0)",
              }}
            />
          </motion.div>
        </div>
      )}

      {/* main layout */}
      <div className="relative z-10 w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* LEFT: avatar + refined orbit ring */}
          <div className="flex-shrink-0 relative w-full md:w-auto flex items-center justify-center md:justify-start">
            {/* shift avatar slightly downward for better balance */}
            <div className="relative" style={{ width: desktopSize, height: desktopSize, transform: "translateY(12px)" }}>
              {!reduce && (
                <motion.div
                  aria-hidden
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: orbitDuration, ease: "linear" }}
                  className="absolute -inset-8 md:-inset-10 flex items-center justify-center pointer-events-none"
                >
                  <div
                    style={{
                      width: ringSize,
                      height: ringSize,
                      borderRadius: 9999,
                      background:
                        "conic-gradient(from 200deg, rgba(99,102,241,0.10), rgba(236,72,153,0.08), rgba(56,189,248,0.06))",
                      filter: "blur(14px)",
                      opacity: 0.86,
                    }}
                  />
                </motion.div>
              )}

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.995 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="relative overflow-hidden z-10"
                style={{ width: desktopSize, height: desktopSize }}
              >
                <AnimatedAvatar src="/ai.png" alt="Asif Irfan" size={desktopSize} square={false} />
              </motion.div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="flex-1 flex flex-col items-center text-center justify-center px-2">
            <p className="uppercase tracking-widest text-xs text-blue-100 mb-2">Algorithmically-Driven Full-Stack</p>

            <div className="max-w-[95%] sm:max-w-3xl">
              <TextGenerateEffect words={"From Algorithm to Product:"} className="mx-auto text-[30px] md:text-5xl lg:text-6xl font-extrabold leading-tight text-center" />
              <div className="mt-2">
                <TextGenerateEffect words={"Efficient Code Real Results"} className="mx-auto text-[22px] md:text-3xl lg:text-4xl font-semibold leading-snug text-center" />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 px-3">
              Hi! I&apos;m <span className="font-semibold">Asif Irfan</span>. I apply data structures and complexity analysis to build fast, maintainable web apps that improve runtime, reliability and user value.
            </p>

            <div className="mt-6 flex gap-4 items-center justify-center">
              <a href="#about">
                <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* reduced-motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .meteor { display: none !important; }
        }
      `}</style>
    </section>
  );
}
