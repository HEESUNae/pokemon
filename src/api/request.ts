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

// 포켓몬스터 api
export const totalPokeApi = async () => {
  const { data } = await axiosApi.get(apiRequest["pokemon"]);
  return data;
};

// 몬스터 이름 / 이미지 가져오기
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
