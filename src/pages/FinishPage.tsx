import { useEffect, useState } from "react";
import { BestTimeTable } from "../components/BestTimeTable";
import { Layout } from "../components/Layout";
import { useCardsStore } from "../store/cardsStore";
import logo from "../assets/images/logo.svg";
import { EnterNameModal } from "../components/EnterNameModal";
import winAudio from "../assets/audio/win.mp3";
import looseAudio from "../assets/audio/loose.mp3";
import { useAudio } from "../hooks/useAudio";

export const FinishPage = () => {
  const { setPagination, userWin, userTime, bestTimes } = useCardsStore();
  const { audioRef, play } = useAudio();
  const [isOpenModal, setIsOpenModal] = useState(false);

  function validateTime() {
    if (!userTime) return;
    const existingTime = bestTimes.find((record) => record.time === userTime);
    const allTimes = [...bestTimes.map((record) => record.time), userTime]
      .sort((a, b) => a - b)
      .slice(0, 3);

    if (!existingTime && allTimes.includes(userTime)) setIsOpenModal(true);
  }

  useEffect(() => {
    if (userWin) {
      validateTime();
    }
    play();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <img
          src={logo}
          alt="logo"
          className={"w-1/4 md:w-1/12 h-auto object-contain"}
        />
        <p
          className={` text-2xl md:text-4xl ${userWin ? "text-green-700 animate-bounce" : "text-red-700"} my-4 md:my-16 text-center`}
        >
          {userWin ? "you did it" : "oops you didn't find them all"}
        </p>
        <div className="flex justify-center items-center w-full">
          <button
            className="w-2xs h-8 bg-blue-900 text-yellow-500 rounded-md hover:animate-bounce mx-4 cursor-pointer"
            onClick={() => setPagination("start")}
          >
            Change difficulty
          </button>
          <button
            className="w-2xs h-8 bg-yellow-500 text-blue-900 rounded-md hover:animate-bounce mx-4 cursor-pointer"
            onClick={() => setPagination("game")}
          >
            Play again
          </button>
        </div>
      </div>
      <BestTimeTable />
      <EnterNameModal
        isOpen={isOpenModal}
        close={() => setIsOpenModal(false)}
      />
      <audio ref={audioRef}>
        <source src={userWin ? winAudio : looseAudio} type="audio/mpeg" />
      </audio>
    </Layout>
  );
};
