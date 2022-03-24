import React, { useEffect, useState } from "react";

import { useWindowSize } from "../../customHooks/useWindowSize";

import { AccountInfo } from "../../components";

import { Button } from "../../UI Kit";

import { academyLogo, academyWriting } from "../../public/images/index";

import classes from "./header.module.css";

const Header = () => {
  const [isChanged, setChanged] = useState(false);

  const [width, height] = useWindowSize(() => {});

  useEffect(() => {
    if (width <= 600) {
      setChanged(true);
    }

    if (width > 600) {
      setChanged(false);
    }
  }, [width]);

  const icon = (
    <div className={classes.userIcon}>
      <div className={classes.roundShape}></div>
      <div className={classes.almondShape}></div>
    </div>
  );
  return (
    <header className={classes.headerContainer}>
      <div className={classes.headerContentBlock}>
        <AccountInfo />

        <div className={`${classes.logoInfo} ${classes.navItem}`}>
          <img className={classes.logoItem} src={academyLogo} />
          <img className={classes.logoItem} src={academyWriting} />
        </div>

        <div className={`${classes.managePanel} ${classes.navItem}`}>
          <Button
            buttonClassName={"buttonStyleFlexible"}
            title={"Панель управления"}
            isChanged={isChanged}
            icon={icon}
          ></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
