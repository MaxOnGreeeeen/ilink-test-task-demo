import {
  OPEN_MODAL,
  CLOSE_MODAL,
  MODAL_ONCHANGE_DESCRIPTION,
  MODAL_ONCHANGE_TITLE,
  SET_MODAL_CONTENT,
  SET_TITLE_ERROR,
  SET_DESCRIPTION_ERROR,
  SET_MODAL_DISABLE,
  SET_MODAL_SUCCESS,
} from "./types";

export const openModalWindow = (active) => ({
  type: OPEN_MODAL,
  payload: active,
});

export const changeDescription = (feedbackDescription) => ({
  type: MODAL_ONCHANGE_DESCRIPTION,
  payload: feedbackDescription,
});

export const changeTitle = (feedbackTitle) => ({
  type: MODAL_ONCHANGE_TITLE,
  payload: feedbackTitle,
});

export const closeModal = (active, content) => ({
  type: CLOSE_MODAL,
  payload: { active, content },
});

export const changeUserData = (userData) => ({
  type: SET_MODAL_CONTENT,
  payload: userData,
});

export const setTitleError = (error, message) => ({
  type: SET_TITLE_ERROR,
  payload: { error, message },
});

export const setDescriptionError = (error, message) => ({
  type: SET_DESCRIPTION_ERROR,
  payload: { error, message },
});

export const setSubmitDisable = (disable) => ({
  type: SET_MODAL_DISABLE,
  payload: disable,
});

export const setModalSuccess = (success) => ({
  type: SET_MODAL_SUCCESS,
  payload: success,
});
