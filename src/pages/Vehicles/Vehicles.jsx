import React from "react";
import { getAllVehicles } from "../../services/vehicleService";
import classes from "./Vehicles.module.scss";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
const Vehicles = () => {
  const vehicles = getAllVehicles();
  return (
    <div className={classes.vehicles}>
      <div className={classes.vehiclesContainer}>
        <div className={classes.vehicleTitle}>
          <h1>Toyota Vehicles</h1>
          <div>
            Find your perfect Toyota vehicle. Narrow it down by price, mpg or
            whatever you like.
          </div>
        </div>
        <div className={classes.vehicleCards}>
          <div className={classes.vehicleCardsContainer}>
            {/* <div className={classes.vehicleCardsSidebar}></div> sidebar for filtering*/}
            <div className={classes.vehicleCardsContent}>
              <div className={classes.vehicleCardsContentHeader}>
                <h4>{vehicles.length} Matches</h4>
              </div>
              <div className={classes.vehicleCardsContentWrapper}>
                {vehicles.map((v) => (
                  <VehicleCard vehicle={v}></VehicleCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
