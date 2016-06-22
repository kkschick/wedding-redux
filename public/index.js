import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import routes from './routes';
import rsvpReducer from './reducers/rsvpReducer';

require('./css/styles.less');

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const RootReducer = combineReducers({
  rsvpReducer: rsvpReducer
});

const store = createStoreWithMiddleware(RootReducer, window.__INITIAL_STATE__);


ReactDOM.render(
  <div>
    <Provider store={ store }>
      <div>
        <Router
          routes={ routes }
          history={ browserHistory }
        />
      </div>
    </Provider>
  </div>,
  document.getElementById('app')
);

// window.onbeforeunload = function() {
//   localStorage.removeItem('token');
//   return '';
// };
