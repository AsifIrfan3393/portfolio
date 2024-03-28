// components/AnimatedAvatar.tsx
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  src?: string;
  alt?: string;
  size?: number; // px
};

export default function AnimatedAvatar({ src = "/ai.png", alt = "Asif Irfan", size = 180 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduce = useReducedMotion();

  // pointer-follow motion values
  const px = useMotionValue(size / 2);
  const py = useMotionValue(size / 2);

  // convert pointer pos to small rotateX/rotateY values
  const rotateY = useTransform(px, (v) => ((v - size / 2) / (size / 2)) * 10); // -10..10
  const rotateX = useTransform(py, (v) => -((v - size / 2) / (size / 2)) * 10); // -10..10
  const scale = useTransform(px, (v) => 1 + Math.abs((v - size / 2) / size) * 0.02);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || shouldReduce) return;

    function handleMove(e: MouseEvent) {
      const r = el.getBoundingClientRect();
      px.set(Math.max(0, Math.min(size, e.clientX - r.left)));
      py.set(Math.max(0, Math.min(size, e.clientY - r.top)));
    }
    function handleLeave() {
      // reset to center
      px.set(size / 2);
      py.set(size / 2);
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchmove", handleMove as EventListener, { passive: true });
    el.addEventListener("touchend", handleLeave as EventListener);

    // initialize center
    px.set(size / 2);
    py.set(size / 2);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchmove", handleMove as EventListener);
      el.removeEventListener("touchend", handleLeave as EventListener);
    };
  }, [px, py, size, shouldReduce]);

  // gentle float for non-reduced-motion users
  const floatAnimation = shouldReduce
    ? {}
    : { y: [0, -8, 0], transition: { duration: 6.2, repeat: Infinity, ease: "easeInOut" } };

  return (
    <div
      ref={containerRef}
      aria-hidden={false}
      role="img"
      aria-label={alt}
      style={{ width: size, height: size }}
      className="relative rounded-full select-none"
    >
      {/* halo / glow behind avatar */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full -z-10"
        style={{
          boxShadow:
            "0 18px 50px -30px rgba(99,102,241,0.45), 0 8px 30px -20px rgba(168,85,247,0.18)",
          background:
            "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 30%), radial-gradient(circle at 70% 80%, rgba(236,72,153,0.06), transparent 40%)",
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, scale }}
        animate={floatAnimation}
        className="w-full h-full rounded-full bg-white/10 overflow-hidden border border-white/10"
        whileHover={{ translateY: -6 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={size}
          height={size}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          className="block rounded-full"
        />
        {/* subtle glossy overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.00))",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </div>
  );
}
