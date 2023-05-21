import React, { useState } from "react";

// style
import { StyledMainPage } from "./style";

// libraries
import { useQuery } from "react-query";

// api
import { PokeListApi } from "../../api/request";

// component
import { Layout } from "../../layout/Layout";
import { GnbTab } from "../../components/tab/GnbTab";
import { SearchBar } from "../../components/search/SearchBar";
import { PokemonCard } from "../../components/card/PokemonCard";
import { LoadingContainer } from "../../containers/LoadingContainer";

export const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  console.time("test");

  // 몬스터 이름 / 이미지 가져오기
  const getPokemons = async () => {
    return await PokeListApi();
  };
  const { isSuccess, data: apiData } = useQuery({ queryKey: ["pokemon"], queryFn: getPokemons, refetchOnWindowFocus: false, refetchOnMount: false });

  console.timeEnd("test");

  // 사용자 입력값 받기
  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <StyledMainPage>
      <Layout>
        {isSuccess ? (
          <div className="main">
            <SearchBar onChange={getSearchInput} />
            <GnbTab />
            <PokemonCard listData={apiData} searchValue={searchValue} />
          </div>
        ) : (
          <LoadingContainer />
        )}
      </Layout>
    </StyledMainPage>
  );
};
