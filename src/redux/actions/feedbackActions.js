import { LOAD_FEEDBACK, CREATE_FEEDBACK } from "./types";

export const loadFeedbacks = () => ({ type: LOAD_FEEDBACK, payload: "" });

export const createFeedback = (newFeedback) => ({
  type: CREATE_FEEDBACK,
  payload: newFeedback,
});
