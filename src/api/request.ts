import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const apiRequest = {
  pokemon: "pokemon",
  collection: "pokedex",
  ability: "ability",
};
