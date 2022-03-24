import React from "react";

import { iconNotFound } from "../../public/images";

import classes from "./feedbackCard.module.css";

const FeedbackCard = ({ title, description, dateOfCreation, imgFile }) => {
  const feedbackItem = {
    title: title, // name of person
    description: description, //body of card
    dateOfCreation: dateOfCreation, //when it was created
    imgFile: imgFile, //profile image
  };
  return (
    <div className={classes.cardBody}>
      <div className={classes.headOfBody}>
        <div className={classes.accountInfo}>
          <div className={classes.imgContainer}>
            {imgFile ? <img src={imgFile} /> : <img src={iconNotFound} />}
          </div>
          <h2 className={classes.profileTitle}>{feedbackItem.title}</h2>
        </div>
        <div className={classes.dateOfCreation}>
          <h3 className={classes.date}>{feedbackItem.dateOfCreation}</h3>
        </div>
      </div>
      <div className={classes.feedbackBody}>
        <p className={classes.description}>{feedbackItem.description}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
