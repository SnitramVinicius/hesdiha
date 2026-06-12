// src/components/FloatingHearts.jsx
import React, { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        size: Math.random() * 16 + 8
      };
      setHearts(prev => [...prev, newHeart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-rose-200 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            opacity: 0.4
          }}
        >
          ❤️
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float linear forwards;
        }
      `}</style>
    </div>
  );
}