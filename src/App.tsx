import { FinishPage } from "./pages/FinishPage";
import { GamePage } from "./pages/GamePage";
import { StartPage } from "./pages/StartPage";
import { useCardsStore } from "./store/cardsStore";

function App() {
  const { pagination } = useCardsStore();

  switch (pagination) {
    case "start":
      return <StartPage />;
    case "game":
      return <GamePage />;
    case "finish":
      return <FinishPage />;
    default:
      return <StartPage />;
  }
}

export default App;
