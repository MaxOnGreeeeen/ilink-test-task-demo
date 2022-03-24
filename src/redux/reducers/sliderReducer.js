import {
  CREATE_SLIDE,
  CHANGE_SLIDE,
  CLEAR_SLIDES,
  SET_RIGHT,
  SET_LEFT,
  SET_CURRENT_SLIDER,
  CLEAR_CURRENT_SLIDER,
} from "../actions/types";
import { setCurrentSlide } from "../actions/sliderActions";

const initialState = {
  slides: [],
  limitSlides: 2,
  totalSlidesAmount: 0,
  currentSlider: 0,
  rightAvailable: true,
  leftAvailable: false,
};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SLIDE:
      return {
        ...state,
        slides: [...state.slides, action.payload],
        totalSlidesAmount: state.slides.length + 1,
      };
    case CHANGE_SLIDE:
      return {
        ...state,
        limitSlides: action.payload,
      };
    case CLEAR_SLIDES:
      return {
        ...state,
        slides: [],
      };
    case SET_RIGHT: {
      return {
        ...state,
        rightAvailable: action.payload,
      };
    }
    case SET_CURRENT_SLIDER: {
      return {
        ...state,
        currentSlider: (state.currentSlider += action.payload),
      };
    }

    case SET_LEFT: {
      return {
        ...state,
        leftAvailable: action.payload,
      };
    }
    case CLEAR_CURRENT_SLIDER: {
      return {
        ...state,
        currentSlider: 0,
        leftAvailable: false,
        rightAvailable: true,
      };
    }
    default:
      return state;
  }
};
