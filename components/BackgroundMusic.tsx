'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4; // Set a reasonable default volume
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          // Show a UI element to let the user manually start playback
          console.log("Autoplay prevented:", error);
          
          // Optional: Add a one-time click listener to document to start audio
          const handleUserInteraction = () => {
            audio.play();
            document.removeEventListener('click', handleUserInteraction);
          };
          document.addEventListener('click', handleUserInteraction);
        });
      }
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/bgm.mp3"
      loop
      preload="auto"
    />
  );
}
