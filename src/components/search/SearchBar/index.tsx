import React from "react";

import { StyledSearchBar } from "./style";

import { BasicInput } from "../../input/BasicInput";

interface searchBarInterface {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<searchBarInterface> = ({ onChange }) => {
  return (
    <StyledSearchBar>
      <div className="search-wrap">
        <BasicInput placeholder="포켓몬 이름을 입력해주세요" onChange={onChange} />
      </div>
    </StyledSearchBar>
  );
};
