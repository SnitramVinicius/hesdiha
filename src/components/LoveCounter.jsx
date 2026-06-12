// src/components/LoveCounter.jsx
import React, { useState, useEffect } from 'react';

export default function LoveCounter() {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date(2019, 1, 17); // 17/02/2019
    
    const updateCounter = () => {
      const now = new Date();
      let diff = now - startDate;
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      diff -= years * (1000 * 60 * 60 * 24 * 365);
      
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      diff -= months * (1000 * 60 * 60 * 24 * 30);
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      
      const seconds = Math.floor(diff / 1000);
      
      setTimeTogether({ years, months, days, hours, minutes, seconds });
    };
    
    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const StatBox = ({ value, label }) => (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-rose-300 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center min-w-[70px] shadow-md border border-pink-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        <div className="absolute -top-2 -right-2 text-pink-300 text-xs opacity-0 group-hover:opacity-100 transition">
          ✨
        </div>
        
        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          {value}
        </div>
        
        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative mx-4 my-4">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-2xl blur-xl opacity-30"></div>
      
      <div className="relative bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* FOTO MAIOR - altura aumentada para h-64 */}
        <div className="relative w-full h-64 overflow-hidden">
          <img 
            src="/104595-01.jpeg" 
            alt="Vinicius e Heshidhá"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -mr-16 -mt-16 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-100 rounded-full -ml-12 -mb-12 opacity-30"></div>
        
        <div className="relative text-center pt-4 pb-2 px-6">
          <h3 className="text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-lg font-bold tracking-wide">
            Tempo juntos
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            Desde o dia que tudo começou
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mt-3 rounded-full"></div>
        </div>
        
        <div className="relative p-6">
          <div className="flex flex-wrap justify-center gap-3">
            <StatBox value={timeTogether.years} label="Anos" />
            <StatBox value={timeTogether.months} label="Meses" />
            <StatBox value={timeTogether.days} label="Dias" />
            <StatBox value={timeTogether.hours} label="Horas" />
            <StatBox value={timeTogether.minutes} label="Minutos" />
            <StatBox value={timeTogether.seconds} label="Segundos" />
          </div>
        </div>
        
        <div className="relative text-center pb-6">
          <div className="inline-flex items-center gap-2 text-pink-400 text-xs">
            <span className="text-pink-300">✦</span>
            <span>Contando cada segundo ao seu lado</span>
            <span className="text-pink-300">✦</span>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}