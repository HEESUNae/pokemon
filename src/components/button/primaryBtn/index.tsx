import React from "react";

import { StyledPrimaryBtn } from "./style";

interface primaryProps {
  title: string;
  active?: string;
  onClick?: () => void;
}

export const PrimaryBtn = ({ title, active, ...props }: primaryProps) => {
  return (
    <StyledPrimaryBtn {...props} className={active}>
      {title}
    </StyledPrimaryBtn>
  );
};
