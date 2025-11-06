"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Carta() {

  const steps = [
    "Esta é uma carta aberta para alguém muito especial. Quero começar agradecendo pela forma como nossos caminhos se cruzaram e por tudo o que vivemos até aqui. É difícil colocar em palavras o quanto essa história é bonita e significativa — e o quanto sou grato(a) por ela.",
    "Antes de tudo acontecer, eu não imaginava que alguém pudesse mexer tanto comigo. As coisas foram acontecendo de forma natural, simples, e aos poucos fui percebendo o quanto essa conexão era verdadeira. Cada conversa, cada encontro, cada risada... tudo foi se tornando parte de algo maior e muito especial.",
    "Com o tempo, passei a admirar não só quem você é por fora, mas principalmente quem você é por dentro. O carinho, o cuidado e a forma como você faz tudo com o coração me inspiram todos os dias. Mesmo quando temos nossas diferenças, o que sinto é mais forte do que qualquer obstáculo.",
    "É uma honra poder compartilhar a vida com alguém tão incrível. Pode ser que eu não seja a melhor pessoa com as palavras, mas quero que saiba que estarei sempre por perto — apoiando, torcendo e cuidando, assim como você faz comigo. Você me motiva a ser alguém melhor.",
    "Desejo que sua vida seja repleta de paz, alegria, prosperidade e momentos inesquecíveis. Que cada novo ciclo traga ainda mais luz, aprendizado e amor. Espero que goste deste cantinho feito com carinho — talvez eu não seja um poeta, mas coloquei o coração em cada detalhe.",
    "Com carinho 💜",
  ]

  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1)
  }

  return (
    <div className="relative flex flex-col justify-center items-center text-white min-h-screen overflow-x-hidden relative">

      <section className="relative w-full h-screen p-6 flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="bg-[rgba(0,0,0,0.7)] backdrop-blur-sm border border-white/30 p-6 rounded-2xl max-w-3xl w-full sm:w-[70vw] shadow-lg h-[70vh] sm:h-auto overflow-y-auto flex flex-col justify-between">
            
            {/* Texto animado */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className={`text-base sm:text-lg leading-relaxed ${
                    currentStep === steps.length - 1 ? "text-right text-gray-400" : ""
                  }`}
                >
                  {steps[currentStep]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Botões de navegação */}
            <div className="flex gap-4 mt-6 justify-center align-baseline items-baseline">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="px-4 py-2 rounded-lg bg-gray-500/30 hover:bg-gray-500/50 text-white transition  border-1 border-white/20"
                >
                  Voltar
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2 rounded-lg bg-gray-500/20 hover:bg-pink-700 hover:text-white text-pink-500 font-semibold transition border-1 border-white/20"
                >
                  Próximo
                </button>
              ) : (
                <p className="text-pink-400 font-semibold block ">Fim da carta 💌</p>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
