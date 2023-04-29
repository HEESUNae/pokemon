import styled from "styled-components";

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  img {
    filter: invert(1);
    width: 50px;
  }
  p {
    color: #fff;
    font-size: 17px;
  }
`;
