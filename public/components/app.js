import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav active={this.props.location.pathname} />
        {this.props.children}
      </div>
    );
  }
}

class Nav extends React.Component {

  getActiveItem(navItems) {
    let activeRoute = this.props.active;
    let activeNavItem = navItems.find(item => { return item.route === activeRoute; });
    activeNavItem.classNames = activeNavItem.classNames + ' active';
    return navItems;
  }

  render() {
    let navItems = [
      { name: 'Details', route: '/details', classNames: 'no-link-formatting'},
      { name: 'Accommodations', route: '/accommodations', classNames: 'no-link-formatting'},
      { name: 'Photos', route: '/photos', classNames: 'no-link-formatting'},
      { name: 'Registry', route: '/registry', classNames: 'no-link-formatting'},
      { name: 'RSVP', route: '/rsvp', classNames: 'no-link-formatting'},
      { name: 'Admin', route: '/admin', classNames: 'no-link-formatting'}
    ];

    navItems = this.getActiveItem(navItems);

    return (
      <div>
        <h1 className="fancy-text"><Link to="/" className="no-link-formatting">Katie + Walter</Link></h1>
        <div className="nav">
          <ul>
            { navItems.map((item, idx) =>
              <li key={idx}><Link to={item.route} className={item.classNames}>{item.name}</Link></li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
