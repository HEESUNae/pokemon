import styled from "styled-components";

import { bgImage } from "../../consts/image";

export const StyledLoginPage = styled.div`
  background: url(${bgImage.login}) no-repeat 50% 50% / cover;
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    img {
      width: 350px;
    }
    button {
      margin-top: 25px;
      border: 3px solid #2a2e5d;
      :hover {
        margin-top: 35px;
      }
    }
  }
`;
