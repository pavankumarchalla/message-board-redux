import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import commentReducer from "./reducers/comment";
import PrivateReducer from "./reducers/private_message";

export default ({ children, initialState = {} }) => {
  const rootReducer = combineReducers({
    comments: commentReducer,
    privateMessages: PrivateReducer
  });

  const store = createStore(rootReducer, initialState);
  return <Provider store={store}>{children}</Provider>;
};
