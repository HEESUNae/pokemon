import React from "react";

import { StyledLayout } from "./style";

// layout
import { Nav } from "../containers/Nav";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {/* <Nav /> */}
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};
