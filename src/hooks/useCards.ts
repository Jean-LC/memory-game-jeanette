import { useEffect, useState } from "react";
import comet from "../assets/images/comet.svg";
import moon from "../assets/images/moon.svg";
import star from "../assets/images/star.svg";
import sun from "../assets/images/sun.svg";
import type { IShuffledCards } from "../interfaces/cardsInterface";
import { useCardsStore } from "../store/cardsStore";
import { useTimer } from "./useTimer";

const imagesList = [
  {
    id: 1,
    src: comet,
  },
  {
    id: 2,
    src: moon,
  },
  {
    id: 3,
    src: star,
  },
  {
    id: 4,
    src: sun,
  },
];

export const useCards = () => {
  const { setPagination, setUserWin } = useCardsStore();
  const [cards, setCards] = useState<IShuffledCards[]>([]);
  const [flipped, setFlipped] = useState<IShuffledCards[]>([]);
  const [matched, setMatched] = useState<IShuffledCards[]>([]);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSucess] = useState(false);

  const time = useTimer(30, () => {
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
    if (flipped.length === 2 || !selectedCard) return;
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
    checkPairFlipped();
  }, [flipped]);

  return {
    cards,
    flipped,
    matched,
    isCardShown,
    flipCard,
    openError,
    openSuccess,
    time
  };
};
