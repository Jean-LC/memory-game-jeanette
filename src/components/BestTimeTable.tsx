import { useCardsStore } from "../store/cardsStore";
import { imagesList } from "../utils/imagesList";

export const BestTimeTable = () => {
  const { bestTimes } = useCardsStore();

  return (
    <div className="flex flex-col justify-center items-center w-full h-1/2 ">
      <h3 className="text-blue-900 font-medium text-md  animate-pulse">
        BEST TIMES
      </h3>
      {bestTimes.length > 0 ? (
        bestTimes.map((bestTime, i) => (
          <div
            className="w-2/3 md:w-1/3 h-1/4 bg-indigo-900/70 rounded-md flex justify-between my-2"
            key={bestTime.time}
          >
            <div className="flex flex-col justify-center pl-6">
              <p className="text-amber-500 font-semibold">{bestTime.name}</p>
              <p className="text-amber-300 text-sm">{bestTime.time} seconds</p>
            </div>
            <img
              src={imagesList[i + 1].src}
              alt="space-illustration"
              className="w-auto h-full object-contain p-2"
            />
          </div>
        ))
      ) : (
        <p className="text-indigo-900 text-md">
          There are no ratings yet… be the first one!
        </p>
      )}
    </div>
  );
};
