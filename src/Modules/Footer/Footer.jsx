import React from "react";

import classes from "./footer.module.css";
import { twitterIcon, vkIcon, facebookIcon } from "../../public/images";

const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div className={classes.footerTitleContainer}>
          <h3 className={classes.footerTitle}>
            &copy; ILINK ACADEMY. ALL RIGHTS RESERVED. 2022
          </h3>
        </div>

        <div className={classes.iconsBlock}>
          <img className={classes.iconItem} src={twitterIcon} />
          <img className={classes.iconItem} src={facebookIcon} />
          <img className={classes.iconItem} src={vkIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
