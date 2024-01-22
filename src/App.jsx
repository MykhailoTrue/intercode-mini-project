import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="header-with-margin"></div>
      <Header></Header>
      <div style={{ marginTop: "67px" }}></div>
      <Routes>
        <Route path="/" Component={Main}></Route>
        <Route path="*" Component={NotFound}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
