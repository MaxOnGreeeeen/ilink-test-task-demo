import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { fillPages } from "../../helpers/slider";

import { sliderCurrent, sliderNotActive } from "../../public/images";

import classes from "./sliderPagination.module.css";

const SliderPagination = () => {
  const pages = useSelector((state) => state.slider);

  const [sliderCur, setSliderCurrent] = useState(
    fillPages(pages.totalSlidesAmount, pages.currentSlider)
  );
  useEffect(() => {
    setSliderCurrent(fillPages(pages.totalSlidesAmount, pages.currentSlider));
  }, [pages.currentSlider, pages.totalSlidesAmount]);

  return (
    <div className={classes.sliderPagination}>
      <div className={classes.sliderPaginationList}>
        {sliderCur.map((slide, number) => {
          if (slide === true) {
            return <img className={classes.pageItem} src={sliderCurrent} />;
          } else {
            return <img className={classes.pageItem} src={sliderNotActive} />;
          }
        })}
      </div>
    </div>
  );
};

export default SliderPagination;
