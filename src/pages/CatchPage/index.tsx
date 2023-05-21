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
  const { pokemonStore, getCatchMonsters } = useStore();

  // 사용자 입력값 받기
  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 가방에 들어있는 몬스터 리스트
  const getCatchResult = () => {
    const catchResult = getCatchMonsters(pokemonStore);
    setCatchList(catchResult);
  };

  useEffect(() => {
    getCatchResult();
  }, []);

  return (
    <StyledCatchPage>
      <Layout>
        <div className="catch">
          <SearchBar onChange={getSearchInput} />
          <GnbTab />
          {catchList.length ? <PokemonCard listData={catchList} searchValue={searchValue} /> : <ErrorContainer />}
        </div>
      </Layout>
    </StyledCatchPage>
  );
};
