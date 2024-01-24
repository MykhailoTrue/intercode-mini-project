import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { getAllColors } from "../../services/vehicleService";
import classes from "./AvailableColors.module.scss";
import Loader from "../UI/Loader/Loader";

const AvailableColors = ({ setVehicle, vehicle }) => {
  const [availableColors, setAvailableColors] = useState([]);

  const [fetchAvailabeColors, isAvailableColorsLoading, availableColorsError] =
    useFetching(() => {
      const availableColors = getAllColors();
      setAvailableColors(availableColors);
    });

  useEffect(() => {
    fetchAvailabeColors();
  }, []);

  return isAvailableColorsLoading ? (
    <Loader></Loader>
  ) : (
    <div className={classes.availableColors}>
      <div className={classes.availableColorsContainer}>
        <h4 className={classes.colorName}>{vehicle?.color?.name}</h4>
        <div className={classes.colorsContainer}>
          {availableColors.map((color) => (
            <div className={classes.colorCard} key={color.id}>
              <div
                className={
                  classes.colorCardContainer +
                  (color?.id === vehicle?.color?.id
                    ? " " + classes._active
                    : "")
                }
                style={{ backgroundColor: color.value }}
                onClick={(e) => setVehicle({ ...vehicle, color })}
              >
                <div className={classes.colorSelectedIconContainer}>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 114.76 100"
                  >
                    <polygon
                      points="114.8,13.3 101.5,0 38.1,71.3 12.5,39.9 0,53.9 37.6,100"
                      aria-hidden="true"
                    ></polygon>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableColors;
