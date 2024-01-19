import React from "react";
import "./Herro.scss";
import CtaButton from "../UI/CtaButton/CtaButton";

const Herro = () => {
  return (
    <div className="herro">
      <div className="herro__container">
        <div className="herro__content">
          <div className="herro__content-text">One big, rugged family.</div>
          <CtaButton style={{ width: "140px", backgroundColor: "#fff" }}>
            Learn More
          </CtaButton>
        </div>
      </div>
    </div>
  );
};

export default Herro;
