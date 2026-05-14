import { Layout } from "../components/Layout";
import { useCardsStore } from "../store/cardsStore";

export const FinishPage = () => {
  const { setPagination, userWin } = useCardsStore();
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <p
          className={`text-4xl ${userWin ? "text-green-700" : "text-red-700"} my-16 text-center`}
        >
          {userWin ? "You did it!" : "oops you didn't find them all"}
        </p>
        <button
          className="w-sm h-8 bg-yellow-500 text-white rounded-md hover:animate-bounce"
          onClick={() => setPagination("game")}
        >
          Play again
        </button>
      </div>
    </Layout>
  );
};
