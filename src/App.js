// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import LoveCounter from './components/LoveCounter';
import MusicPlayer from './components/MusicPlayer';
import MessageCard from './components/MessageCard';
import Timeline from './components/Timeline';
import FloatingHearts from './components/FloatingHearts';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-100 via-red-50 to-pink-100">
      <FloatingHearts />
      
      <div className="max-w-md mx-auto pb-20">
        <MusicPlayer />
        <HeroSection />
        <LoveCounter />
        <MessageCard />
        <Timeline />
      </div>
    </div>
  );
}

export default App;