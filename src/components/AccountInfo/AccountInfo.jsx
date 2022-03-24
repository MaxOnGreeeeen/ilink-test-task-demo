import React from "react";

import { me } from "../../public/images/index";

import classes from "./accountInfo.module.css";

const AccountInfo = (props) => {
  return (
    <div className={classes.accountBlock}>
      <div className={classes.photoContainer}>
        <img className={classes.imgBlock} src={me} />
      </div>
      <div className={classes.titleContainer}>
        <h1 className={classes.accountNameSecondName}>Максим Садиков</h1>
        <h1 className={classes.accountName}>Максим</h1>
      </div>
    </div>
  );
};

export default AccountInfo;
