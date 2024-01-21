import React, { useState } from "react";
import classes from "./CtaButton.module.scss";
import { Link } from "react-router-dom";

const CtaButton = ({ children, link, backgroundColor, color, width }) => {
  const [isHovered, setIsHovered] = useState(false);
  const content = (
    <div
      className={classes.button + (isHovered ? ` ${classes._active}` : "")}
      style={{ backgroundColor: backgroundColor, width: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.buttonContainer}>
        <span
          style={{ color: color }}
          className={isHovered ? classes._active : ""}
        >
          {children}
        </span>
        <svg
          color={color}
          className={isHovered ? classes._active : ""}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.06825 0.905047C5.67772 0.514523 5.04456 0.514522 4.65403 0.905047C4.26351 1.29557 4.26351 1.92874 4.65404 2.31926L8.18912 5.85434L4.65321 9.39025C4.26269 9.78077 4.26269 10.4139 4.65321 10.8045C5.04373 11.195 5.6769 11.195 6.06742 10.8045L10.2849 6.58702C10.2937 6.57884 10.3023 6.57046 10.3109 6.5619C10.7014 6.17138 10.7014 5.53821 10.3109 5.14769L6.06825 0.905047Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );

  return link === undefined ? content : <Link to={link}>{content}</Link>;
};

export default CtaButton;
