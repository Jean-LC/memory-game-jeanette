import { Layout } from "../components/Layout";
import logo from "../assets/images/logo.svg";
import { useCardsStore } from "../store/cardsStore";

export const StartPage = () => {
  const { setPagination } = useCardsStore();
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <img
          src={logo}
          alt="logo"
          className="w-1/2 md:w-1/4 h-auto object-contain"
        />
        <p className="text-2xl text-violet-500 my-8 text-center">
          Welcome to the memory game!
        </p>
        <button
          className="w-16 h-8 bg-violet-400 text-white rounded-md "
          onClick={() => setPagination("game")}
        >
          Start
        </button>
      </div>
    </Layout>
  );
};
