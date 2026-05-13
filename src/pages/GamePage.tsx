interface Props {
  changePagination: (newPage: "start" | "game" | "finish") => void;
}

export const GamePage = ({ changePagination }: Props) => {
  return (
    <>
      <p>Game Page</p>
      <button onClick={() => changePagination("finish")}>Next Page</button>
    </>
  );
};
