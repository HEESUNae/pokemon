import { create } from "zustand";

// interfaces
import { PokemonsInterface } from "./interfaces";

interface StoreInterface {
  pokemonStore: PokemonsInterface[];
  setPokemonStore: (result: PokemonsInterface[]) => void;
  getCatchMonsters: (arr: PokemonsInterface[]) => PokemonsInterface[];
  getSearchMonsters: (arr: PokemonsInterface[], searchValue: string) => PokemonsInterface[];
}

export const useStore = create<StoreInterface>()((set) => ({
  pokemonStore: [],
  setPokemonStore: (result) =>
    set(() => ({
      pokemonStore: result,
    })),

  // 잡은 몬스터 배열 반환
  getCatchMonsters: (arr) => arr.filter((pokemon) => pokemon.catch === 1),

  // 검색결과
  getSearchMonsters: (arr, searchValue) => arr.filter((pokemon) => pokemon.name.includes(searchValue)),
}));
