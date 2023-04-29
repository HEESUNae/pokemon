import React from "react";

// style
import { StyledGnbTab } from "./style";

// libraries
import { Link, useLocation } from "react-router-dom";

// components
import { PrimaryBtn } from "../../button/PrimaryBtn";

export const GnbTab: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  const tabBtnNameObj = [
    {
      title: "사냥",
      pathname: "main",
    },
    {
      title: "가방",
      pathname: "catch",
    },
    {
      title: "합성",
      pathname: "mix",
    },
  ];

  const tabActive = (pathname: string) => {
    if (currentPath === pathname) {
      return "active";
    }
  };

  return (
    <StyledGnbTab>
      <div className="gnb-tab">
        {tabBtnNameObj.map((tabname, i) => {
          return (
            <Link to={"/" + tabname.pathname} key={i}>
              <PrimaryBtn title={tabname.title} active={tabActive(tabname.pathname)} />
            </Link>
          );
        })}
      </div>
    </StyledGnbTab>
  );
};
