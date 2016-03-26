import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return <Nav />;
    {this.props.children}
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fancy-text"><Link to="/" className="no-link-formatting ">Katie + Walter</Link></h1>
        <div className="nav">
          <ul>
            <li><Link to="/details" className="no-link-formatting ">Details</Link></li>
            <li><Link to="/accommodations" className="no-link-formatting  ">Accommodations</Link></li>
            <li><Link to="/photos" className="no-link-formatting  ">Photos</Link></li>
            <li><Link to="/registry" className="no-link-formatting  ">Registry</Link></li>
            <li><Link to="/rsvp" className="no-link-formatting  ">RSVP</Link></li>
            <li><Link to="/admin" className="no-link-formatting ">Admin</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
