import React, { useEffect, useState } from "react";
import classes from "./ModelCard.module.scss";
import { formatNumber } from "../../pipes/numberFormatter";
import { useFetching } from "../../hooks/useFetching";
import { getModelDefaultImage } from "../../services/vehicleService";
import Loader from "../UI/Loader/Loader";
/**
* @param {Object} props - Властивості компонента.
 * @param {Object} props.model - Об'єкт, що містить інформацію про модель автомобіля.
 * @param {number} props.model.id - Ідентифікатор моделі автомобіля.
 * @param {string} props.model.name - Назва моделі автомобіля.
 * @param {number} props.model.price - Ціна автомобіля.
 * @param {string} props.model.estimatedMilesPerGalon - Прогнозована кількість миль на галон пального (формат "X/Y").
 * @param {number} props.model.vehicleId - Ідентифікатор транспортного засобу, до якого належить модель.
 * @param {boolean} props.isSelected - is card selected
 * @param {Object} props.index
 * @param {number} props.index.order
 * @param {number} props.index.totalCount
 * @returns {JSX.Element} Елемент React, який відображає інформацію про модель автомобіля.

 */
const ModelCard = ({ model, isSelected, index }) => {
  const [imageUrl, setImageUrl] = useState("");
  const modelCardClasses = [classes.modelCard];
  if (isSelected) {
    modelCardClasses.push(classes._activeCard);
  }
  const [fetchImageUrl, isImageUrlLoading, error] = useFetching((modelId) => {
    const imageUrl = getModelDefaultImage(modelId);
    setImageUrl(imageUrl);
  });

  useEffect(() => {
    fetchImageUrl(model?.id);
  }, [model?.id]);

  return isImageUrlLoading ? (
    <Loader></Loader>
  ) : (
    <div className={modelCardClasses.join(" ")}>
      <div className={classes.modelCardIndex}>
        {index.order}/{index.totalCount}
      </div>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={classes.title}>{model.name}</div>
      <div className={classes.meta}>
        <div className={classes.priceContainer}>
          <div className={classes.price}>$ {formatNumber(model.price)}</div>
          <div>Base MSRP</div>
        </div>
        <div className={classes.empgContainer}>
          <div className={classes.empg}>{model.estimatedMilesPerGalon}</div>
          <div>Up to Est. MPG</div>
        </div>
      </div>
      {isSelected ? (
        <button
          className={classes.selectionButton + " " + classes.selectedButton}
        >
          <div>Selected</div>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 114.76 100"
          >
            <polygon
              points="114.8,13.3 101.5,0 38.1,71.3 12.5,39.9 0,53.9 37.6,100"
              aria-hidden="true"
            ></polygon>
          </svg>
        </button>
      ) : (
        <button
          className={classes.selectionButton + " " + classes.unselectedButton}
        >
          Select
        </button>
      )}
    </div>
  );
};

export default ModelCard;
