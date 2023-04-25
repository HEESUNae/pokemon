import React from "react";

import { StyledPrimaryBtn } from "./style";

interface primaryProps {
  title: string;
  onClick: () => void;
}

export const PrimaryBtn = ({ title, ...props }: primaryProps) => {
  return <StyledPrimaryBtn {...props}>{title}</StyledPrimaryBtn>;
};
