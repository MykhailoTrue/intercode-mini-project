import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
