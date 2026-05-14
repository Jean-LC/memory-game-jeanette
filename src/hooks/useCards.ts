import { useEffect, useState } from "react";
import type { IShuffledCards } from "../interfaces/cardsInterface";
import { useCardsStore } from "../store/cardsStore";
import { useTimer } from "./useTimer";
import { imagesList } from "../utils/imagesList";

export const useCards = () => {
  const { setPagination, setUserWin, time, setUserTime } = useCardsStore();
  const [cards, setCards] = useState<IShuffledCards[]>([]);
  const [flipped, setFlipped] = useState<IShuffledCards[]>([]);
  const [matched, setMatched] = useState<IShuffledCards[]>([]);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSucess] = useState(false);

  const currentTime = useTimer(time, () => {
    setUserWin(false);
    setPagination("finish");
  });

  function shuffleCards() {
    setCards(
      [...imagesList, ...imagesList]
        .map((card) => ({ ...card, uniqueId: Math.random() }))
        .sort((a, b) => b.uniqueId - a.uniqueId),
    );
  }

  function isCardShown(uniqueId: number) {
    const isCardFlipped = flipped.find((card) => card.uniqueId === uniqueId);
    const isCardMatched = matched.find((card) => card.uniqueId === uniqueId);

    if (isCardFlipped || isCardMatched) return true;
    return false;
  }

  function flipCard(uniqueId: number) {
    const selectedCard = cards.find((card) => card.uniqueId === uniqueId);
    const isCardSelected = flipped.find((card) => card.uniqueId === uniqueId)
    if (flipped.length === 2 || isCardSelected || !selectedCard) return;
    setFlipped([...flipped, selectedCard]);
  }

  function checkPairFlipped() {
    const newMatched = [...matched, ...flipped];
    if (flipped[0].id === flipped[1].id) {
      setOpenSucess(true);
      setMatched(newMatched);
    } else {
      setOpenError(true);
    }

    setTimeout(() => {
      clearFlipped();
      if (newMatched.length === 8) {
        setUserTime(time - currentTime);
        setUserWin(true);
        setPagination("finish");
      }
    }, 1000);
  }
  function clearFlipped() {
    setFlipped([]);
    setOpenError(false);
    setOpenSucess(false);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (flipped.length < 2) return;
    setTimeout(checkPairFlipped, 500);
  }, [flipped]);

  return {
    cards,
    flipped,
    matched,
    isCardShown,
    flipCard,
    openError,
    openSuccess,
    currentTime,
  };
};
