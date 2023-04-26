import React from "react";

// libraries
import { axiosApi, apiRequest } from "../../../api/request";
import { useQuery } from "react-query";
import { PrimaryBtn } from "../../button/PrimaryBtn";

const usePokemon = () => {
  return useQuery("pokemon", async () => {
    const { data } = await axiosApi.get(apiRequest["pokemon"]);
    const result = data.results;

    let pokemonResult = [];
    for (const index in result) {
      const res = await axiosApi.get(apiRequest["pokemon"] + `/${Number(index) + 1}`);
      pokemonResult.push(res.data);
    }
    return pokemonResult;
  });
};

export const PokemonCard = () => {
  const { data: pokemons } = usePokemon();

  if (!pokemons) return <></>;
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} id={`pokemon-${pokemon.id}`} className="pokemon-card">
            <img src={pokemon.sprites.back_default} alt="포켓몬이미지" />
            <p>{pokemon.name}</p>
            <PrimaryBtn title="잡기" />
          </div>
        );
      })}
    </>
  );
};
