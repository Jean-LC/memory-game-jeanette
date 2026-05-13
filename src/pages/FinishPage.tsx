interface Props {
  changePagination: (newPage: "start" | "game" | "finish") => void;
}

export const FinishPage = ({ changePagination }: Props) => {
  return (
    <>
      <p>Finish Page</p>
      <button onClick={() => changePagination("start")}>Next Page</button>
    </>
  );
};
