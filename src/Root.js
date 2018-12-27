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

  const dummyState = {
      posts: [{id: 1, title: 'Pavan'}, {id: 1, title: 'Kumar'}]
  };
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
class Root extends Component {
    render() {
        const initialState = this.props.initialState || dummyState;
        const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(logger, ReduxPromise, ReduxThunk)));

        return (
            <Provider store={store}>
                <BrowserRouter>{this.props.children}</BrowserRouter>
            </Provider>
        )
    }
}

export default Root;
