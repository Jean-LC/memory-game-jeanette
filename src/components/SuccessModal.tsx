import { useAudio } from "../hooks/useAudio";
import correctAudio from "../assets/audio/correct.mp3";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
}

export const SuccessModal = ({ isOpen }: Props) => {
  const { audioRef, play } = useAudio();

  useEffect(() => {
    if (isOpen) play();
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 bg-blue-950/60 flex items-center justify-center z-50 w-screen h-screen">
      <div className="relative bg-green-600 rounded-2xl p-6 shadow-lg z-10 text-white">
        <p>nice! it's a match</p>
      </div>
      <audio ref={audioRef} loop>
        <source src={correctAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
};
