import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Admin from './components/admin';
import App from './components/app';

require('./css/styles.less');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="admin" component={Admin}/>
    </Route>
  </Router>
), document.getElementById('app'));
