import React from "react";

// style
import { StyledGnbTab } from "./style";

// libraries
import { useLocation, useNavigate } from "react-router-dom";

// components
import { PrimaryBtn } from "../../button/PrimaryBtn";

export const GnbTab: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  // 현재 선택된 탭 active 추가
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
            <div onClick={() => navigate(`/${tabname.pathname}`)} key={i}>
              <PrimaryBtn title={tabname.title} active={tabActive(tabname.pathname)} />
            </div>
          );
        })}
      </div>
    </StyledGnbTab>
  );
};
