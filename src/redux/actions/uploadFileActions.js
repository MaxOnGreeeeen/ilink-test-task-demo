import axios from "axios";

import {
  FILE_IS_LOADING,
  UPLOAD_SUCCESS,
  UPLOAD_FILE,
  UPLOAD_FAILURE,
  CLEAR_FILE,
} from "./types";

export const uploadFile = (file) => async (dispatch) => {
  const data = new FormData();
  data.append("file", file);
  dispatch({ type: FILE_IS_LOADING, payload: file.name });
  try {
    const response = await fetch("https://file.io/?expires=1h", {
      method: "POST",
      body: data,
      mode: "cors",
    });

    const json = await response.json();

    console.log(json);
    if (!response.ok) {
      throw new Error(json.message || "что-то пошло не так");
    }

    if (file.size > 1000000) {
      throw new Error("Your file is too big!");
    }

    if (file.type.split("/")[0] !== "image") {
      throw new Error("File extension is wrong");
    }
    if (response.ok) {
      dispatch({ type: UPLOAD_SUCCESS, payload: json.link });
    }
  } catch (error) {
    dispatch(setUploadError(error.message));
  }
};

export const setUploadError = (error) => ({
  type: UPLOAD_FAILURE,
  payload: error,
});

export const clearFile = () => ({
  type: CLEAR_FILE,
});
