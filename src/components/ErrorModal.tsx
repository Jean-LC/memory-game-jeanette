import { useEffect } from "react";
import { useAudio } from "../hooks/useAudio";
import incorrectAudio from "../assets/audio/incorrect.mp3";

interface Props {
  isOpen: boolean;
}

export const ErrorModal = ({ isOpen }: Props) => {
  const { audioRef, play } = useAudio();

  useEffect(() => {
    if (isOpen) play();
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 bg-blue-950/60 flex items-center justify-center z-50 w-screen h-screen">
      <div className="relative bg-red-700 rounded-2xl p-6 shadow-lg z-10 text-white">
        <p>sorry, but this is not a match</p>
      </div>
      <audio ref={audioRef} loop>
        <source src={incorrectAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
};
