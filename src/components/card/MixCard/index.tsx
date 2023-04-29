import React from "react";

// style
import { StyledMixCard } from "./style";

// interface
import { PokemonsInterface } from "../../../api/interfaces";

interface MixCardInterface {
  searchList: PokemonsInterface[];
  dropPokemon: (image: string) => void;
}

export const MixCard: React.FC<MixCardInterface> = ({ searchList, dropPokemon }) => {
  return (
    <StyledMixCard>
      {searchList.map((pokemon, i) => {
        return (
          <div className="pokemon-list" key={i}>
            <img src={pokemon.image} alt="포켓몬 이미지" onClick={() => dropPokemon(pokemon.image)} />
          </div>
        );
      })}
    </StyledMixCard>
  );
};
