import React from "react";
import "./App.css";

// libraries
import { Route, Routes } from "react-router-dom";

// pages
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { CatchPage } from "./pages/CatchPage";
import { MixPage } from "./pages/MixPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemon" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/catch" element={<CatchPage />} />
        <Route path="/mix" element={<MixPage />} />
      </Routes>
    </div>
  );
}

export default App;
