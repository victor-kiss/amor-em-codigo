"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";

interface pastTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CounterProps {
  date: Date | string;
  title: string;
}

const countTime = (start_date: Date): pastTime => {
  const now = new Date();
  const diferenca = now.getTime() - start_date.getTime();

  const totalSeconds = Math.floor(diferenca / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export default function Counter({ date, title }: CounterProps) {
  const start_date = useMemo(() => new Date(date), [date]);

  // Estado para o tempo decorrido
  const [time, setTime] = useState<pastTime | null>(null);

  // Estado para a data atual formatada
  const [currentDate, setCurrentDate] = useState<string>("");

  // Montagem: inicializa o timer e a data atual somente no cliente
  useEffect(() => {
    setTime(countTime(start_date)); // seta o tempo imediatamente no cliente
    setCurrentDate(new Date().toLocaleDateString("pt-BR"));

    const interval = setInterval(() => {
      setTime(countTime(start_date));
    }, 1000);

    return () => clearInterval(interval);
  }, [start_date]);

  // Enquanto o tempo não estiver calculado (SSR ou primeira render), não renderize o conteúdo para evitar mismatch
  if (!time) {
    return null; // Ou um loader, ou placeholder neutro
  }

  const formatedDate = start_date.toLocaleDateString("pt-BR");

 return (
  <motion.div
    initial={{ opacity: 0, scale: 0.2 }}
    whileInView={{
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.1, type: "tween" },
    }}
    className="relative w-[80vw] min-h-100 bg-[rgba(0,0,0,0.2)] backdrop-blur-xs border-2 border-[rgba(255,255,255,0.2)] rounded-lg p-6 sm:p-10 sm:py-12 sm:w-auto h-auto flex flex-col justify-between gap-8"
  >
    {/* Prendedor superior (bolinhas decorativas) */}
    <div className="flex justify-between my-2">
      <div className="w-4 h-4 rounded-full bg-[#B83280]"></div>
      <div className="w-4 h-4 rounded-full bg-[#B83280]"></div>
    </div>

    {/* Título do contador */}
    <span className="font-bold text-2xl sm:text-4xl text-center text-white">
      {title}
    </span>

    {/* Área dos números do contador: dias, horas, minutos, segundos */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center z-10">
      
      {/* Contador de dias */}
      <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg border-2 bg-[#2A1A2E] backdrop-blur-xs border-[rgba(255,255,255,0.2)]">
        <span className="block text-2xl font-extrabold text-[#FF6EC7]">{time.days}</span>
        <span className="text-[#E5C4CB] text-sm">dias</span>
      </div>

      {/* Contador de horas */}
      <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg border-2 bg-[#2A1A2E] backdrop-blur-xs border-[rgba(255,255,255,0.2)]">
        <span className="block text-2xl font-extrabold text-[#FF6EC7]">{time.hours}</span>
        <span className="text-[#E5C4CB] text-sm">horas</span>
      </div>

      {/* Contador de minutos */}
      <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg border-2 bg-[#2A1A2E] backdrop-blur-xs border-[rgba(255,255,255,0.2)]">
        <span className="block text-2xl font-extrabold text-[#FF6EC7]">{time.minutes}</span>
        <span className="text-[#E5C4CB] text-sm">minutos</span>
      </div>

      {/* Contador de segundos */}
      <div className="w-24 h-24 flex flex-col items-center justify-center rounded-lg border-2 bg-[#2A1A2E] backdrop-blur-xs border-[rgba(255,255,255,0.2)]">
        <span className="block text-2xl font-extrabold text-[#FF6EC7]">{time.seconds}</span>
        <span className="text-[#E5C4CB] text-sm">segundos</span>
      </div>
    </div>

    {/* Data formatada inicial e data atual do cliente */}
    <div>
      <span className="text-sm text-white/70">
        {formatedDate} - {currentDate}
      </span>
    </div>

    {/* Prendedor inferior (bolinhas decorativas) */}
    <div className="flex justify-between my-2">
      <div className="w-4 h-4 rounded-full bg-[#B83280]"></div>
      <div className="w-4 h-4 rounded-full bg-[#B83280]"></div>
    </div>
  </motion.div>
);

}
