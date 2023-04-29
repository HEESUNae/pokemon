import styled from "styled-components";

export const StyledSearchBar = styled.div`
  .search-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 6vh 0;
    input {
      width: 300px;
      &::placeholder {
        font-size: 15px;
      }
    }
  }
`;
