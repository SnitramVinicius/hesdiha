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
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-6 text-center">
          <h2 className="text-white text-2xl font-bold">Nossa História</h2>
          <p className="text-white/80 text-sm mt-1">Uma jornada de amor e momentos especiais</p>
        </div>
        
        {/* Timeline Vertical Clean */}
        <div className="p-5">
          {events.map((event, index) => (
            <div key={index} className="relative mb-5 last:mb-0">
              {/* Linha conectora */}
              {index < events.length - 1 && (
                <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-pink-200"></div>
              )}
              
              <div className="flex gap-3">
                {/* Ícone */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-md">
                  <span className="text-white text-base">{event.icon}</span>
                </div>
                
                {/* Card */}
                <div className="flex-1 bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <span className="text-pink-500 text-xs font-bold">{event.date}</span>
                  <h3 className="text-gray-800 font-bold text-base mt-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}