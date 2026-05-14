interface Props {
  flipCard: () => void;
}

export const BackCard = ({ flipCard }: Props) => {
  return (
    <div
      className="bg-blue-900 flex justify-center items-center w-30 h-30 md:w-60 md:h-60 rounded-xl "
      onClick={flipCard}
    >
      <p className="text-6xl md:text-9xl text-yellow-500">?</p>
    </div>
  );
};
