import React from "react";

// component
import { PrimaryBtn } from "../../button/PrimaryBtn";

// interfaces
import { PokemonsInterface } from "../../../api/interfaces";

export const PokemonCard: React.FC<{ pokemons: PokemonsInterface[] }> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} id={`pokemon-${pokemon.id}`} className="pokemon-card">
            <img src={pokemon.image} alt="포켓몬이미지" />
            <p>{pokemon.name}</p>
            <PrimaryBtn title="잡기" />
          </div>
        );
      })}
    </>
  );
};
