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

interface PokemonCardInterface {
  searchList: PokemonsInterface[];
}

export const PokemonCard: React.FC<PokemonCardInterface> = ({ searchList }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const { pokemonStore } = useStore();

  const handleCatchMonster = (id: number) => {
    pokemonStore[id - 1].catch = pokemonStore[id - 1].catch === 1 ? 0 : 1;
    useStore.setState(() => ({ pokemonStore: pokemonStore }));
  };

  return (
    <StyledPokemonCard>
      <div className="pokemon-card-wrap">
        {searchList.map((pokemon, i) => {
          return (
            <div key={i} id={`pokemon-${pokemon.id}`} className="pokemon-card">
              <img src={pokemon.image} alt="포켓몬 이미지" />
              <p>{pokemon.name}</p>
              {currentPath !== "catch" ? <PrimaryBtn title={pokemon.catch === 1 ? "버리기" : "잡기"} onClick={() => handleCatchMonster(pokemon.id)} active={pokemon.catch === 1 ? "active" : ""} /> : null}
            </div>
          );
        })}
      </div>
    </StyledPokemonCard>
  );
};
