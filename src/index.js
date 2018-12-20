import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import PrivateMessage from "./components/messages/PrivateMessage";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/private" component={PrivateMessage} />
      </div>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
