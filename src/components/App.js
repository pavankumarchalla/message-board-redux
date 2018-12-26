import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import PublicBoard from "./publicBoard/PublicBoard";
import PrivateMessage from "./privateBoard/PrivateBoard";
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {postReducer} from '../../src/reduces/post_reducer';
import {messageReducer} from '../../src/reduces/message_reducer';
import ReduxPromise from 'redux-promise';

const rootReducer = combineReducers ({
  posts: postReducer,
  messages: messageReducer
});

const logger = store => {
  return (next) => {
    return (action) => {

      const prevState = store.getState();
      const nextState = next(action);
      console.log("[Prev State]", prevState);
      console.log("[next State]", nextState);
      return nextState;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger, ReduxPromise)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={PublicBoard} />
            <Route path="/private" component={PrivateMessage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;