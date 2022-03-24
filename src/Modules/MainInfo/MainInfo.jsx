import React from "react";

import { InfoCard, ModalWindow } from "../../components/index";

import Feedback from "../Feedback";

import { me } from "../../public/images";

import classes from "./mainInfo.module.css";

const MainInfo = () => {
  return (
    <div className={classes.containerOfPage}>
      <div className={classes.mainContainer}>
        <div className={classes.greetingsBlock}>
          <h1 className={classes.mainTitle}>Добро пожаловать в академию!</h1>
        </div>
        <div className={classes.aboutMe}>
          <div className={classes.profileImg}>
            <img src={me} className={classes.myPhoto} />
          </div>
          <InfoCard className={classes.informBlock} />
        </div>
        <Feedback />
      </div>
    </div>
  );
};

export default MainInfo;
