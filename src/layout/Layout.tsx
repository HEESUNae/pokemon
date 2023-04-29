import React from "react";

// style
import { StyledLayout } from "./style";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledLayout>
      <div className="mask">
        <div className="inner">{children}</div>
      </div>
    </StyledLayout>
  );
};
