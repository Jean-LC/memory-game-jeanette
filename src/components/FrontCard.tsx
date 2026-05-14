interface Props {
  url: string;
}

export const FrontCard = ({ url }: Props) => {
  return (
    <div className="bg-cyan-700 flex justify-center  w-30 h-30 md:w-60 md:h-60 items-center rounded-xl">
      <img
        src={url}
        alt="memory-card"
        className="w-full md:w-1/2 h-auto object-contain p-2"
      />
    </div>
  );
};
