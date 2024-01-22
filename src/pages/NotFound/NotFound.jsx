import React from "react";
import classes from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <div className={classes.notFoundContainer}>
        <div className={classes.notFoundToHome}>
          <Link to="/" className={classes.notFoundToHomeLink}>
            Homepage
          </Link>
        </div>
        <div className={classes.notFoundErrorPage}>
          <div className={classes.notFoundErrorPageStatusCode}>404</div>
          <h1>Page Not Found</h1>
          <p>It looks like this page is no longer available.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
