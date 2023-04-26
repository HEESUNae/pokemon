import React, { useEffect, useState } from "react";

// style
import { StyledMainPage } from "./style";

// component
import { Layout } from "../../layout/Layout";
import { PrimaryBtn } from "../../components/button/PrimaryBtn";
import { BasicInput } from "../../components/input/BasicInput";
import { PokemonCard } from "../../components/card/PokemonCard";

export const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const getSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 리덕스로 api받아온거 저장하기

  // useEffect(()=>{
  // 입력값이 포함된 포켓몬 찾기
  // },[])
  console.log(searchValue);

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
                <PokemonCard />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </StyledMainPage>
  );
};
