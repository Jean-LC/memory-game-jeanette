interface Props {
  flipCard: () => void;
}

export const BackCard = ({ flipCard }: Props) => {
  return (
    <div
      className="bg-blue-900 flex justify-center items-center w-xs h-50 rounded-xl"
      onClick={flipCard}
    >
      <p className="text-9xl text-yellow-500">?</p>
    </div>
  );
};
