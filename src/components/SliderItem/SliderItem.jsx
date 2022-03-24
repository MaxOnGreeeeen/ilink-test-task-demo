import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

import { FeedbackCard } from "../../UI Kit";

import classes from "./slider.module.css";

const SliderItem = (props) => {
  const limit = useSelector((state) => state.slider);

  const [className, setClassname] = useState(classes.sliderItem.toString());

  useEffect(() => {
    setClassname((prev) => prev + " " + classes.changeSlide.toString());
  }, [limit.limitSlides]);

  return (
    <div className={className} {...props}>
      {props.slides.map((feedbackItem, number) => {
        return (
          <FeedbackCard
            imgFile={feedbackItem.photo}
            key={number}
            title={feedbackItem.title}
            description={feedbackItem.description}
            dateOfCreation={feedbackItem.dateOfCreation}
          />
        );
      })}
    </div>
  );
};

export default SliderItem;
