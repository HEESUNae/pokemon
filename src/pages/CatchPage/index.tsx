import React, { useEffect, useState } from "react";

// style
import { StyledCatchPage } from "./style";

// store
import { useStore } from "../../api/store";

// interface
import { PokemonsInterface } from "../../api/interfaces";

// containers
import { ErrorContainer } from "../../containers/ErrorContainer";

// components
import { Layout } from "../../layout/Layout";
import { GnbTab } from "../../components/tab/GnbTab";
import { SearchBar } from "../../components/search/SearchBar";
import { PokemonCard } from "../../components/card/PokemonCard";

export const CatchPage: React.FC = () => {
  const [catchList, setCatchList] = useState<PokemonsInterface[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { pokemonStore } = useStore();

  // 사용자 입력값 받기
  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 검색한 몬스터 배열 반환
  useEffect(() => {
    if (searchValue === "") {
      const catchResult = pokemonStore.filter((pokemon) => {
        return pokemon.catch === 1;
      });
      setCatchList(catchResult);
      return;
    }
    const searchMonster = catchList.filter((pokemon) => {
      return pokemon.name.includes(searchValue);
    });
    setCatchList(searchMonster);
  }, [pokemonStore, searchValue]);

  return (
    <StyledCatchPage>
      <Layout>
        <div className="catch">
          <SearchBar onChange={getSearchInput} />
          <GnbTab />
          {catchList.length === 0 ? <ErrorContainer /> : <PokemonCard searchList={catchList} />}
        </div>
      </Layout>
    </StyledCatchPage>
  );
};
