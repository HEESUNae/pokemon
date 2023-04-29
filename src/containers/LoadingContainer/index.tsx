import React from "react";

// style
import { StyledLoadingContainer } from "./style";

// image
import { commonImage } from "../../consts/image";

export const LoadingContainer = () => {
  return (
    <StyledLoadingContainer>
      <div className="loading">
        <img src={commonImage.loading} alt="" />
        <p>로딩중입니다.</p>
      </div>
    </StyledLoadingContainer>
  );
};
