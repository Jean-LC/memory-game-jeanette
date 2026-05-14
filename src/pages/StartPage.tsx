import { Layout } from "../components/Layout";
import logo from "../assets/images/logo.svg";
import { useCardsStore } from "../store/cardsStore";
import { useState, useEffect } from "react";

const timerValues = [
  {
    time: 60,
    label: "easy",
  },
  {
    time: 30,
    label: "medium",
  },
  {
    time: 15,
    label: "hard",
  },
];

export const StartPage = () => {
  const { setPagination, time, setTime } = useCardsStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <img
          src={logo}
          alt="logo"
          className={`w-1/2 md:w-1/6 h-auto object-contain transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        />
        <h1 className="text-2xl text-blue-800 my-8 text-center">
          Welcome to the memory game!
        </h1>
        <p className="text-blue-800">Select the difficulty</p>
        <div className="flex justify-center items-center w-full mb-16">
          {timerValues.map((item) => (
            <button
              key={item.time}
              className={`w-20 h-8 ${time === item.time ? "bg-blue-900 text-yellow-500" : "bg-blue-900/50 text-blue-900"} rounded-md mx-4 cursor-pointer transition delay-100 duration-200 ease-out hover:-translate-y-1 hover:scale-110`}
              onClick={() => setTime(item.time)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`w-2xs h-8 bg-yellow-500 text-blue-900 cursor-pointer rounded-md transition-all delay-100 duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} hover:animate-bounce`}
          onClick={() => setPagination("game")}
        >
          Start
        </button>
      </div>
    </Layout>
  );
};
