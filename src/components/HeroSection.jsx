// src/components/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <div className="text-center py-12 px-4">
      <p className="text-pink-500 text-lg mb-2">Para uma</p>
      <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-4">
        Izis
      </h1>
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-pink-700">Sobre o casal</h2>
        <p className="text-xl text-gray-700 mt-2">Vinicius Martins e Hesdihá Izis</p>
        <p className="text-pink-500 mt-1">Juntos desde 2019</p>
      </div>
    </div>
  );
}