"use client"

import { useState } from "react"
import playlist from "@/app/data/playlist/playlist"
import { motion } from "motion/react"

export default function MusicsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const music = playlist[currentIndex]

  const spotifyWebUrl = `https://open.spotify.com/track/${music.track_id}`
  const spotifyAppUrl = `spotify:track:${music.track_id}`

  const nextMusic = () => setCurrentIndex((prev) => (prev + 1) % playlist.length)
  const prevMusic = () => setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length)

  const openSpotify = () => {
    window.location.href = spotifyAppUrl
    setTimeout(() => {
      window.open(spotifyWebUrl, "_blank")
    }, 1200)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-full sm:min-h-[28rem] sm:w-[50vw] md:w-[70vw] xl:w-[50vw] bg-[rgba(0,0,0,0.2)] backdrop-blur-xs border-2 border-[rgba(255,255,255,0.2)] rounded-lg p-4 sm:p-10 flex flex-col gap-6 m-3"
    >
      {/* Título */}
      <div className="my-2 sm:my-6 flex justify-center">
        <h2 className="font-extrabold text-2xl sm:text-5xl leading-snug tracking-wide text-white drop-shadow-md text-center">
          Quando <span className="text-pink-500">tocam</span>,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-orange-400">
            lembram você
          </span>
        </h2>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center gap-6 xl:grid xl:grid-cols-2">
        {/* Capa do álbum */}
        <div className="flex justify-center items-center">
          <motion.div
            whileInView={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
            className="relative w-32 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-center bg-cover drop-shadow-xl"
            style={{ backgroundImage: `url("${music.cover}")` }}
          >
            <div className="absolute w-8 h-8 sm:w-10 sm:h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full"></div>
          </motion.div>
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center text-center px-2">
          <span className="text-base sm:text-2xl font-bold block mb-2 border-l-4 border-pink-500 pl-2">
            {music.name}
          </span>
          <span className="block text-gray-200 mb-2 sm:mb-4 text-xs sm:text-base font-bold">
            {music.artist}
          </span>

          {music.quote.map((line, i) => (
            <p
              className="text-gray-300 max-w-xs sm:max-w-md mb-1 sm:mb-3 text-xs sm:text-base"
              key={i}
            >
              {line}
            </p>
          ))}

          <div className="my-2 sm:my-4">
            <button
              onClick={openSpotify}
              aria-label="Ouvir no Spotify"
              className="inline-flex items-center bg-[#1DB954]  hover:shadow-[0_0_15px_#1DB954] transition-colors duration-300 ease-in-out px-3 py-2 sm:px-5 sm:py-2 rounded-full shadow-lg text-black font-bold text-sm sm:text-lg"
            >
              <i className="bi bi-spotify mr-2 text-black text-lg sm:text-xl"></i>
              Ouvir
            </button>
          </div>
        </div>
      </div>

      {/* Botões Carrossel */}
      <button
        onClick={prevMusic}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1 sm:p-3 rounded-full shadow-lg"
      >
        <i className="bi bi-chevron-left text-lg sm:text-2xl"></i>
      </button>

      <button
        onClick={nextMusic}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1 sm:p-3 rounded-full shadow-lg"
      >
        <i className="bi bi-chevron-right text-lg sm:text-2xl"></i>
      </button>
    </motion.div>
  )
}
