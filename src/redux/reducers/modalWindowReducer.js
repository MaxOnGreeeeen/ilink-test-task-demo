import {
  CLOSE_MODAL,
  MODAL_ONCHANGE_DESCRIPTION,
  MODAL_ONCHANGE_TITLE,
  OPEN_MODAL,
  SET_TITLE_ERROR,
  SET_DESCRIPTION_ERROR,
  SET_MODAL_DISABLE,
  SET_MODAL_SUCCESS,
} from "../actions/types";

const initialState = {
  modal: {
    title: "",
    description: "",
  },
  active: false,
  disabled: true,
  titleError: {
    error: false,
    message: "",
  },
  descriptionError: {
    error: false,
    message: "",
  },
  success: false,
};

export const modalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        active: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        active: action.payload.active,
        modal: action.payload.content,
      };
    case MODAL_ONCHANGE_TITLE:
      return {
        ...state,
        modal: { ...state.modal, title: action.payload },
      };
    case MODAL_ONCHANGE_DESCRIPTION:
      return {
        ...state,
        modal: { ...state.modal, description: action.payload },
      };
    case SET_TITLE_ERROR:
      return {
        ...state,
        titleError: {
          error: action.payload.error,
          message: action.payload.message,
        },
      };
    case SET_DESCRIPTION_ERROR:
      return {
        ...state,
        descriptionError: {
          error: action.payload.error,
          message: action.payload.message,
        },
      };
    case SET_MODAL_DISABLE:
      return {
        ...state,
        disabled: action.payload,
      };
    case SET_MODAL_SUCCESS:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
