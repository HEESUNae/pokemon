import React, { useEffect, useState } from "react";

// style
import { StyledMainPage } from "./style";

// libraries
import { useQuery } from "react-query";

// api
import { PokeListApi } from "../../api/request";

// store
import { useStore } from "../../api/store";

// interfaces
import { PokemonsInterface } from "../../api/interfaces";

// component
import { Layout } from "../../layout/Layout";
import { GnbTab } from "../../components/tab/GnbTab";
import { SearchBar } from "../../components/search/SearchBar";
import { PokemonCard } from "../../components/card/PokemonCard";
import { LoadingContainer } from "../../containers/LoadingContainer";

export const MainPage: React.FC = () => {
  const [pokeList, setPokeList] = useState<PokemonsInterface[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { pokemonStore } = useStore();

  // 몬스터 이름 / 이미지 가져오기
  const getPokemons = async () => {
    if (pokemonStore.length !== 0) return;
    const result = await PokeListApi();
    useStore.setState(() => ({ pokemonStore: [...result] }));
    return result;
  };

  const { isSuccess } = useQuery({ queryKey: ["pokemon"], queryFn: getPokemons, refetchOnWindowFocus: false });

  // 사용자 입력값 받기
  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 검색한 몬스터 배열 반환
  useEffect(() => {
    const searchMonster = pokemonStore.filter((pokemon) => {
      return pokemon.name.includes(searchValue);
    });
    setPokeList(searchMonster);
  }, [pokemonStore, searchValue]);

  return (
    <StyledMainPage>
      <Layout>
        {isSuccess ? (
          <div className="main">
            <SearchBar onChange={getSearchInput} />
            <GnbTab />
            <PokemonCard searchList={pokeList} />
          </div>
        ) : (
          <LoadingContainer />
        )}
      </Layout>
    </StyledMainPage>
  );
};
