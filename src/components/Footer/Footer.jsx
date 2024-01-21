import React from "react";
import classes from "./Footer.module.scss";
import privacyOptions from "../../assets/images/privacyoptions.svg";
import CtaButton from "../UI/CtaButton/CtaButton";

import logo from "../../assets/images/Toyota__Logo.svg";
import facebookSvg from "../../assets/images/social/facebook.svg";
import instagramSvg from "../../assets/images/social/instagram.svg";
import pinterestSvg from "../../assets/images/social/pinterest.svg";
import twitterSvg from "../../assets/images/social/twitter.svg";
import youtubeSvg from "../../assets/images/social/youtube.svg";
import Collapsible from "../UI/Collapsible/Collapsible";

const Footer = () => {
  const collapsible1 = {
    label: "SHOPPING TOOLS",
    content: [
      "Trade-In Value",
      "Build Your Toyota",
      "Search Inventory",
      "Find a Dealer",
      "Shop Online With SmartPath",
      "Local Specials",
      "What Fits My Budget",
      "Payment Estimator",
      "Request a Quote",
      "Toyota Certified Used Vehicles",
      "Buy Parts & Accessories",
    ],
  };
  const collapsible2 = {
    label: "VEHICLES",
    content: [
      "All Toyota Vehicles",
      "SUVs",
      "Trucks",
      "Cars",
      "Crossovers",
      "Electrified Vehicles",
      "Hybrids",
      "Hybrid Cars",
      "Hybrid SUVs",
      "TRD Pro Series",
      "Nightshade Series",
    ],
  };
  const collapsible3 = {
    label: "HELPFULL LINKS",
    content: [
      "Dealers",
      "Deals and Incentives",
      "Audio Multimedia & Connected Services",
      "Mobile Phone Compatibility",
      "Mobility",
      "Toyota Fleet",
      "Rent a Toyota",
      "Toyota Financial Services",
      "Toyota Insurance",
      "Email Updates",
    ],
  };
  const collapsible4 = {
    label: "OWNERS",
    content: [
      "Owners Home",
      "ToyotaCare & Maintenance Plans",
      "Safety Recalls & Service Campaigns",
      "Service Centers",
      "Service Specials",
      "Safety Hub",
      "Warning Lights",
      "Manuals & Warranties",
      "Service Coupons Discounts",
    ],
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        {/* <div className={classes.footerButtons}></div> mobile hide */}
        <div className={classes.footerBody}>
          <div className={classes.footerSocialSection}>
            <div className={classes.footerSocialSectionLeft}>
              <div>Accessibility</div>
              <div className={classes.btnComplex}>
                <span className={classes.btnText}>YOUR PRIVACY CHOICES</span>
                <span className={classes.btnImage}>
                  <img src={privacyOptions} alt="" />
                </span>
              </div>
              <div>Cookie Consent Options</div>
            </div>
            <div className={classes.footerSocialSectionRight}>
              <div className={classes.managePreferences}>
                <CtaButton
                  color={"#fff"}
                  width={"200px"}
                  backgroundColor={"#E10A1D"}
                >
                  Manage Preferences
                </CtaButton>
              </div>
              <div className={classes.socialLinks}>
                <div className={classes.socialLinksContainer}>
                  <img src={facebookSvg} alt="" />
                  <img src={youtubeSvg} alt="" />
                  <img src={twitterSvg} alt="" />
                  <img src={instagramSvg} alt="" />
                  <img src={pinterestSvg} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.footerLinks}>
            <div className={classes.footerLinksContainer}>
              <div className={classes.footerLinkList}>
                <Collapsible {...collapsible1}></Collapsible>
              </div>
              <div className={classes.footerLinkList}>
                <Collapsible {...collapsible2}></Collapsible>
              </div>
              <div className={classes.footerLinkList}>
                <Collapsible {...collapsible3}></Collapsible>
              </div>
              <div className={classes.footerLinkList}>
                <Collapsible {...collapsible4}></Collapsible>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footerBottomContainer}>
          <div className={classes.footerBottom}>
            <div className={classes.footerBottomContacts}>
              <div className={classes.footerBottomContactsLogo}>
                <img src={logo} alt="" />
                <p>Proud Partner of Team USA</p>
              </div>
              <div className={classes.footerBottomContactsList}>
                <ul>
                  <li>Contact Us</li>
                  <li>FAQs</li>
                  <li>Espanol</li>
                </ul>
              </div>
            </div>
            <div className={classes.footerBottomCopyright}>
              <div className={classes.footerBottomCopyrightLegacy}>
                <p>
                  ©2024 Toyota Copy.
                  <br /> Developed by Misha Trufyn
                </p>
              </div>
              <div className={classes.footerBottomCopyrightList}>
                <ul>
                  <li>Privacy Notice</li>
                  <li>Legal Terms</li>
                  <li>Site Map</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
