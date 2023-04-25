import { createBrowserRouter } from "react-router-dom";

// pages
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);
