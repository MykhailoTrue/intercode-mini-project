import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Vehicles from "./pages/Vehicles/Vehicles";
import VehicleConfigurator from "./pages/VehicleConfigurator/VehicleConfigurator";
import CarNotFound from "./pages/CarNotFound/CarNotFound";

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
        <Route path="/not-found" Component={NotFound} />
        <Route path="/car-not-found" Component={CarNotFound} />
        <Route
          path="/*"
          element={<Navigate to={"/not-found"}></Navigate>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
