import React, { useEffect, useState } from "react";

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
  listData: PokemonsInterface[];
  searchValue: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ listData, searchValue }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  const [list, setList] = useState(listData);
  const { setPokemonStore, getSearchMonsters } = useStore();

  // 사냥페이지에서 잡은 포켓몬
  const handleCatchMonster = (pokemon: PokemonsInterface) => {
    const index = listData.findIndex((item) => item.id === pokemon.id);
    listData[index].catch = listData[index].catch === 1 ? 0 : 1;
    setPokemonStore(listData);
  };

  // 검색한 몬스터 배열 반환
  useEffect(() => {
    const searchMonster = getSearchMonsters(listData, searchValue);
    setList(searchMonster);
  }, [searchValue]);

  return (
    <StyledPokemonCard>
      <div className="pokemon-card-wrap">
        {list.map((pokemon) => {
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
