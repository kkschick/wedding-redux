import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import Accommodations from './components/Accommodations';
import Admin from './components/Admin';
import App from './components/App';
import Details from './components/Details';
import Directions from './components/Directions';
import Index from './components/Index';
import Photos from './components/Photos';
import Registry from './components/Registry';
import RSVP from './components/RSVP';

require('./css/styles.less');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="details" component={Details}/>
      <Route path="directions" component={Directions}/>
      <Route path="accommodations" component={Accommodations}/>
      <Route path="photos" component={Photos}/>
      <Route path="registry" component={Registry}/>
      <Route path="rsvp" component={RSVP}/>
      <Route path="admin" component={Admin}/>
    </Route>
  </Router>
), document.getElementById('app'));
