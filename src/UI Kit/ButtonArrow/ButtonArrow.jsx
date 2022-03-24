import React from "react";

import classes from "../ButtonArrow/buttonArrow.module.css";

const ButtonArrow = ({ icon, color, disabled, onClick, iconDisabled }) => {
  const button = {
    icon: icon,
    disabled: disabled,
    color: color,
    iconDisabled: iconDisabled,
  };
  return (
    <button
      onClick={onClick}
      className={
        button.disabled
          ? classes.buttonStyle
          : classes.buttonStyle + " " + classes.disabled
      }
    >
      <img src={button.disabled ? button.icon : button.iconDisabled} />
    </button>
  );
};

export default ButtonArrow;
