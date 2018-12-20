import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Root from "../Root";
import PrivateMessage from "./messages/PrivateMessage";
import PublicMessage from "./PublicMessage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={PublicMessage} />
          <Route path="/private" component={PrivateMessage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
