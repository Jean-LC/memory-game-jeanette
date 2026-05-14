import { useState, type ChangeEvent } from "react";
import { useCardsStore } from "../store/cardsStore";

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const EnterNameModal = ({ isOpen, close }: Props) => {
  const { setBestTimes, bestTimes, userTime } = useCardsStore();
  const [name, setName] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    const value = e.target.value;
    const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    setName(onlyLetters);
  }

  function handleContinue() {
    const updatedTimes = [...bestTimes, { name, time: userTime }]
      .sort((a, b) => a.time - b.time)
      .slice(0, 3);
    setBestTimes(updatedTimes);
    close();
  }

  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 bg-blue-950/60 flex items-center justify-center z-50 w-screen h-screen">
      <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 relative bg-indigo-900 rounded-2xl p-6 shadow-lg z-10 text-yellow-500 flex flex-col justify-center items-center">
        <p className="text-2xl md:text-4xl font-bold">Congratulations!</p>
        <p className="text-md md:text-2xl">You are among the best</p>
        <div className="flex flex-col justify-start mt-20">
          <label htmlFor="name" className=" text-xs md:text-sm text-indigo-300">
            Enter your name
          </label>
          <div className="relative">
            <input
              id="name"
              type="text"
              className="px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none"
              maxLength={10}
              value={name}
              onChange={handleChange}
            />
            <p className="text-indigo-300 text-xs absolute end-1.5 bottom-1.5">
              {name.length}/10
            </p>
          </div>
        </div>
        <button
          className="w-1/2 md:w-1/8 h-8 bg-yellow-500 text-indigo-900 rounded-md mt-8 cursor-pointer disabled:bg-yellow-500/50 disabled:cursor-not-allowed"
          onClick={handleContinue}
          disabled={name.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
