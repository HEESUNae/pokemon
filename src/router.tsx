import { createBrowserRouter } from "react-router-dom";

// pages
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { CatchPage } from "./pages/CatchPage";
import { MixPage } from "./pages/MixPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/catch",
    element: <CatchPage />,
  },
  {
    path: "/mix",
    element: <MixPage />,
  },
]);
