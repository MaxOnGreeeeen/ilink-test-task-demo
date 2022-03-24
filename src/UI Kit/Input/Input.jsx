import React from "react";

import classes from "./input.module.css";

const Input = (props) => {
  const types = ["line, multiLine"];

  if (props.inputType === "line") {
    return (
      <div className={classes.inputBlock}>
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={
            props.error
              ? `${classes.inputField} ${classes.error}`
              : classes.inputField
          }
        />
        <label
          className={props.error ? classes.errorMessage : classes.disabledLabel}
        >
          {props.error ? (
            <div>
              <img style={{ marginRight: "4px" }} src={props.labelIcon} />
              <span>{props.errorMessage}</span>
            </div>
          ) : (
            <div />
          )}
        </label>
      </div>
    );
  }
  if (props.inputType === "multiLine") {
    return (
      <div className={classes.textareaBlock}>
        <textarea
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          className={
            props.error
              ? `${classes.textareaField} ${classes.error}`
              : classes.textareaField
          }
        />
        <label
          className={props.error ? classes.errorMessage : classes.disabledLabel}
        >
          {props.error ? (
            <div>
              <img style={{ marginRight: "4px" }} src={props.labelIcon} />
              <span>{props.errorMessage}</span>
            </div>
          ) : (
            <div />
          )}
        </label>
      </div>
    );
  }
};

export default Input;
