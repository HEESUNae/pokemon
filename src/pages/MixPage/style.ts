import styled from "styled-components";

// images
import { bgImage } from "../../consts/image";

export const StyledMixPage = styled.div`
  background: url(${bgImage.subbnr}) 100% 0% / cover;

  .mix {
    &-container {
      display: flex;
      /* grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); */
      gap: 30px;
      img {
        background-color: #eee;
        width: 158px;
        height: 130px;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 8px 16px;
        background-color: rgba(255, 255, 255, 0.3);
        box-sizing: border-box;
        border: 2px dotted rgba(255, 255, 255, 0.8);
      }
    }
    &-ment {
      display: flex;
      align-items: center;
      color: #fff;
      p {
        line-height: 1.5;
      }
    }
  }

  .catch-list-container {
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    margin-top: 3vh;
    display: flex;
    padding: 20px;
    height: 220px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
      border-radius: 10px;
      background-clip: padding-box;
      border: 3px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  .modal-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal {
      background-color: #fff;
      border-radius: 8px 16px;
      width: 200px;
      height: 200px;
      display: grid;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      p {
        font-weight: 500;
        text-align: center;
        font-size: 17px;
      }
    }
    &.active {
      display: flex;
    }
  }
`;
