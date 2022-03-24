import { applyMiddleware, compose, createStore } from "redux";

import { rootReducer } from "./redux/reducers/rootReducer";

import thunk from "redux-thunk";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
