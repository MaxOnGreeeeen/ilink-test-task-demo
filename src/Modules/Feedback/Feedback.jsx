import React, { useEffect, useRef, useState } from "react";

import { useWindowSize } from "../../customHooks/useWindowSize";

import { useDispatch, useSelector } from "react-redux";

import {
  closeModal,
  openModalWindow,
  setModalSuccess,
  setSubmitDisable,
} from "../../redux/actions/modalWindowActions";

import {
  clearCurrentSlide,
  clearSlides,
  createSlide,
  setCurrentSlide,
  setLeft,
  setRight,
  setSlidesAmount,
} from "../../redux/actions/sliderActions";

import { clearFile } from "../../redux/actions/uploadFileActions";

import { ModalWindow, SliderPagination, Slider } from "../../components";

import { Button, ButtonArrow } from "../../UI Kit";

import {
  plusIcon,
  arrowRight,
  arrowLeft,
  arrowRightDisabled,
  arrowLeftDisabled,
} from "../../public/images";

import classes from "./feedback.module.css";
import FlashMessage from "../../UI Kit/FlashMessage/FlashMessage";

const Feedback = () => {
  const ref = useRef(null);

  const modal = useSelector((state) => state.modalWindow);

  const feedbacks = useSelector((state) => state.feedback.feedbacks);

  const slides = useSelector((state) => state.slider);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSlidesAmount(2));
  }, [dispatch]);

  useEffect(() => {
    let counter = 0,
      array = [];
    dispatch(clearSlides());
    feedbacks.map((feedbackItem, number) => {
      array.push(feedbackItem);

      if (
        counter >= slides.limitSlides - 1 ||
        number === feedbacks.length - 1
      ) {
        dispatch(createSlide(array));
        array = [];
        counter = 0;
      } else {
        counter++;
      }
    });
  }, [dispatch, slides.limitSlides, feedbacks]);

  const [isChanged, setChanged] = useState(false);

  const [width, height] = useWindowSize(() => {});

  const [notificationActive, setNotificationActive] = useState(false);

  const [mobile, setMobile] = useState(false);

  const handleNotificationClick = () => {
    setNotificationActive(false);
  };

  useEffect(() => {
    dispatch(clearCurrentSlide());
    setOffset(0);
    if (width <= 800) {
      setChanged(true);
      dispatch(setSlidesAmount(1));
      setMobile(true);
    }

    if (width > 800) {
      setChanged(false);
      dispatch(setSlidesAmount(2));
    }
  }, [width]);

  const [offset, setOffset] = useState(0);

  const handleRightButtonClick = () => {
    let currentWidth = ref.current.clientWidth;
    let maxOffset = currentWidth * slides.totalSlidesAmount;

    if (offset - currentWidth > -maxOffset) {
      setOffset((prev) => prev - currentWidth);

      if (slides.currentSlider + 1 !== slides.totalSlidesAmount - 1) {
        dispatch(setRight(true));
        dispatch(setCurrentSlide(1));
      }

      if (slides.currentSlider + 1 === slides.totalSlidesAmount - 1) {
        dispatch(setRight(false));
        dispatch(setCurrentSlide(1));
      }

      if (slides.totalSlidesAmount !== 1) {
        dispatch(setLeft(true));
      }
    }
  };

  const handleLeftButtonClick = () => {
    let currentWidth = ref.current.clientWidth;

    if (offset + currentWidth <= 0) {
      setOffset((prev) => prev + currentWidth);

      if (slides.currentSlider - 1 === 0) {
        dispatch(setLeft(false));
        dispatch(setCurrentSlide(-1));
      }

      if (slides.currentSlider - 1 !== 0) {
        dispatch(setLeft(true));
        dispatch(setCurrentSlide(-1));
      }

      if (slides.totalSlidesAmount !== 1) {
        dispatch(setRight(true));
      }
    }
  };

  const handleCreateFeedbackClick = () => {
    dispatch(openModalWindow(true));
  };

  const handleModalClose = () => {
    dispatch(closeModal(false, { title: "", description: "" }));
    dispatch(setSubmitDisable(true));
    dispatch(clearFile());
    dispatch(setModalSuccess(false));
    setNotificationActive(true);
  };

  const icon = <img src={plusIcon} />;

  return (
    <div className={classes.feedbackContainer}>
      <div ref={ref} className={classes.headOfContainer}>
        <h1 className={classes.mainTitle}>Отзывы</h1>
        <Button
          buttonClassName={"buttonStyleFlexible"}
          onClick={handleCreateFeedbackClick}
          isDisabled={false}
          isChanged={isChanged}
          startIcon={icon}
          title={"Добавить отзыв"}
        />
        <ModalWindow
          type={"NoteCreator"}
          active={modal.active}
          titlePlaceHolder={"Имя фамилия"}
          title={"Отзыв"}
          titleLabel={"Как вас зовут?"}
          descriptionLabel={"Всё ли вам понравилось?"}
          descriptionPlaceHolder={"Напишите пару слов о вашем опыте..."}
          buttonTitle={"Отправить отзыв"}
          modalClose={handleModalClose}
          modal={modal}
          notification={setNotificationActive}
        />
      </div>
      <Slider offset={offset} limit={slides.limitSlides} />
      <SliderPagination />
      <div className={classes.buttonsBlock}>
        <ButtonArrow
          color={"black"}
          disabled={slides.leftAvailable}
          onClick={handleLeftButtonClick}
          icon={arrowLeft}
          iconDisabled={arrowLeftDisabled}
        />
        <ButtonArrow
          color={"black"}
          disabled={slides.rightAvailable}
          onClick={handleRightButtonClick}
          icon={arrowRight}
          iconDisabled={arrowRightDisabled}
        />
      </div>
      <FlashMessage
        mobile={mobile}
        success={modal.success}
        onClick={handleNotificationClick}
        active={notificationActive}
      />
    </div>
  );
};

export default Feedback;
