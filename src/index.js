import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import CommentForm from "./components/CommentForm";
import Navbar from "./components/Navbar";
import commentReducer from "./reducers/comment";
import PrivateMessage from "./components/PrivateMessage";
import PrivateReducer from "./reducers/private_message";

const rootReducer = combineReducers({
  comments: commentReducer,
  privateMessages: PrivateReducer
});
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact component={App} />
        <Route path="/private" component={PrivateMessage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
