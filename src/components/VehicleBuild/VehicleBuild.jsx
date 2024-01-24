import React from "react";
import classes from "./VehicleBuild.module.scss";
import { formatNumber } from "../../pipes/numberFormatter";

const VehicleBuild = ({ vehicle }) => {
  let imgSrc = `/Vehicles/${vehicle?.id}-${vehicle?.model?.id}-${vehicle?.color?.id}.png`;
  let price = vehicle
    ? vehicle?.model?.price + vehicle?.color?.price + vehicle?.engine?.price
    : 0;
  return (
    <div className={classes.vehicleBuild}>
      <div className={classes.vehicleBuildTitle}>
        <div className={classes.vehicleBuildTitleContainer}>
          <h5>Your build</h5>
          <div className={classes.vehicleBuildTitleContainerContent}>
            <span>{vehicle?.year} </span>
            <span>{vehicle?.name} </span>
            <span>{vehicle?.model?.name}</span>
          </div>
        </div>
      </div>
      <div className={classes.vehicleBuildImage}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={classes.vehicleBuildPrice}>
        <div className={classes.vehicleBuildPriceContainer}>
          <h5>Total Price</h5>
          <div className={classes.vehicleBuildPriceContainerContent}>
            $ {formatNumber(price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBuild;
