interface Props {
  changePagination: (newPage: "start" | "game" | "finish") => void;
}

export const StartPage = ({ changePagination }: Props) => {
  return (
    <>
      <p>Start Page</p>
      <button onClick={() => changePagination("game")}>Next Page</button>
    </>
  );
};
