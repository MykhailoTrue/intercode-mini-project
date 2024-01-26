import React from "react";
import classes from "./CarNotFound.module.scss";
import { Link } from "react-router-dom";

const CarNotFound = () => {
  return (
    <div className={classes.notFound}>
      <div className={classes.notFoundContainer}>
        <div className={classes.notFoundToHome}>
          <Link to="/vehicles" className={classes.notFoundToHomeLink}>
            See all vehicles
          </Link>
        </div>
        <div className={classes.notFoundErrorPage}>
          <div className={classes.notFoundErrorPageStatusCode}>404</div>
          <h1>Car Not Found</h1>
          <p>It looks like car is no longer available.</p>
        </div>
      </div>
    </div>
  );
};

export default CarNotFound;
