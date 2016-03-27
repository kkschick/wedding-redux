import React from 'react';
import { Link } from 'react-router';

import Footer from './Footer';
import NavBar from './NavBar';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="app-body">
          <NavBar active={this.props.location.pathname} />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
