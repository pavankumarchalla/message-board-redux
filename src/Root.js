import React, { Component } from 'react'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import {postReducer} from './reduces/post_reducer';
import {messageReducer} from './reduces/message_reducer';

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
  const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger, ReduxPromise, ReduxThunk)));
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>{this.props.children}</BrowserRouter>
            </Provider>
        )
    }
}

export default Root;
