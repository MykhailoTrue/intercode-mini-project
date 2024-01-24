import React, { useEffect, useState } from "react";
import classes from "./AvailableModels.module.scss";
import { useFetching } from "../../hooks/useFetching";
import { getAllModelsByVehicleId } from "../../services/vehicleService";

const AvailableModels = ({ vehicleId, setVehicle, vehicle }) => {
  const [availableModels, setAvailableModels] = useState([]);

  const [fetchAvailabeModels, isAvailableModelsLoading, availableModelsError] =
    useFetching((vehicleId) => {
      const availableModels = getAllModelsByVehicleId(vehicleId);
      setAvailableModels(availableModels);
    });

  useEffect(() => {
    fetchAvailabeModels(vehicleId);
  }, [vehicleId]);

  return (
    <div className={classes.vehicleOptionsModel}>
      {availableModels.map((model) => (
        <div
          key={model.id}
          style={{ border: "1px solid #000" }}
          onClick={(e) => setVehicle({ ...vehicle, model })}
        >
          {model.id} model
        </div>
      ))}
    </div>
  );
};

export default AvailableModels;
