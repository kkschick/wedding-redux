import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Admin from './components/admin';
import App from './components/app';

require('./css/styles.less');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="details" component={Admin}/>
      <Route path="accommodations" component={Admin}/>
      <Route path="photos" component={Admin}/>
      <Route path="registry" component={Admin}/>
      <Route path="rsvp" component={Admin}/>
      <Route path="admin" component={Admin}/>
    </Route>
  </Router>
), document.getElementById('app'));
