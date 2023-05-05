import React from "react";

// style
import { StyledPokemonCard } from "./style";

// libraries
import { useLocation } from "react-router-dom";

// store
import { useStore } from "../../../api/store";

// interfaces
import { PokemonsInterface } from "../../../api/interfaces";

// component
import { PrimaryBtn } from "../../button/PrimaryBtn";

interface PokemonCardProps {
  searchList: PokemonsInterface[];
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ searchList }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const { pokemonStore, setPokemonStore } = useStore();

  const handleCatchMonster = (pokemon: PokemonsInterface) => {
    const index = pokemonStore.findIndex((item) => item.id === pokemon.id);
    pokemonStore[index].catch = pokemonStore[index].catch === 1 ? 0 : 1;
    setPokemonStore(pokemonStore);
  };

  return (
    <StyledPokemonCard>
      <div className="pokemon-card-wrap">
        {searchList.map((pokemon) => {
          return (
            <div key={pokemon.id} className="pokemon-card">
              <img src={pokemon.image} alt="포켓몬 이미지" />
              <p>{pokemon.name}</p>
              {currentPath !== "catch" && <PrimaryBtn title={pokemon.catch === 1 ? "버리기" : "잡기"} onClick={() => handleCatchMonster(pokemon)} active={pokemon.catch === 1 ? "active" : ""} />}
            </div>
          );
        })}
      </div>
    </StyledPokemonCard>
  );
};
