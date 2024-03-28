import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { skills } from "@/data";

/**
 * Slower, visually rich horizontal train for skills.
 * - defaultDuration: seconds for a full single-loop (tweakable)
 * - cards get automatic HSL gradient based on index (pleasant, distinct colors)
 * - hover / focus pauses animation (accessibility)
 * - mobile: slower and narrower cards
 */

const DEFAULT_DURATION = 30; // seconds — change to 20-40 as you prefer

const SkillsSection: React.FC = () => {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [singleWidth, setSingleWidth] = useState<number>(0);
  const [duration, setDuration] = useState<number>(DEFAULT_DURATION);

  // duplicated array for seamless loop
  const loopItems = React.useMemo(() => [...skills, ...skills], []);

  // mobile tweak: slower and more gentle on small screens
  useEffect(() => {
    const apply = () => {
      const isSmall =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 640px)").matches;
      setDuration(isSmall ? Math.round(DEFAULT_DURATION * 1.6) : DEFAULT_DURATION);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  // measure width of the whole track (duplicated), then singleWidth = half
  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => {
      const full = trackRef.current!.scrollWidth || 0;
      setSingleWidth(full / 2 || 0);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [loopItems.length]);

  // start animation once we know the singleWidth
  useEffect(() => {
    if (!singleWidth || singleWidth <= 0) return;
    controls.start({
      x: -singleWidth,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [singleWidth, duration, controls]);

  // pause/resume helpers
  const pause = () => controls.stop();
  const resume = () => {
    if (!singleWidth || singleWidth <= 0) return;
    controls.start({
      x: -singleWidth,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  };

  // helper: generate two pleasant HSL colors for index
  const gradientForIndex = (idx: number) => {
    const count = skills.length || 12;
    const hue = Math.round((idx * 360) / count + 25) % 360; // spread hues
    const from = `hsl(${hue} 85% 55%)`; // strong color
    const to = `hsl(${(hue + 30) % 360} 70% 65%)`; // lighter
    return { from, to };
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-black-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            My main skills and technologies — short description for each.
          </p>
        </div>

        {/* Horizontal train container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          tabIndex={-1}
          aria-label="Skills carousel"
        >
          {/* motion track (duplicated items inside) */}
          <motion.div
            ref={trackRef}
            animate={controls}
            initial={{ x: 0 }}
            className="flex gap-6 items-stretch whitespace-nowrap will-change-transform"
            style={{ display: "flex" }}
          >
            {loopItems.map((s, idx) => {
              // idx will exceed skills.length for the duplicate half; compute base index
              const baseIdx = idx % skills.length;
              const { from, to } = gradientForIndex(baseIdx);

              return (
                <div
                  key={`${s.name}-${idx}`}
                  tabIndex={0}
                  onFocus={pause}
                  onBlur={resume}
                  // responsive width: full on very small, small cards on larger screens
                  className="flex-shrink-0 w-[86%] sm:w-80 md:w-96 flex flex-col gap-4 p-5 rounded-2xl shadow-lg"
                  // inline gradient background ensures consistent dynamic colors
                  style={{
                    background: `linear-gradient(135deg, ${from}, ${to})`,
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transformOrigin: "center",
                    // soft glass-like backdrop if site supports it
                    backdropFilter: "saturate(120%) blur(2px)",
                  }}
                  aria-label={`${s.name} skill card`}
                >
                  <div className="flex items-center gap-4">
                    {/* icon circle with subtle white halo */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden shadow-sm"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                      }}
                    >
                      {/* use loading=lazy for performance */}
                      <img
                        src={s.img}
                        alt={s.name}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                        style={{ filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.12))" }}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">{s.name}</h3>
                      {s.sub && (
                        <p className="text-sm opacity-90" style={{ color: "rgba(255,255,255,0.9)" }}>
                          {s.sub}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm whitespace-pre-line" style={{ color: "rgba(255,255,255,0.92)" }}>
                    {s.desc}
                  </p>

                  {s.level && (
                    <div className="mt-auto">
                      <span
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {s.level}
                      </span>
                    </div>
                  )}

                  {/* hover/focus visual lift (Tailwind can't animate inline style colors easily) */}
                  <style jsx>{`
                    div[aria-label="${s.name} skill card"]:hover {
                      transform: translateY(-6px) scale(1.02);
                      transition: transform 220ms ease;
                    }
                    div[aria-label="${s.name} skill card"]:focus {
                      outline: 3px solid rgba(255,255,255,0.12);
                      transform: translateY(-6px) scale(1.02);
                    }
                  `}</style>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
