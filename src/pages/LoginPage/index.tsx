import React from "react";
import { useNavigate } from "react-router-dom";

// style
import { StyledLoginPage } from "./style";

// components
import { PrimaryBtn } from "../../components/button/primaryBtn";

// images
import { commonImage } from "../../consts/image";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledLoginPage>
      <div className="login-page">
        <img src={commonImage.logo} alt="logo" />
        <img src={commonImage.pikachu} alt="logo" />
        <PrimaryBtn title="메인으로 이동" onClick={() => navigate("/main")} />
      </div>
    </StyledLoginPage>
  );
};
