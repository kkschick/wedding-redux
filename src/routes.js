import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import auth from './auth';

import Accommodations from './components/Accommodations';
import Admin from './components/Admin';
import App from './components/App';
import Boston from './components/Boston';
import Details from './components/Details';
import Directions from './components/Directions';
import Index from './components/Index';
import Login from './components/Login';
import Photos from './components/Photos';
import Registry from './components/Registry';
import RsvpContainer from './components/RsvpContainer';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} onEnter={requireAuth}/>
      <Route path="/login" component={Login}/>
      <Route path="/details" component={Details} onEnter={requireAuth}/>
      <Route path="/directions" component={Directions} onEnter={requireAuth}/>
      <Route path="/hotels" component={Accommodations} onEnter={requireAuth}/>
      <Route path="/boston" component={Boston} onEnter={requireAuth}/>
      <Route path="/photos" component={Photos} onEnter={requireAuth}/>
      <Route path="/registry" component={Registry} onEnter={requireAuth}/>
      <Route path="/rsvp" component={RsvpContainer} onEnter={requireAuth}/>
      <Route path="/admin" component={Admin} onEnter={requireAuth}/>
    </Route>
  </Router>
);

export default routes;
