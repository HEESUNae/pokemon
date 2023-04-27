import { create } from "zustand";

// interfaces
import { PokemonsInterface } from "./interfaces";

interface BearState {
  pokemonStore: PokemonsInterface[];
  increase: (by: PokemonsInterface[]) => void;
}

export const useStore = create<BearState>()((set) => ({
  pokemonStore: [],
  increase: (by) => set((state) => ({ pokemonStore: [...by] })),
}));