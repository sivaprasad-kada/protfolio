import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function StunningBackground() {
  // Generate static stars to avoid re-renders
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5, // 0.5px to 2.5px
      duration: Math.random() * 3 + 2, // 2s to 5s twinkle
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#070514]">
      {/* Deep smooth radial ambient backglow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,30,70,0.2)_0%,rgba(7,5,20,1)_100%)]"></div>
      
      {/* Clean high-tech architectural dot grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]"></div>

      {/* Subtle floating twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-[#e2d5f8]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
