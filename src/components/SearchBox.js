import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import _ from 'lodash';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: ''
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.partyResults) {
      browserHistory.push('/results');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.lastName) {
      this.props.getGuestsByLastName(this.state.lastName);
    } else {
      this.setState({
        error: 'Please enter a last name!'
      });
    }
  }

  handleLastName(e) {
    e.preventDefault();
    this.setState({
      lastName: e.target.value
    });
  }

  getPartyInfo(guestId) {
    this.props.getRsvpInfo(guestId);
  }

  render() {
    let errorBox, resultsList;
    if (this.props.searchResults.length > 0) {
      resultsList = (
        <div>
          <h1 className="header-medium">
            Which of these is you?
          </h1><br />
          {this.props.searchResults.map((guest, idx) => {
            return (
              <a key={idx}
                 className="paragraph-text"
                 onClick={() => ::this.getPartyInfo(guest.id)}>
                {guest.first_name} {guest.last_name}
              </a>
            );
          })}
        </div>
      );
    }
    if (this.state.error || this.props.errorMessage) {
      errorBox = (
        <p className="paragraph-text pink-text">
          {this.state.error || this.props.errorMessage}<br/>
          <span className="small-text">
            Try again, or email us at katieandwalterparty(at)gmail(dot)com.
          </span>
        </p>
      );
    }

    return (
      <div className="form-container">
        <div className="form-inner">
          <h1 className="header-medium">
            Let's find your RSVP!
          </h1><br/>
          <div className="paragraph-text">
            Enter your last name as it appears on your invitation:
          </div>
          <form className="form-element" onSubmit={::this.handleSubmit}>
              <input value={this.state.lastName}
                     placeholder="Enter last name"
                     className="form-element"
                     onChange={::this.handleLastName} />
              <br/>
              <button type="submit">Submit</button>
              {errorBox}
              {resultsList}
            </form>
          </div>
      </div>
    );
  }
}
