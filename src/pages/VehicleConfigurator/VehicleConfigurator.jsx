import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../../services/vehicleService";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";

const VehicleConfigurator = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const vehicle = getVehicleById(+params.id);
    if (vehicle) {
      setTimeout(() => {
        setVehicle(vehicle);
        setIsLoading(false);
      }, 5000);
    } else {
      navigate("./not-found");
    }
  }, []);

  return isLoading ? <Loader></Loader> : <div>{vehicle.id}</div>;
};

export default VehicleConfigurator;
