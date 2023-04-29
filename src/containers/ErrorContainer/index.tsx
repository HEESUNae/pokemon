import React from "react";

// style
import { StyledError } from "./style";

// images
import { commonImage } from "../../consts/image";

export const ErrorContainer = () => {
  return (
    <StyledError>
      <div className="error-container">
        <img src={commonImage.error} alt="에러" />
        <p>
          가방이 비었습니다.
          <br />
          사냥해서 가방에 포켓몬을 담아보세요
        </p>
      </div>
    </StyledError>
  );
};
