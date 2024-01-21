import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes } from "react-router-dom";
import Slider from "./components/Slider/Slider";

import firstCar1 from "./assets/images/slider1/1.jpg";
import firstCar2 from "./assets/images/slider1/2.jpg";
import firstCar3 from "./assets/images/slider1/3.jpg";

import secondCar1 from "./assets/images/slider2/1.jpg";
import secondCar2 from "./assets/images/slider2/2.jpg";
import secondCar3 from "./assets/images/slider2/3.jpg";
import secondCar4 from "./assets/images/slider2/4.jpg";
import ShoppingTools from "./components/ShoppingTools/ShoppingTools";
import Herro from "./components/Herro/Herro";
import Footer from "./components/Footer/Footer";

const SLIDER1_IMAGES = [firstCar1, firstCar2, firstCar3];
const SLIDER2_IMAGES = [secondCar1, secondCar2, secondCar3, secondCar4];

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div style={{ marginTop: "67px" }}></div>
      <Slider imgUrls={SLIDER2_IMAGES}></Slider>
      <ShoppingTools></ShoppingTools>
      <Herro></Herro>
      <Slider imgUrls={SLIDER1_IMAGES}></Slider>
      <Footer></Footer>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
