import React, { useEffect, useState } from "react";
import classes from "./AvailableEngines.module.scss";
import { getAllEngines } from "../../services/vehicleService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../UI/Loader/Loader";
import EngineCard from "../EngineCard/EngineCard";

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
  }, [vehicle?.id]);

  return isAvailableEnginesLoading ? (
    <Loader></Loader>
  ) : (
    <div className={classes.availableEngines}>
      <div className={classes.availableEnginesContainer}>
        {availableEngines.map((engine, index) => (
          <div
            key={engine.id}
            className={classes.engineWrapper}
            onClick={() => setVehicle({ ...vehicle, engine })}
          >
            <EngineCard
              engine={engine}
              isSelected={vehicle?.engine?.id === index}
              index={{ order: index + 1, totalCount: availableEngines.length }}
            ></EngineCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableEngines;
