import { Layout } from "../components/Layout";
import { useCards } from "../hooks/useCards";
import { SuccessModal } from "../components/SuccessModal";
import { ErrorModal } from "../components/ErrorModal";
import { useAudio } from "../hooks/useAudio";
import tickingAudio from "../assets/audio/ticking.mp3";
import { useEffect } from "react";
import { FlipCard } from "../components/FlipCard";

export const GamePage = () => {
  const { audioRef, play } = useAudio();
  const {
    cards,
    isCardShown,
    flipCard,
    isAnimating,
    openError,
    openSuccess,
    currentTime,
  } = useCards();

  useEffect(() => {
    if (currentTime === 10) play();
  }, [currentTime]);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div
          className={`flex justify-center items-center my-2 md:my-16 ${currentTime < 11 ? "text-red-500 font-medium" : "text-blue-900"} text-xl`}
        >
          <audio ref={audioRef} loop>
            <source src={tickingAudio} type="audio/mpeg" />
          </audio>
          <p>{currentTime}</p>
          <p className="mx-4">seconds left</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {cards.map((card) => (
            <FlipCard
              key={card.uniqueId}
              imageUrl={card.src}
              isFlipped={isCardShown(card.uniqueId)}
              isAnimating={isAnimating}
              handleFlip={() => flipCard(card.uniqueId)}
            />
          ))}
        </div>
        <SuccessModal isOpen={openSuccess} />
        <ErrorModal isOpen={openError} />
      </div>
    </Layout>
  );
};
