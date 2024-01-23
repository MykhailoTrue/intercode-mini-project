import React from "react";
import classes from "./VehicleCard.module.scss";
import {
  calculateTotalPrice,
  getAllModelsByVehicleId,
  getModelById,
} from "../../services/vehicleService";
import { Link, useNavigate } from "react-router-dom";

/**
 * React компонент, що відображає інформацію про транспортний засіб.
 * @component
 * @example
 * const vehicleProps = {
 *   id: 0,
 *   year: 2024,
 *   name: "4Runner",
 *   model: 0,
 *   availableModels: [0, 1, 2],
 *   color: 0,
 * };
 *
 * // Використання компоненту
 * <VehicleInfo vehicle={vehicleProps} />
 *
 * @param {Object} props - Властивості компонента.
 * @param {Object} props.vehicle - Об'єкт, що містить інформацію про транспортний засіб.
 * @param {number} props.vehicle.id - Ідентифікатор транспортного засобу.
 * @param {number} props.vehicle.year - Рік випуску транспортного засобу.
 * @param {string} props.vehicle.name - Назва транспортного засобу.
 * @param {number} props.vehicle.model - Модель транспортного засобу.
 * @param {number[]} props.vehicle.availableModels - Масив ідентифікаторів доступних моделей.
 * @param {number} props.vehicle.color - Ідентифікатор кольору транспортного засобу.
 * @param {number} props.vehicle.engine - Ідентифікатор двигуна
 * @returns {JSX.Element} - React елемент, що відображає інформацію про транспортний засіб.
 */
const VehicleCard = ({ vehicle }) => {
  const navigate = useNavigate();
  if (!vehicle) {
    return null;
  }

  const model = getModelById(vehicle.model);
  const imgSrc = `/Vehicles/${vehicle.id}-${vehicle.model}-${vehicle.color}.png`;
  const shownPrice = calculateTotalPrice(vehicle);
  const lowestModelPrice = getAllModelsByVehicleId(vehicle.id)
    .map((m) => m.price)
    .reduce((a, b) => Math.min(a, b));

  const navigateToVehicle = () => {
    navigate(`/vehicles/${vehicle.id}`);
  };

  return (
    <div className={classes.vehicleCard} onClick={navigateToVehicle}>
      <div className={classes.imageContainer}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={classes.asShown}>${shownPrice} as shown</div>
      <div className={classes.modelYear}>{vehicle.year}</div>
      <div className={classes.title}>{vehicle.name}</div>
      <div className={classes.meta}>
        <div className={classes.lowestPriceContainer}>
          <div className={classes.lowestPrice}>${lowestModelPrice}</div>
          <div>Starting MSRP</div>
        </div>
        <div className={classes.empgContainer}>
          <div className={classes.empg}>{model.estimatedMilesPerGalon}</div>
          <div>Up to Est. MPG</div>
        </div>
      </div>
      <div className={classes.ctas}>
        <Link to={`/vehicles/${vehicle.id}`} className={classes.link}>
          Explore
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
