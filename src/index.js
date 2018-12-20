import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import CommentForm from "./components/CommentForm";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact component={App} />
        <Route path="/post" component={CommentForm} />
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
