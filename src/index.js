import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

import routes from './routes';
import rsvpReducer from './reducers/rsvpReducer';

require('./css/styles.less');
require('./css/image-gallery.less');

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : identity
)(createStore);

const RootReducer = combineReducers({
  form: formReducer,
  rsvpReducer: rsvpReducer,
  routing: routerReducer
});

const store = createStoreWithMiddleware(RootReducer, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <div>
        <Router
          routes={ routes }
          history={ history }
        />
      </div>
    </Provider>
  </div>,
  document.getElementById('root')
);

window.onbeforeunload = function() {
  let tokenObj = JSON.parse(localStorage.getItem('token'));
  if (!tokenObj){
    return ;
  }
  if (new Date().getTime() > (tokenObj.timestamp + 3600000)) {
    // Should last for an hour
    localStorage.removeItem('token');
  }
  return ;
};
