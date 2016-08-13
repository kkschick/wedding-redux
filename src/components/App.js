import React from 'react';
import { Link } from 'react-router';
import auth from '../auth'

import Footer from './Footer';
import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: auth.loggedIn()
    };
  }

  componentWillMount() {
    this.setState({
      loggedIn: auth.loggedIn()
    });
  }

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
