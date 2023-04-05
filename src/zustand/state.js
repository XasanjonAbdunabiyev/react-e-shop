import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useMode = create(
  persist(
    (set, state) => ({
      mode: "light",
      changeMode: () =>
        set(() => ({ mode: state().mode === "light" ? "dark" : "light" })),
    }),
    { name: "mode", storage: "" }
  )
);

export const useMessage = create(
  persist(
    (set, get) => ({
      user: { name: "", age: "" },
      setUser: (name, age) => set(() => ({ user: { name, age } })),
    }),
    { name: "login" }
  )
);
