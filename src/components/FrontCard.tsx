interface Props {
  url: string;
}

export const FrontCard = ({ url }: Props) => {
  return (
    <div className="bg-cyan-700 flex justify-center w-xs h-50 items-center rounded-xl">
      <img
        src={url}
        alt="memory-card"
        className="w-1/2 h-auto object-contain p-2"
      />
    </div>
  );
};
