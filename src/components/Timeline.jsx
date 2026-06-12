// src/components/Timeline.jsx
import React from 'react';

const events = [
    { 
    date: "17/02/2019", 
    title: "💕 Aqui começamos a namorar", 
    description: "O dia mais especial da minha vida. Um novo capítulo começou aqui",
    icon: "💕"
  },
  { 
    date: "08/05/2021", 
    title: "Nascimento do Zayan", 
    description: "Nosso primeiro filho chegou e trouxe ainda mais amor.",
    icon: "👶"
  },
  { 
    date: "28/04/2023", 
    title: "Nascimento do Zarack", 
    description: "Nossa família ficou mais completa e animada.",
    icon: "👦"
  },
  { 
    date: "04/01/2026", 
    title: "Nascimento da Zayla", 
    description: "Mais amor para nossa história – nossa princesa chegou.",
    icon: "👧"
  },
  { 
    date: "12/06/2026", 
    title: "Continuamos escrevendo nossa história", 
    description: "Dia dos Namorados, celebrar cada momento ao seu lado.",
    icon: "💖"
  }
];

export default function Timeline() {
  return (
    <div className="mx-4 my-6">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="
  relative
  overflow-hidden
  bg-gradient-to-r
  from-pink-500
  via-rose-500
  to-pink-600
  px-5
  py-8
  text-center
">
          <h2 className="text-white text-2xl font-bold">Nossa História</h2>
          <p className="text-white/80 text-sm mt-1">Uma jornada de amor e momentos especiais</p>
        </div>
        
        {/* Timeline Vertical Clean */}
        <div className="p-5">
        {events.map((event, index) => (
  <div
    key={index}
    className="
      relative mb-6 last:mb-0
      group
      transition-all duration-300
      hover:translate-x-1
    "
  >
    {/* Linha */}
    {index < events.length - 1 && (
      <div
        className="
          absolute left-6 top-12 bottom-0
          w-[3px]
          bg-gradient-to-b
          from-pink-400
          to-rose-200
          rounded-full
        "
      />
    )}

    <div className="flex gap-4 items-start">
      
      {/* Ícone */}
      <div
        className="
          relative z-10
          w-12 h-12
          rounded-full
          bg-gradient-to-br
          from-pink-500
          via-rose-500
          to-red-500
          flex items-center justify-center
          shadow-xl
          group-hover:scale-110
          transition-all duration-300
        "
      >
        <span className="text-xl">
          {event.icon}
        </span>
      </div>

      {/* Card */}
      <div
        className="
          flex-1
          bg-white/80
          backdrop-blur-md
          rounded-2xl
          p-4
          border border-pink-100
          shadow-lg
          group-hover:shadow-2xl
          transition-all duration-300
        "
      >
        <div
          className="
            inline-block
            px-3 py-1
            rounded-full
            bg-pink-100
            text-pink-600
            text-xs
            font-bold
            mb-2
          "
        >
          {event.date}
        </div>

        <h3
          className="
            text-gray-800
            font-bold
            text-lg
            mb-1
          "
        >
          {event.title}
        </h3>

        <p
          className="
            text-gray-600
            text-sm
            leading-relaxed
          "
        >
          {event.description}
        </p>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
}