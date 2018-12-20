import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import commentReducer from "./reducers/comment";
import PrivateReducer from "./reducers/private_message";

export default ({ children, initialState = {} }) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootReducer = combineReducers({
    comments: commentReducer,
    privateMessages: PrivateReducer
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};
