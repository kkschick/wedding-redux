import React from 'react';
import { connect } from 'react-redux';

import RsvpForm from './RsvpForm';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      this.setState({
        error: ''
      });
      this.props.getGuestsByName(this.state.firstName, this.state.lastName);
    } else {
      this.setState({
        error: 'Please enter both a first and last name!'
      });
    }
  }

  handleFirstName(e) {
    e.preventDefault();
    this.setState({
      firstName: e.target.value
    });
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
    let errorBox, resultsList, boxContent;
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
          <br/><br/>
          <span className="paragraph-text small-text">
            (If none of the above, check your spelling and search again!)
          </span>
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
    if (!this.props.guestResults) {
      boxContent = (
        <div>
          <h1 className="header-medium">
              Let's find your RSVP!
            </h1><br/>
          <div className="paragraph-text">
            Enter your name as it appears on your invitation:
          </div>
          <form className="form-element" onSubmit={::this.handleSubmit}>
              <input value={this.state.firstName}
                     placeholder="Enter first name"
                     className="form-element"
                     onChange={::this.handleFirstName} />&nbsp;&nbsp;&nbsp;&nbsp;
              <input value={this.state.lastName}
                     placeholder="Enter last name"
                     className="form-element"
                     onChange={::this.handleLastName} />
              <br/><br/>
              <button type="submit">Submit</button>
              {errorBox}
              {resultsList}
              <br/>
          </form>
        </div>
      );
    } else {
      boxContent = (
        <RsvpForm party={this.props.guestResults}/>
      );
    }

    return (
      <div className="form-container">
        <div className="form-inner">
          {boxContent}
        </div>
      </div>
    );
  }
}
