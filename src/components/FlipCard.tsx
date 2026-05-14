interface Props {
  imageUrl: string;
  isFlipped: boolean;
  handleFlip: () => void;
}

export const FlipCard = ({ imageUrl, isFlipped, handleFlip }: Props) => {
  return (
    <div
      className="w-30 h-30 md:w-60 md:h-60 cursor-pointer mx-auto"
      style={{ perspective: "1000px" }}
      onClick={handleFlip}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 bg-blue-900 flex justify-center items-center p-4 sm:p-6 text-center rounded-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-6xl md:text-9xl text-yellow-500">?</p>
        </div>

        <div
          className="absolute inset-0 bg-cyan-700 flex justify-center p-4 sm:p-6 items-center rounded-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={imageUrl}
            alt="memory-card"
            className="w-full h-auto object-contain p-2"
          />
        </div>
      </div>
    </div>
  );
};
