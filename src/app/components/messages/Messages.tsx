"use client";

import { motion } from "framer-motion";

export interface MessageItem {
  he?: string;
  she?: string;
  hour: string;
}

interface MessageProps {
  day: string;
  messages: MessageItem[];
}

const colors = {
  he: "#2A1A2E",
  she: "#300b22ff",
  accent: "#FF6EC7",
  timestamp: "#ffa3dcff",
  border: "rgba(255,255,255,0.2)",
  prendedor: "#B83280",
};

export default function Message({ day, messages }: MessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="relative max-w-3xl w-full bg-[rgba(0,0,0,0.2)] backdrop-blur-xs border-2 border-[rgba(255,255,255,0.2)] p-4 sm:p-6 rounded-lg"
    >
      {/* Prendedores superiores */}
      <div className="flex justify-between my-4">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.prendedor }} />
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.prendedor }} />
      </div>

      {/* Lista de mensagens */}
      <div className="flex flex-col w-full space-y-4 rounded-md border-2 border-[rgba(255,255,255,0.2)] p-2 min-h-[60vh]">
        {/* Data */}
        <div className="w-full flex justify-center">
          <div className="bg-[#2A1A2E]/80 p-1 my-1 shadow-xl rounded-xl text-sm text-[#E5C4CB]">
            {day}
          </div>
        </div>

        {/* Mensagens */}
        {messages.map((message, i) =>
          message.he ? (
            <div key={i} className="flex justify-end gap-2">
              <div
                className="max-w-[90%] sm:max-w-[75%] md:max-w-[55%] p-3 rounded-lg text-[#E5C4CB] break-words border"
                style={{ backgroundColor: colors.he, borderColor: colors.border }}
              >
                <div className="flex justify-between items-end gap-2">
                  <span className="flex-1">{message.he}</span>
                  <span className="text-[12px]" style={{ color: colors.timestamp }}>
                    {message.hour}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-start gap-2">
              <div
                className="max-w-[90%] sm:max-w-[75%] md:max-w-[55%] p-3 rounded-lg text-[#E5C4CB] break-words border"
                style={{ backgroundColor: colors.she, borderColor: colors.border }}
              >
                <div className="flex justify-between items-end gap-2">
                  <span className="flex-1">{message.she}</span>
                  <span className="text-[12px]" style={{ color: colors.timestamp }}>
                    {message.hour}
                  </span>
                </div>
              </div>
            </div>
          )
        )}

        {/* Separador */}
        <span
          className="text-center my-2 text-2xl font-extrabold leading-relaxed tracking-wider"
          style={{ color: colors.accent }}
        >
          ...
        </span>
      </div>

      {/* Prendedores inferiores */}
      <div className="flex justify-between my-4">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.prendedor }} />
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.prendedor }} />
      </div>
    </motion.div>
  );
}
