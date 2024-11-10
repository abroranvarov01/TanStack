import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MainLayout from "./layout/main-layout";
import InfScrol from "./pages/infinite-scroll/inf-scrol";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/scrol" element={<InfScrol />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
