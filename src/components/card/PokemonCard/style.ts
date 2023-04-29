import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  overflow-y: auto;
  height: 70.5vh;
  &::-webkit-scrollbar {
    width: 0;
  }
  .pokemon-card-wrap {
    display: grid;
    gap: 20px;
    padding: 30px 0 60px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    .pokemon {
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
          margin-bottom: 10px;
        }
        button {
          padding: 10px 20px;
          &.active {
            background: linear-gradient(45deg, rgb(39 48 13), rgb(79 79 27));
          }
        }
      }
    }
  }
`;
