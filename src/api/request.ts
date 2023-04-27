import axios from "axios";
import { PokemonsInterface } from "./interfaces";

export const axiosApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const apiRequest = {
  pokemon: "pokemon",
  collection: "pokedex",
  ability: "ability",
};

export const totalPokeApi = async () => {
  const { data } = await axiosApi.get(apiRequest["pokemon"]);
  return data;
};

export const PokeListApi = async () => {
  const totalData = await totalPokeApi();
  let list = [];
  for (const index in totalData.results) {
    const { data } = await axiosApi.get(apiRequest["pokemon"] + `/${Number(index) + 1}`);
    const dataObj: PokemonsInterface[] = [
      {
        id: data.id,
        name: data.name,
        image: data.sprites.back_default,
        catch: 0,
      },
    ];
    list.push(...dataObj);
  }
  return list;
};

// 몬스터 이름/이미지 가져오기
// const getTodos = async () => {
//   const { data } = await axiosApi.get(apiRequest["pokemon"]);
//   for (const index in data.results) {
//     const result = await axiosApi.get(apiRequest["pokemon"] + `/${Number(index) + 1}`);
//     const dataObj: PokemonsInterface[] = [
//       {
//         id: result.data.id,
//         name: result.data.name,
//         image: result.data.sprites.back_default,
//         catch: 0,
//       },
//     ];
//     setMonsterArr((prev) => [...prev, ...dataObj]);
//   }
//   return pokemonStore;
// };
