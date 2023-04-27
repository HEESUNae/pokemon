import React, { useEffect, useState } from "react";

// style
import { StyledMainPage } from "./style";

// component
import { Layout } from "../../layout/Layout";
import { PrimaryBtn } from "../../components/button/PrimaryBtn";
import { BasicInput } from "../../components/input/BasicInput";
import { PokemonCard } from "../../components/card/PokemonCard";

// libraries
import { useQuery } from "react-query";

// api
import { PokeListApi } from "../../api/request";

// store
import { useStore } from "../../api/store";

// interfaces
import { PokemonsInterface } from "../../api/interfaces";

export const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pokeList, setPokeList] = useState<PokemonsInterface[]>([]);
  // const [catchMonstarts, setCatchMonstars] = useState<PokemonsInterface[]>([]);
  const { pokemonStore } = useStore();

  // 몬스터 이름/이미지 가져오기
  const getPokemons = async () => {
    const result = await PokeListApi();
    useStore.setState((state) => ({ pokemonStore: [...state.pokemonStore, ...result] }));
    return result;
  };

  const { isSuccess, data: pokemonData } = useQuery({ queryKey: ["pokemon"], queryFn: getPokemons, refetchOnWindowFocus: false });
  // console.log({ pokemonData });

  // 검색한 내용 가져오기
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

  // 세션스토리지에 클릭한 몬스터 아이디 저장하기

  if (!isSuccess) return <></>;

  return (
    <StyledMainPage>
      <div className="mask">
        <Layout>
          <div className="main">
            <div className="search-wrap">
              <BasicInput placeholder="포켓몬 이름을 검색해주세요" onChange={getSearchInput} />
              <PrimaryBtn title="검색" />
            </div>
            <div className="util">
              <PrimaryBtn title="사냥" active="active" />
              <PrimaryBtn title="가방" />
              <PrimaryBtn title="합성" />
            </div>
            <div className="pokemon-container">
              <div className="pokemon-wrap">
                <PokemonCard pokemons={pokeList} />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </StyledMainPage>
  );
};
