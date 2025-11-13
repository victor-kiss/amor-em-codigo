"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { useCallback, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
  options?: EmblaOptionsType;
}

export default function Carousel({ images, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options ?? { loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }} // Alterado
      whileInView={{ opacity: 1, y: 0 }} // Alterado
      transition={{ type: "spring", stiffness: 100, damping: 20 }} // Alterado
    >
      {/* Carousel Wrapper */}
      <div className="overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_90%] md:flex-[0_0_85%] px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }} // Alterado
              viewport={{ once: true }} // Adicionado
            >
              {/* Image Container with bigger aspect ratio */}
              <div className="relative w-full aspect-[5/3] sm:aspect-[5/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={src}
                  alt={`Imagem ${i + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <motion.button
          whileHover={{ scale: 1.15, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }} // Adicionado
          onClick={scrollPrev}
          className="px-4 py-4 bg-black/60 rounded-full hover:bg-black/80 transition text-pink-600 border border-pink-600 shadow-lg"
        >
          <motion.i
            className="bi bi-caret-left-fill text-lg"
            animate={{ x: -3 }} // Alterado
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.7,
              ease: "easeInOut",
            }} // Alterado
          />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }} // Adicionado
          onClick={scrollNext}
          className="px-4 py-4 bg-black/60 rounded-full hover:bg-black/80 transition text-pink-600 border border-pink-600 shadow-lg"
        >
          <motion.i
            className="bi bi-caret-right-fill text-lg"
            animate={{ x: 3 }} // Alterado
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.7,
              ease: "easeInOut",
            }} // Alterado
          />
        </motion.button>
      </div>
    </motion.div>
  );
}