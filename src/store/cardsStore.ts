import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IData {
  pagination: "start" | "game" | "finish";
  userWin: boolean;
  userTime: number;
}

interface IActions {
  setPagination: (pagination: "start" | "game" | "finish") => void;
  setUserWin: (userWin: boolean) => void;
  setUserTime: (userTime: number) => void;
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
    }),
    {
      name: "cards-storage",
      partialize: (state) => ({
        // pagination: state.pagination,
      }),
    },
  ),
);
