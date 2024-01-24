import React, { useEffect, useState } from "react";
import classes from "./VehicleConfigurator.module.scss";
import { useParams } from "react-router-dom";
import { getFullVehicleById } from "../../services/vehicleService";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import AvailableModels from "../../components/AvailableModels/AvailableModels";
import AvailableColors from "../../components/AvailableColors/AvailableColors";
import AvailableEngines from "../../components/AvailableEngines/AvailableEngines";
import VehicleBuild from "../../components/VehicleBuild/VehicleBuild";

const VehicleConfigurator = () => {
  const navigate = useNavigate();
  const params = useParams();
  const vehicleId = +params.id;
  const [vehicle, setVehicle] = useState(null);

  const [fetchVehicle, isVehicleLoading, error] = useFetching((id) => {
    const vehicle = getFullVehicleById(id);
    if (vehicle) {
      setVehicle(vehicle);
    } else {
      navigate("/not-found");
    }
  });

  useEffect(() => {
    fetchVehicle(vehicleId);
  }, [vehicleId]);

  return isVehicleLoading ? (
    <Loader></Loader>
  ) : (
    <div>
      {/* <Link to={"/vehicles/1"}>Vehicle 2</Link> */}
      <div className={classes.configurator}>
        <div className={classes.configuratorContainer}>
          <div className={classes.configuratorBuildContainer}>
            <VehicleBuild vehicle={vehicle}></VehicleBuild>
          </div>
          <div className={classes.configuratorOptionsContainer}>
            <AvailableColors
              vehicle={vehicle}
              setVehicle={setVehicle}
            ></AvailableColors>
            <AvailableModels
              vehicleId={vehicleId}
              vehicle={vehicle}
              setVehicle={setVehicle}
            ></AvailableModels>
            <AvailableEngines
              vehicle={vehicle}
              setVehicle={setVehicle}
            ></AvailableEngines>
          </div>
        </div>
      </div>
      {vehicle?.id}
    </div>
  );
};

export default VehicleConfigurator;
