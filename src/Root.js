import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import commentReducer from "./reducers/comment";
import PrivateReducer from "./reducers/private_message";

export default ({ children, initialState = {} }) => {
  const rootReducer = combineReducers({
    comments: commentReducer,
    privateMessages: PrivateReducer
  });

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};
