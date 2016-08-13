import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  getActiveItem(navItems) {
    let activeRoute = this.props.active;
    if (activeRoute === '/' || activeRoute === '/admin' || activeRoute === '/login') {
      return navItems;
    }
    let activeNavItem = navItems.find(item => { return item.route === activeRoute; });
    activeNavItem.classNames = activeNavItem.classNames + ' active';
    return navItems;
  }

  render() {
    let navItems = [
      { name: 'The Wedding', route: '/details', classNames: 'no-link-formatting'},
      { name: 'Directions', route: '/directions', classNames: 'no-link-formatting'},
      { name: 'Accommodations', route: '/accommodations', classNames: 'no-link-formatting'},
      { name: 'Photos', route: '/photos', classNames: 'no-link-formatting'},
      { name: 'Registry', route: '/registry', classNames: 'no-link-formatting'},
      { name: 'RSVP', route: '/rsvp', classNames: 'no-link-formatting'}
    ];

    navItems = this.getActiveItem(navItems);

    return (
      <div>
        <h1 className="header-text"><Link to="/" className="no-link-formatting no-header-formatting">Katie & Walter</Link></h1>
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
