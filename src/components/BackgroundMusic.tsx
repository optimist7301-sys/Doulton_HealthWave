import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // High-quality atmospheric piano track for a luxury feel
  const musicUrl = "https://cdn.pixabay.com/audio/2022/03/15/audio_78410a9771.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Low background volume
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Autoplay blocked or playback error:", error);
          // Browsers often block autoplay without interaction
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[45] md:bottom-8 md:right-8">
      <audio ref={audioRef} src={musicUrl}></audio>
      
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 10 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-brand-deep text-white text-[11px] font-bold py-2 px-4 rounded-full shadow-xl border border-white/10 hidden md:block"
            >
              {isPlaying ? '배경음악 끄기' : '고급스러운 배경음악 켜기'}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`group flex items-center justify-center w-12 h-12 rounded-full shadow-2xl transition-all duration-500 border ${
            isPlaying 
              ? 'bg-brand-accent border-brand-accent text-white shadow-brand-accent/30' 
              : 'bg-white/90 backdrop-blur-md border-brand-deep/10 text-brand-deep'
          }`}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-5 h-5 relative z-10" />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-white rounded-full"
              />
            </div>
          ) : (
            <Music className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          )}
        </motion.button>

        {isPlaying && (
          <div className="absolute -top-1 -right-1 flex gap-0.5 items-end h-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  height: [4, 10, 6, 12, 4],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-0.5 bg-brand-accent rounded-full"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
