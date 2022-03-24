import { combineReducers } from "redux";
import { feedbackReducer } from "./feedbackReducer";
import { sliderReducer } from "./sliderReducer";
import { modalWindowReducer } from "./modalWindowReducer";
import { uploadFileReducer } from "./uploadFileReducer";

export const rootReducer = combineReducers({
  feedback: feedbackReducer,
  slider: sliderReducer,
  modalWindow: modalWindowReducer,
  uploadFile: uploadFileReducer,
});
