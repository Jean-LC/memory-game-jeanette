import { Layout } from "../components/Layout";
import logo from "../assets/images/logo.svg";
import { useCardsStore } from "../store/cardsStore";
import { useState, useEffect } from "react";

export const StartPage = () => {
  const { setPagination } = useCardsStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        {/* <h1
          className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
        >
          Mi Título
        </h1> */}
        <img
          src={logo}
          alt="logo"
          className={`w-1/2 md:w-1/4 h-auto object-contain transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        />
        <p className="text-2xl text-blue-800 my-8 text-center">
          Welcome to the memory game!
        </p>
        <button
          className={`w-2xs h-8 bg-blue-900 text-yellow-500  rounded-md transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} hover:animate-bounce`}
          onClick={() => setPagination("game")}
        >
          Start
        </button>
      </div>
    </Layout>
  );
};
