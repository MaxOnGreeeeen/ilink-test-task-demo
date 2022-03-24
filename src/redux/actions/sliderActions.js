import {
  CREATE_SLIDE,
  CHANGE_SLIDE,
  CLEAR_SLIDES,
  SET_RIGHT,
  SET_LEFT,
  SET_CURRENT_SLIDER,
  CLEAR_CURRENT_SLIDER,
} from "./types";

export const createSlide = (newSlide) => ({
  type: CREATE_SLIDE,
  payload: newSlide,
});

export const setSlidesAmount = (slidesAmount) => ({
  type: CHANGE_SLIDE,
  payload: slidesAmount,
});

export const clearSlides = () => ({
  type: CLEAR_SLIDES,
  payload: "",
});

export const setLeft = (isAvailable) => ({
  type: SET_LEFT,
  payload: isAvailable,
});

export const setRight = (isAvailable) => ({
  type: SET_RIGHT,
  payload: isAvailable,
});

export const setCurrentSlide = (numberToAdd) => ({
  type: SET_CURRENT_SLIDER,
  payload: numberToAdd,
});

export const clearCurrentSlide = () => ({
  type: CLEAR_CURRENT_SLIDER,
});
