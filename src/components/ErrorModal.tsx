interface Props {
  isOpen: boolean;
}

export const ErrorModal = ({ isOpen }: Props) => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 bg-blue-950/60 flex items-center justify-center z-50 w-screen h-screen">
      <div className="relative bg-red-700 rounded-2xl p-6 shadow-lg z-10 text-white">
        <p>sorry, but this is not a match</p>
      </div>
    </div>
  );
};
