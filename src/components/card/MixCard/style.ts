import styled from "styled-components";

export const StyledMixCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  width: 100%;
  .pokemon-list {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 16px;
  }
`;
