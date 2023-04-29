import styled from "styled-components";

export const StyledGnbTab = styled.div`
  .gnb-tab {
    display: flex;
    gap: 10px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    button {
      background: #557d90;
      font-weight: 400;
      color: #000;
      background: rgba(255, 255, 255, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.2);
      &.active {
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        background: linear-gradient(45deg, rgb(13, 19, 48), rgb(27, 31, 79));
      }
    }
  }
`;
