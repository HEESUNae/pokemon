import styled from "styled-components";

// images
import { bgImage } from "../../consts/image";

export const StyledMainPage = styled.div`
  background: url(${bgImage.subbnr}) 100% 0% / cover;

  .loading {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    img {
      animation-name: spin;
      animation-duration: 2500ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
