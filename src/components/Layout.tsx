import { useState, type ReactNode } from "react";
import soundOn from "../assets/images/sound--on.svg";
import soundOff from "../assets/images/sound--off.svg";
import { useCardsStore } from "../store/cardsStore";
import { useAudio } from "../hooks/useAudio";
import backgoundAudio from "../assets/audio/background.mp3";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { pagination } = useCardsStore();
  const { audioRef, play, pause } = useAudio();
  const [isSoundOn, setIsSoundOn] = useState(false);

  function playAudio() {
    if (isSoundOn) {
      setIsSoundOn(false);
      pause();
    } else {
      setIsSoundOn(true);
      play();
    }
  }

  return (
    <div className="flex flex-col bg-orange-100 w-screen h-screen">
      <div className="flex justify-end p-4 md:p-8">
        {pagination === "game" && (
          <>
            <button
              className="p-0 border-none bg-transparent"
              onClick={playAudio}
            >
              <img
                src={isSoundOn ? soundOn : soundOff}
                alt="button"
                className="w-8 h-8 object-cover"
              />
            </button>
            <audio ref={audioRef} loop>
              <source src={backgoundAudio} type="audio/mpeg" />
            </audio>
          </>
        )}
      </div>
      {children}
    </div>
  );
};
