import React, { useEffect, useState } from "react";
import classes from "./AvailableModels.module.scss";
import { useFetching } from "../../hooks/useFetching";
import { getAllModelsByVehicleId } from "../../services/vehicleService";
import Loader from "../UI/Loader/Loader";
import ModelCard from "../ModelCard/ModelCard";

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

  return isAvailableModelsLoading ? (
    <Loader></Loader>
  ) : (
    <div className={classes.availableModels}>
      <div className={classes.availableModelsContainer}>
        {availableModels.map((model, index) => (
          <div
            className={classes.modelCardWrapper}
            key={model.id}
            onClick={(e) => setVehicle({ ...vehicle, model })}
          >
            <ModelCard
              model={model}
              imgSrc={`/Vehicles/${vehicle?.id}-${vehicle?.model?.id}-${vehicle.color?.id}.png`}
              index={{ order: index + 1, totalCount: availableModels.length }}
              isSelected={vehicle?.model?.id === model.id}
            ></ModelCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableModels;
