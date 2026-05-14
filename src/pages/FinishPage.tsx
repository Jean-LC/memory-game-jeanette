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
    </Layout>
  );
};
