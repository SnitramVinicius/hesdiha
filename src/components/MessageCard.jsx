// src/components/MessageCard.jsx
import React, { useState, useEffect } from 'react';

export default function MessageCard() {
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const message = `Minha querida Hesdhia,

Hoje não quero falar apenas sobre o Dia dos Namorados. Quero falar sobre nós. Sobre a história que começamos a escrever em 17 de fevereiro de 2019 e que, desde então, transformou completamente a minha vida.

Ao longo desses anos, vivemos momentos inesquecíveis, enfrentamos desafios, celebramos conquistas e construímos algo que vai muito além de um relacionamento. Construímos uma família. O Zayan, o Zarack e a nossa pequena Zayla são os maiores símbolos do amor que compartilhamos e dos sonhos que realizamos juntos.

Quando olho para trás, vejo que os melhores capítulos da minha vida têm você em cada página. Seu sorriso, sua força, seu jeito de cuidar de quem ama e a mulher incrível que você é fizeram de você alguém impossível de substituir no meu coração.

Talvez eu não encontre palavras perfeitas para descrever tudo o que sinto, mas quero que saiba que cada lembrança ao seu lado tem um valor imenso para mim. Cada abraço, cada conversa, cada momento simples que vivemos juntos ajudou a construir a história mais importante da minha vida.

Obrigado por tudo o que compartilhamos até aqui. Obrigado pela família que construímos. Obrigado por fazer parte da minha caminhada.

Neste Dia dos Namorados, quero apenas que você saiba que, entre todas as escolhas que a vida poderia ter me dado, ter você na minha história continua sendo uma das mais especiais.

Com carinho,

Vinicius `;

  const handleOpenMessage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowMessage(true);
      setIsAnimating(false);
    }, 300);
  };

  const handleCloseMessage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative mx-4 my-4">
      {/* Efeito de brilho atrás do card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div>
      
      {/* Card principal */}
      <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Decoração de corações flutuantes no fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 text-4xl animate-float-slow">❤️</div>
          <div className="absolute bottom-4 right-4 text-3xl animate-float-medium">💕</div>
          <div className="absolute top-1/2 left-8 text-2xl animate-float-fast">💖</div>
          <div className="absolute bottom-1/3 right-8 text-3xl animate-float-slow">💗</div>
        </div>
        
        {/* Conteúdo do card */}
        <div className="relative p-6 backdrop-blur-sm">
          
          <div className="text-center mb-4">
            <h3 className="text-white text-2xl font-bold tracking-wide">
              Carta de Amor
            </h3>
            <div className="w-16 h-0.5 bg-white/40 mx-auto mt-2 rounded-full"></div>
          </div>
          
          {/* Botão ou Mensagem */}
          {!showMessage ? (
            <div className="text-center">
              <p className="text-white/80 text-sm mb-4">
                Uma carta especial espera por você 
              </p>
              <button
                onClick={handleOpenMessage}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                  relative group w-full overflow-hidden
                  bg-white/20 backdrop-blur-md
                  text-white font-semibold py-4 rounded-xl
                  transition-all duration-300
                  border border-white/30
                  ${isHovered ? 'scale-[1.02] shadow-2xl' : 'scale-100'}
                `}
              >
                {/* Efeito de brilho no hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0
                  transition-transform duration-700
                  ${isHovered ? 'translate-x-full' : '-translate-x-full'}
                `}></div>
                
                <span className="relative flex items-center justify-center gap-2">
                  <span className="text-xl"></span>
                  Abrir Carta Especial
                  <span className="text-xl group-hover:translate-x-1 transition">→</span>
                </span>
              </button>
              
              {/* Selo decorativo */}
              <div className="mt-4 flex justify-center gap-1">
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              </div>
            </div>
          ) : (
            <div className={`
              transition-all duration-500 transform
              ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
            `}>
              {/* Cabeçalho da carta aberta */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl"></span>
                  <span className="text-white/80 text-xs tracking-wider">CARTA ABERTA</span>
                </div>
                <button
                  onClick={handleCloseMessage}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
              
              {/* Conteúdo da mensagem com scroll elegante */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="h-80 overflow-y-auto px-2 custom-scrollbar">
                  <p className="text-white leading-relaxed whitespace-pre-line text-sm">
                    {message}
                  </p>
                </div>
              </div>
              
              {/* Rodapé da carta */}
              <div className="mt-4 pt-3 border-t border-pink-200 flex justify-between items-center">
                <div className="flex gap-1">
                  <span className="text-pink-400 text-xs">✧</span>
                  <span className="text-pink-400 text-xs">✧</span>
                  <span className="text-pink-400 text-xs">✧</span>
                </div>
                <button
                  onClick={handleCloseMessage}
                  className="text-white text-sm hover:text-pink-700 transition flex items-center gap-1"
                >
                  <span>Fechar</span>
                  <span>✕</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        /* Scrollbar personalizada */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fce7f3;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ec4899;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #db2777;
        }
      `}</style>
    </div>
  );
}