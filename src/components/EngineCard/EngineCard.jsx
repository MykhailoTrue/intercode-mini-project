import React from "react";
import classes from "./EngineCard.module.scss";
import { formatNumber } from "../../pipes/numberFormatter";
/**
 * Компонент для відображення інформації про двигун автомобіля.
 *
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {Object} props.engine - Об'єкт, що містить інформацію про двигун автомобіля.
 * @param {number} props.engine.id - Ідентифікатор двигуна.
 * @param {number} props.engine.price - Ціна двигуна.
 * @param {string} props.engine.name - Назва двигуна.
 * @param {string} props.engine.type - Тип передачі двигуна.
 * @param {string[]} props.engine.features - Особливості двигуна в масиві строк.
 * @param {boolean} props.isSelected
 * @param {Object} props.index
 * @param {number} props.index.order
 * @param {number} props.index.totalCount
 * @returns {JSX.Element} Елемент React, який відображає інформацію про двигун автомобіля.
 */
const EngineCard = ({ engine, isSelected, index }) => {
  const engineCardClasses = [classes.engineCard];
  if (isSelected) {
    engineCardClasses.push(classes._activeCard);
  }
  return (
    <div className={engineCardClasses.join(" ")}>
      <div className={classes.engineCardIndex}>
        {index.order}/{index.totalCount}
      </div>
      <div className={classes.title}>{engine.name}</div>
      <div className={classes.subTitle}>{engine.type}</div>
      <div className={classes.priceContainer}>
        <div className={classes.price}>$ {formatNumber(engine.price)}</div>
      </div>
      <div className={classes.featureList}>
        <ul className={classes.featureListContainer}>
          {engine.features.map((feature, index) => {
            return (
              <li key={index} className={classes.featureItem}>
                {feature}
              </li>
            );
          })}
        </ul>
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

export default EngineCard;
