// src/components/MusicPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(267);
  const [imageError, setImageError] = useState(false);
const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);
  
  const musicUrl = '/ay-vamos.mpeg';
  const photoUrl = '/foto.jpeg';
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);
  
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  
  const progressPercentage = (currentTime / duration) * 100;
    
  return (
    <div className="bg-black/90 backdrop-blur-md px-6 py-5">
      <audio
        ref={audioRef}
        src={musicUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Título "Para uma Izis" */}
      <div className="text-center mb-6">
        <p className="text-pink-400 text-sm tracking-[3px] font-medium">
          PARA HESDIHÁ
        </p>
      </div>
      
      {/* FOTO GRANDE COM ANIMAÇÃO SUTIL QUANDO TOCA */}
      <div className="flex justify-center mb-6">
        <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-500 to-rose-500 transition-all duration-300 ${isPlaying ? 'shadow-pink-500/50' : ''}`}>
          {!imageError ? (
            <img
              src={photoUrl}
              alt="Vinicius e Hesdhia"
              className={`w-full h-auto object-cover transition-all duration-300 ${isPlaying ? 'scale-[1.02]' : 'scale-100'}`}
              style={{ aspectRatio: '1/1' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full aspect-square flex flex-col items-center justify-center text-white text-center p-4">
              <span className="text-6xl mb-2">📸</span>
              <span className="text-sm">Foto não encontrada</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Informações da música */}
      <div className="text-center mb-6">
        <h3 className="text-white font-bold text-xl">
          J. Balvin - Ay Vamos (Official Video)
        </h3>
        <p className="text-gray-400 text-base mt-1">
          J Balvin
        </p>
      </div>
      
      {/* Tempo e barra de progresso */}
      <div className="mb-6">
        <div className="flex justify-between text-gray-400 text-sm mb-2">
          <span>{formatTime(currentTime)}</span>
          <span>-{formatTime(duration - currentTime)}</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-1.5 group cursor-pointer">
          <div
            className="bg-gradient-to-r from-pink-500 to-rose-500 h-1.5 rounded-full transition-all duration-100 relative"
            style={{ width: `${progressPercentage}%` }}
          >
            <div className="w-3 h-3 bg-white rounded-full absolute -right-1.5 -top-[3px] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
      
      {/* Botão Play centralizado SUPER SOFISTICADO */}
      <div className="flex justify-center items-center gap-6">
        {/* Botão Anterior */}
        <button 
          className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = 0;
            }
          }}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>
        
       {/* Botão Play/Pause estilo Apple Music */}
<button
  onClick={togglePlay}
  className={`
    relative group
    w-24 h-24 rounded-full 
    bg-white
    flex items-center justify-center
    shadow-2xl transition-all duration-300
    hover:scale-105
    ${isPlaying ? 'shadow-pink-500/30' : 'shadow-gray-500/30'}
  `}
>
  {/* Efeito de brilho */}
  <div className={`
    absolute inset-0 rounded-full 
    bg-gradient-to-r from-pink-500 to-rose-500 
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
    blur-md
  `}></div>
  
  {/* Ícone */}
  <div className="relative z-10 text-pink-500">
    {isPlaying ? (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
        <rect x="6" y="4" width="4" height="16" rx="1"/>
        <rect x="14" y="4" width="4" height="16" rx="1"/>
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="ml-1">
        <path d="M8 5v14l11-7z"/>
      </svg>
    )}
  </div>
</button>
        
        {/* Botão Próximo */}
        <button 
          className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = Math.min(duration, currentTime + 10);
            }
          }}
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M16 6h2v12h-2zm-3.5 6l-8.5-6v12z"/>
          </svg>
        </button>
      </div>
      
      {/* Adicionar animação CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(236, 72, 153, 0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}