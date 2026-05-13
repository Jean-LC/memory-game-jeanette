import { useState } from "react";
import { FinishPage } from "./pages/FinishPage";
import { GamePage } from "./pages/GamePage";
import { StartPage } from "./pages/StartPage";

function App() {
  const [pagination, setPagination] = useState<"start" | "game" | "finish">(
    "start",
  );

  switch (pagination) {
    case "start":
      return <StartPage changePagination={setPagination} />;
    case "game":
      return <GamePage changePagination={setPagination} />;
    case "finish":
      return <FinishPage changePagination={setPagination} />;
    default:
      return <StartPage changePagination={setPagination} />;
  }
}

export default App;
