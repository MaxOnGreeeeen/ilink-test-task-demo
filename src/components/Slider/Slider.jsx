import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

import { SliderItem } from "../index";

import classes from "./slider.module.css";

//TODO: создать ограничение пагинации
const Slider = (props) => {
  const slides = useSelector((state) => state.slider);

  return (
    <div {...props} className={classes.sliderBody}>
      {slides.slides.map((slideItem, number) => {
        return (
          <SliderItem
            style={{
              transform: `translateX(${props.offset}px)`,
              transition: "translate",
              transitionProperty: "transform",
              transitionDuration: "0.5s",
              transitionTimingFunction: "ease-in-out",
            }}
            slides={slideItem}
            key={number}
          />
        );
      })}
    </div>
  );
};

export default Slider;
