import { BackCard } from "../components/BackCard";
import { Layout } from "../components/Layout";
import { FrontCard } from "../components/FrontCard";
import { useCards } from "../hooks/useCards";
import { SuccessModal } from "../components/SuccessModal";
import { ErrorModal } from "../components/ErrorModal";

export const GamePage = () => {
  const { cards, isCardShown, flipCard, openError, openSuccess, time } =
    useCards();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div
          className={`flex justify-center items-center my-16 ${time < 11 ? "text-red-500 font-medium" : "text-blue-900"} text-xl`}
        >
          <p>{time}</p>
          <p className="mx-4">seconds left</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card) =>
            isCardShown(card.uniqueId) ? (
              <FrontCard url={card.src} key={card.uniqueId} />
            ) : (
              <BackCard
                key={card.uniqueId}
                flipCard={() => flipCard(card.uniqueId)}
              />
            ),
          )}
        </div>
        <SuccessModal isOpen={openSuccess} />
        <ErrorModal isOpen={openError} />
      </div>
    </Layout>
  );
};
