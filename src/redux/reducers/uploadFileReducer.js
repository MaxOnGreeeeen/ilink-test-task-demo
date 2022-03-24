import {
  FILE_IS_LOADING,
  UPLOAD_SUCCESS,
  UPLOAD_FILE,
  UPLOAD_FAILURE,
  CLEAR_FILE,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isLoaded: false,
  uploadError: {
    error: false,
    message: "",
  },
  fileLink: "",
  fileName: "",
};

export const uploadFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        fileName: action.payload,
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        uploadError: {
          error: true,
          message: action.payload,
        },
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        uploadError: {
          error: false,
          message: "",
        },
        fileLink: action.payload,
      };
    case CLEAR_FILE:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        uploadError: {
          error: false,
          message: "",
        },
        fileLink: "",
        fileName: "",
      };

    default:
      return state;
  }
};
