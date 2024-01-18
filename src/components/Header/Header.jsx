import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Toyota__Logo.svg";
import classes from "./Header.module.scss";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const menuIconClasses = [classes.menu__icon];
  const menuBodyClasses = [classes.menu__body];
  if (isBurgerOpen) {
    menuBodyClasses.push(classes._active);
    menuIconClasses.push(classes._active);
  }

  function handleBurgerClick() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
          <img src={logo} alt="logo not found" />
        </div>
        <div className={classes.header__menu + " " + classes.menu}>
          <nav className={menuBodyClasses.join(" ")}>
            <ul class={classes.menu__list}>
              <li>
                <Link to="/" class={classes.menu__link}>
                  Vehicles
                </Link>
              </li>
              <li>
                <Link to="/" class={classes.menu__link}>
                  Main
                </Link>
              </li>
              <li>
                <Link to="/" class={classes.menu__link}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={menuIconClasses.join(" ")}
            onClick={handleBurgerClick}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;