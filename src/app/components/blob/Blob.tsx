'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🎨 Paleta fixa de cores neon
const NeonGlow = [
  "#d10858ff",
  "#c57708ff", 
  "#02726eff",
  "#6a22ddff", 
  "#fcb530ff", 
  "#ff436fff",
  "#146de0ff",
  "#ff4e0dff",
  "#6A0572", 
];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

interface BlobValues {
  size: number;
  top: number;
  left: number;
  blur: number;
  opacity: number;
  color: string;
}

const MeshBlob: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [blobs, setBlobs] = useState<BlobValues[]>([]);

  // 📱 Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🎲 Gera blobs fixos (um por cor)
  useEffect(() => {
    const generated = NeonGlow.map((color) => {
      const size = isMobile ? getRandom(80, 150) : getRandom(250, 400);
      const top = getRandom(0, 80);
      const left = getRandom(0, 80);
      const blur = isMobile ? getRandom(10, 25) : getRandom(20, 60);
      const opacity =  getRandom(0.2, 0.3);
      return { size, top, left, blur, opacity, color };
    });
    setBlobs(generated);
  }, [isMobile]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${
            isMobile ? '' : 'mix-blend-screen'
          }`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            backgroundColor: blob.color,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
          }}
          animate={{
            x: [0, getRandom(-50, 50), getRandom(-30, 30), 0],
            y: [0, getRandom(-40, 40), getRandom(-20, 20), 0],
            opacity: [blob.opacity, blob.opacity * 0.9, blob.opacity],
          }}
          transition={{
            duration: getRandom(10, 15), // tempo de movimento lento
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default MeshBlob;
