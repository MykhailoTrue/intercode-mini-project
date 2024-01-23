import React, { useEffect, useState } from "react";
import classes from "./VehicleConfigurator.module.scss";
import { Link, useParams } from "react-router-dom";
import {
  getAllColors,
  getAllEngines,
  getAllModelsByVehicleId,
  getColorById,
  getEngineById,
  getModelById,
  getVehicleById,
} from "../../services/vehicleService";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const VehicleConfigurator = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [vehicle, setVehicle] = useState(null); // can't use null because first render will fail
  const [isLoading, setIsLoading] = useState(true);

  const [modelId, setModelId] = useState(null);
  const [colorId, setColorId] = useState(null);
  const [engineId, setEngineId] = useState(null);

  const currentModel = getModelById(modelId);
  const currentColor = getColorById(colorId);
  const currentEngine = getEngineById(engineId);
  let imgSrc = `/Vehicles/${vehicle?.id}-${currentModel?.id}-${currentColor?.id}.png`;
  let title = `${vehicle?.name}-${vehicle?.year}-${currentModel?.name}`;
  let price = currentModel?.price + currentColor?.price + currentEngine?.price;

  const [availableColors, setAvailableColors] = useState([]);
  const [availableModels, setAvailableModels] = useState([]);
  const [availableEngines, setAvailableEngines] = useState([]);

  function handleColorSelect(colorId) {
    setColorId(colorId);
  }
  function handleModelSelect(modelId) {
    setModelId(modelId);
  }

  function handleEngineSelect(engineId) {
    setEngineId(engineId);
  }

  useEffect(() => {
    const vehicle = getVehicleById(+params.id);
    if (vehicle) {
      setTimeout(() => {
        setVehicle(vehicle);
        setModelId(vehicle.model);
        setColorId(vehicle.color);
        setEngineId(vehicle.engine);
        setAvailableColors(getAllColors());
        setAvailableModels(getAllModelsByVehicleId(vehicle.id));
        setAvailableEngines(getAllEngines());
        setIsLoading(false);
      }, 1000);
    } else {
      navigate("/not-found");
    }
  }, [params.id, navigate]);

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <div>
      <Link to={"/vehicles/1"}>Vehicle 2</Link>
      <div className={classes.vehicle}>
        <div className={classes.vehicleWrapper}>
          <div className={classes.vehicleBuild}>
            <div className={classes.vehicleBuildTitle}>{title}</div>
            <div className={classes.vehicleBuildImage}>
              <img src={imgSrc} alt="" />
            </div>
            <div className={classes.vehicleBuildPrice}>{price}</div>
          </div>
          <div className={classes.vehicleOptions}>
            <div className={classes.vehicleOptionsColor}>
              {availableColors.map((c) => (
                <div
                  key={c.id}
                  style={{ backgroundColor: c.value }}
                  onClick={(e) => handleColorSelect(c.id)}
                >
                  {c.id} color
                </div>
              ))}
            </div>
            <div className={classes.vehicleOptionsModel}>
              {availableModels.map((m) => (
                <div
                  key={m.id}
                  style={{ border: "1px solid #000" }}
                  onClick={(e) => handleModelSelect(m.id)}
                >
                  {m.id} model
                </div>
              ))}
            </div>
            <div className={classes.vehicleOptionsEngine}>
              {availableEngines.map((e) => (
                <div
                  key={e.id}
                  style={{ border: "1px solid #000" }}
                  onClick={() => handleEngineSelect(e.id)}
                >
                  {e.id} engine
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {vehicle.id}
    </div>
  );
};

export default VehicleConfigurator;
