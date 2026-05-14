import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IData {
  pagination: "start" | "game" | "finish";
  userWin: boolean;
  userTime: number;
  time: number;
  bestTimes: { name: string; time: number }[];
}

interface IActions {
  setPagination: (pagination: "start" | "game" | "finish") => void;
  setUserWin: (userWin: boolean) => void;
  setUserTime: (userTime: number) => void;
  setTime: (time: number) => void;
  setBestTimes: (bestTimes: { name: string; time: number }[]) => void;
}

export const useCardsStore = create<IData & IActions>()(
  persist(
    (set) => ({
      pagination: "start",
      setPagination: (pagination: "start" | "game" | "finish") =>
        set({ pagination }),

      userWin: false,
      setUserWin: (userWin) => set({ userWin }),

      userTime: 0,
      setUserTime: (userTime) => set({ userTime }),

      time: 30,
      setTime: (time) => set({ time }),

      bestTimes: [],
      setBestTimes: (bestTimes) => set({ bestTimes }),
    }),
    {
      name: "cards-storage",
      partialize: (state) => ({
        bestTimes: state.bestTimes,
      }),
    },
  ),
);
