import styled from "styled-components";

import { bgImage } from "../../consts/image";

export const StyledMainPage = styled.div`
  background: url(${bgImage.subbnr}) 50% 0% / cover;
  .mask {
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
  .search-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 80px 0;
    input {
      width: 300px;
      &::placeholder {
        font-size: 15px;
      }
    }
  }
  .util {
    display: flex;
    gap: 10px;
    padding: 20px 0;
    margin-bottom: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    button {
      background: #557d90;
      font-weight: 400;
      color: #000;
      background: rgba(255, 255, 255, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.2);
      &.active {
        border: 0;
        color: #fff;
        background: linear-gradient(45deg, rgb(13, 19, 48), rgb(27, 31, 79));
      }
    }
  }
  .main {
    overflow: auto;
    .pokemon {
      &-wrap {
        display: grid;
        gap: 20px;
        padding-bottom: 100px;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      }
      &-card {
        display: grid;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 8px 16px;
        background-color: rgba(255, 255, 255, 0.8);
        p {
          font-weight: 600;
          text-align: center;
        }
        button {
          padding: 10px 20px;
        }
      }
    }
  }
`;
