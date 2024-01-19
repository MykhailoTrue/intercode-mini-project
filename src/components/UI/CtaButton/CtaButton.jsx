import React, { useState } from "react";
import classes from "./CtaButton.module.scss";
import { Link } from "react-router-dom";
import buttonArrow from "../../../assets/images/button-arrow.svg";

const CtaButton = ({ children, link, padding, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const content = (
    <div
      className={classes.button + (isHovered ? ` ${classes._active}` : "")}
      style={{ padding: padding }}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.buttonContainer}>
        <span className={isHovered ? classes._active : ""}>{children}</span>
        <img
          src={buttonArrow}
          className={isHovered ? classes._active : ""}
          alt=""
        />
      </div>
    </div>
  );

  return link === undefined ? content : <Link to={link}>{content}</Link>;
};

export default CtaButton;
