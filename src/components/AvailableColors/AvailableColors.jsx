import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import { getAllColors } from "../../services/vehicleService";
import classes from "./AvailableColors.module.scss";

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

  return (
    <div className={classes.vehicleOptionsColor}>
      {availableColors.map((color) => (
        <div
          key={color.id}
          style={{ backgroundColor: color.value }}
          onClick={(e) => setVehicle({ ...vehicle, color })}
        >
          {color.id} color
        </div>
      ))}
    </div>
  );
};

export default AvailableColors;
