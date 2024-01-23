import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Vehicles from "./pages/Vehicles/Vehicles";
import VehicleConfigurator from "./pages/VehicleConfigurator/VehicleConfigurator";

function App() {
  return (
    <BrowserRouter>
      <div className="header-with-margin">
        <Header></Header>
        <div style={{ marginTop: "67px" }}></div>
      </div>

      <Routes>
        <Route exact path="/" Component={Main}></Route>
        <Route exact path="/vehicles" Component={Vehicles}></Route>
        <Route
          exact
          path="/vehicles/:id"
          Component={VehicleConfigurator}
        ></Route>
        <Route exact path="*" Component={NotFound}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
