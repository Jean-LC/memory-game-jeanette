import { useRef } from "react";

export const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  return {
    audioRef,
    play,
    pause,
  };
};
