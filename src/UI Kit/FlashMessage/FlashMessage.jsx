import React from "react";

import {
  flashMessageSuccess,
  flashMessageSuccessMob,
  flashMessageErrorMob,
  flashMessageError,
} from "../../public/images/index";

import classes from "./flashMessage.module.css";

const FlashMessage = (props) => {
  if (props.active && props.success) {
    return (
      <div onClick={props.onClick} className={classes.notificationInfo}>
        {props.mobile ? (
          <img src={flashMessageSuccessMob} />
        ) : (
          <img src={flashMessageSuccess} />
        )}
      </div>
    );
  }
  if (props.active && !props.success) {
    return (
      <div onClick={props.onClick} className={classes.notificationInfo}>
        {props.mobile ? (
          <img src={flashMessageErrorMob} />
        ) : (
          <img src={flashMessageError} />
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default FlashMessage;
