"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Counter from "./components/counter/Counter";
import MusicsComponent from "./components/musics/Musics";
import Message from "./components/messages/Messages";
import messages from "./data/messages/messages";

export default function Home() {
  const [actualYear, setActualYear] = useState<number | null>(null);

  useEffect(() => {
    setActualYear(new Date().getFullYear());
  }, []);

  
  if (actualYear === null) {
    return null; 
  }

  const links = [
    { title: "Carta", url: "/carta" },
    { title: "Galeria", url: "/galeria" },
    { title: "Mensagens", url: "/mensagens" },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-x-hidden text-gray-200">

      {/* Seção inicial */}
      <section className="relative w-full h-screen p-6 flex flex-col items-center justify-center sm:text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="my-6 px-4 text-center"
        >
          <div className="perspective-distant">
            <div className="rotate-x-50 transform-3d">
              <span className="relative text-gray-200 text-[20vw] sm:text-[12vw] font-extrabold break-words leading-relaxed p-2">
                José e Raoni
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="my-6"
        >
          {actualYear && (
            <p className="sm:text-lg leading-relaxed max-w-md">
              Reviva aqui os melhores momentos de um casal que mostra que o amor
              pode brilhar em qualquer época — inclusive em {actualYear}.
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="my-6"
        >
          <Link
            href="#message"
            className="px-6 py-2 font-semibold sm:text-lg rounded-lg 
                       bg-pink-700 text-white 
                       hover:bg-pink-600 hover:shadow-[0_0_15px_#FF3F8B] hover:scale-105 
                       transition-all duration-300 ease-in-out"
          >
            Começar!
          </Link>
        </motion.div>
      </section>

      {/* Seção mensagens */}
      <section
        id="message"
        className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden flex-col gap-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-center text-4xl font-extrabold sm:text-5xl">
            O Início...
          </h2>
        </motion.div>
        <Message day="14 de fev de 2023" messages={messages} />
      </section>

      {/* Seção contadores */}
      <section className="relative w-full sm:h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 sm:gap-8 p-4 sm:p-6">
          <Counter date={"2023-02-14T00:00:00"} title="Nos conhecemos há:" />
          <Counter date={"2023-06-01T00:00:00"} title="Juntos há:" />
        </div>
      </section>

      {/* Playlist */}
      <section className="relative w-full sm:h-screen flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <MusicsComponent />
      </section>

      {/* Última seção */}
      <section className="relative w-full h-screen flex flex-col gap-8 justify-center items-center p-4 sm:p-6 overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Pronto para descobrir mais?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="sm:text-lg leading-relaxed my-10 max-w-md">
            Cada página conta uma parte dessa história — um projeto feito com
            carinho para celebrar o amor e a criatividade 💜
          </p>
        </motion.div>

        {/* Botões de links */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4">
          {links.map((data, i) => (
            <Link
              key={i}
              href={`${data.url}`}
              className="max-w-md sm:w-auto px-4 py-2 sm:px-6 sm:py-2.5 sm:text-lg font-semibold 
                         rounded-lg text-gray-800 bg-yellow-500 
                         hover:bg-yellow-400 hover:shadow-[0_0_15px_#fcb530] hover:scale-105 
                         transition-all duration-300 ease-in-out text-center"
            >
              {data.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
