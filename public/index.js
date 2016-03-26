import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Accommodations from './components/accommodations';
import Admin from './components/admin';
import App from './components/app';
import Details from './components/details';
import Photos from './components/photos';
import Registry from './components/registry';
import RSVP from './components/rsvp';

require('./css/styles.less');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="details" component={Details}/>
      <Route path="accommodations" component={Accommodations}/>
      <Route path="photos" component={Photos}/>
      <Route path="registry" component={Registry}/>
      <Route path="rsvp" component={RSVP}/>
      <Route path="admin" component={Admin}/>
    </Route>
  </Router>
), document.getElementById('app'));
