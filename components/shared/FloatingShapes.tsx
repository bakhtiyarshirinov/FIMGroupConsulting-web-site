"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const shapes = [
  { id: 1, type: "diamond", size: 70, top: "12%", left: "7%", delay: 0, duration: 8, opacity: 0.15 },
  { id: 2, type: "circle", size: 45, top: "18%", left: "85%", delay: 1.5, duration: 11, opacity: 0.12 },
  { id: 3, type: "square", size: 55, top: "55%", left: "90%", delay: 0.8, duration: 9, opacity: 0.1 },
  { id: 4, type: "diamond", size: 90, top: "70%", left: "4%", delay: 2, duration: 13, opacity: 0.08 },
  { id: 5, type: "circle", size: 30, top: "35%", left: "15%", delay: 3, duration: 7, opacity: 0.18 },
  { id: 6, type: "square", size: 40, top: "80%", left: "75%", delay: 1, duration: 10, opacity: 0.1 },
  { id: 7, type: "diamond", size: 50, top: "42%", left: "60%", delay: 4, duration: 12, opacity: 0.09 },
  { id: 8, type: "circle", size: 20, top: "8%", left: "48%", delay: 2.5, duration: 8, opacity: 0.2 },
  { id: 9, type: "hexagon", size: 60, top: "62%", left: "38%", delay: 1.2, duration: 14, opacity: 0.07 },
  { id: 10, type: "square", size: 25, top: "28%", left: "72%", delay: 3.5, duration: 9, opacity: 0.15 },
];

function ShapeEl({ type, size }: { type: string; size: number }) {
  if (type === "diamond") {
    return (
      <div
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #D4AF6A22, #B8963E44)",
          border: "1px solid #B8963E60",
          transform: "rotate(45deg)",
          borderRadius: 4,
          boxShadow: "0 0 20px rgba(184,150,62,0.15)",
        }}
      />
    );
  }
  if (type === "circle") {
    return (
      <div
        style={{
          width: size,
          height: size,
          background: "radial-gradient(circle, #D4AF6A22, transparent)",
          border: "1px solid #B8963E50",
          borderRadius: "50%",
          boxShadow: "0 0 15px rgba(184,150,62,0.1)",
        }}
      />
    );
  }
  if (type === "hexagon") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="rgba(184,150,62,0.06)"
          stroke="rgba(184,150,62,0.35)"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #D4AF6A18, #B8963E30)",
        border: "1px solid #B8963E45",
        borderRadius: 6,
        boxShadow: "0 0 12px rgba(184,150,62,0.1)",
      }}
    />
  );
}

export function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) / centerX);
      mouseY.set((e.clientY - centerY) / centerY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            top: shape.top,
            left: shape.left,
            opacity: shape.opacity,
            x: springX,
            y: springY,
          }}
          animate={{
            y: [0, -20, -8, -18, 0],
            rotate: [0, 8, -4, 6, 0],
            scale: [1, 1.05, 0.97, 1.03, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ShapeEl type={shape.type} size={shape.size} />
        </motion.div>
      ))}

      {/* Radial glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: "20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(184,150,62,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          bottom: "10%",
          right: "-15%",
          background:
            "radial-gradient(circle, rgba(184,150,62,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
