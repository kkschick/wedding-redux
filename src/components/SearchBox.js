import React from 'react';
import { connect } from 'react-redux';

import RsvpForm from './RsvpForm';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.guestName) {
      this.setState({
        error: ''
      });
      this.props.getRsvpInfo(this.state.guestName.toLowerCase());
    } else {
      this.setState({
        error: 'Please enter your name!'
      });
    }
  }

  handleGuestName(e) {
    e.preventDefault();
    this.setState({
      guestName: e.target.value
    });
  }

  render() {
    let errorBox, boxContent;
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
    if (!this.props.gotRsvp) {
      boxContent = (
        <div>
          <h1 className="header-medium">
              Let's find your RSVP!
            </h1><br/>
          <div className="paragraph-text">
            Enter your first and last names as they appear on your invitation:
          </div>
          <form className="form-element" onSubmit={::this.handleSubmit}>
              <input value={this.state.guestName}
                     placeholder="Enter full name"
                     className="form-element"
                     onChange={::this.handleGuestName} />
              <br/><br/>
              <button type="submit">Submit</button>
              {errorBox}
          </form>
        </div>
      );
    } else {
      boxContent = <RsvpForm onSubmit={this.props.onSubmit} />;
    }

    return (
      <div className="form-container-rsvp">
        <div className="form-inner">
          {boxContent}
        </div>
      </div>
    );
  }
}
