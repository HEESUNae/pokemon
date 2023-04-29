import { create } from "zustand";

// interfaces
import { PokemonsInterface } from "./interfaces";

interface StoreInterface {
  pokemonStore: PokemonsInterface[];
}

export const useStore = create<StoreInterface>()((set) => ({
  pokemonStore: [],
}));
