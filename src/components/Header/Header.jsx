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
    document.body.classList.add(classes.bodyActive);
  } else {
    document.body.classList.remove(classes.bodyActive);
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
            <ul className={classes.menu__list}>
              <li onClick={(e) => setIsBurgerOpen(false)}>
                <Link to="/vehicles" className={classes.menu__link}>
                  Vehicles
                </Link>
              </li>
              <li onClick={(e) => setIsBurgerOpen(false)}>
                <Link to="/" className={classes.menu__link}>
                  Main
                </Link>
              </li>
              <li onClick={(e) => setIsBurgerOpen(false)}>
                <Link to="/about" className={classes.menu__link}>
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
