import React from "react";
import classes from "./ShoppingTools.module.scss";
import { Link } from "react-router-dom";

import buildAndPriceIcon from "../../assets/images/shopping-tools-icons/build__and__price.svg";
import SearchInventoryIcon from "../../assets/images/shopping-tools-icons/search__inventory.svg";
import LocalSpecialsIcon from "../../assets/images/shopping-tools-icons/local__specials.svg";
import FindDealerIcon from "../../assets/images/shopping-tools-icons/find__dealer.svg";

const ShoppingTools = () => {
  return (
    <div className={classes.shoppingTools}>
      <div className={classes.shoppingTools__container}>
        <div className={classes.shoppingTool}>
          <Link to="">
            <div className={classes.overlayText}>
              <div className={classes.shoppingTool__icon}>
                <img src={buildAndPriceIcon} alt="" />
              </div>
              <div className={classes.shoppingTool__text}>Build & Price</div>
            </div>
          </Link>
        </div>
        <div className={classes.shoppingTool}>
          <Link to="">
            <div className={classes.overlayText}>
              <div className={classes.shoppingTool__icon}>
                <img src={SearchInventoryIcon} alt="" />
              </div>
              <div className={classes.shoppingTool__text}>Search Inventory</div>
            </div>
          </Link>
        </div>
        <div className={classes.shoppingTool}>
          <Link to="">
            <div className={classes.overlayText}>
              <div className={classes.shoppingTool__icon}>
                <img src={LocalSpecialsIcon} alt="" />
              </div>
              <div className={classes.shoppingTool__text}>Local Specials</div>
            </div>
          </Link>
        </div>
        <div className={classes.shoppingTool}>
          <Link to="">
            <div className={classes.overlayText}>
              <div className={classes.shoppingTool__icon}>
                <img src={FindDealerIcon} alt="" />
              </div>
              <div className={classes.shoppingTool__text}>Find A Dealer</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTools;
