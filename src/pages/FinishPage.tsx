import { BestTimeTable } from "../components/BestTimeTable";
import { Layout } from "../components/Layout";
import { useCardsStore } from "../store/cardsStore";
import logo from "../assets/images/logo.svg";
import { EnterNameModal } from "../components/EnterNameModal";
import { useEffect, useState } from "react";

export const FinishPage = () => {
  const { setPagination, userWin, userTime, bestTimes } = useCardsStore();
  const [isOpenModal, setIsOpenModal] = useState(false);

  function validateTime() {
    const existingTime = bestTimes.find((record) => record.time === userTime);
    const allTimes = [...bestTimes.map((record) => record.time), userTime]
      .sort((a, b) => a - b)
      .slice(0, 3);

    if (!existingTime && allTimes.includes(userTime)) setIsOpenModal(true);
  }

  useEffect(() => {
    validateTime();
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
          className={` text-2xl md:text-4xl ${userWin ? "text-green-700" : "text-red-700"} my-4 md:my-16 text-center`}
        >
          {userWin ? "You did it!" : "oops you didn't find them all"}
        </p>
        <div className="flex justify-center items-center w-full">
          <button
            className="w-2xs h-8 bg-blue-900 text-yellow-500 rounded-md hover:animate-bounce mx-4"
            onClick={() => setPagination("start")}
          >
            Change difficulty
          </button>
          <button
            className="w-2xs h-8 bg-yellow-500 text-blue-900 rounded-md hover:animate-bounce mx-4"
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
    </Layout>
  );
};
