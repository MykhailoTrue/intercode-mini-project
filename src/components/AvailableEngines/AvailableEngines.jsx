import React, { useEffect, useState } from "react";
import classes from "./AvailableEngines.module.scss";
import { getAllEngines } from "../../services/vehicleService";
import { useFetching } from "../../hooks/useFetching";

const AvailableEngines = ({ vehicle, setVehicle }) => {
  const [availableEngines, setAvailableEngines] = useState([]);

  const [
    fetchAvailabeEngines,
    isAvailableEnginesLoading,
    availableEnginesError,
  ] = useFetching((vehicleId) => {
    const availableEngines = getAllEngines(vehicleId);
    setAvailableEngines(availableEngines);
  });

  useEffect(() => {
    fetchAvailabeEngines();
  }, []);

  return (
    <div className={classes.vehicleOptionsEngine}>
      {availableEngines.map((engine) => (
        <div
          key={engine.id}
          style={{ border: "1px solid #000" }}
          onClick={() => setVehicle({ ...vehicle, engine })}
        >
          {engine.id} engine
        </div>
      ))}
    </div>
  );
};

export default AvailableEngines;
