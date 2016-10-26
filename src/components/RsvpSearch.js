import React from 'react';
import { connect } from 'react-redux';

import RsvpForm from './RsvpForm';
import Spinner from '../vendor/react-spinner';

export default class RsvpSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.guestName) {
      this.props.getRsvpInfo(this.state.guestName.toLowerCase());
      this.setState({
        error: '',
        guestName: null
      });
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

  handleResetClick(e) {
    e.preventDefault();
    this.props.resetRsvp();
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
            Please enter your first and last names:<br/>
            <span className="smaller-text">
              (If you're not sure which name to use, go with the name we know you best by.)
            </span>
          </div>
          <form className="form-element" onSubmit={::this.handleSubmit}>
              <input value={this.state.guestName}
                     placeholder="Enter full name"
                     className="form-element"
                     onChange={::this.handleGuestName} />
              <br/><br/>
              <button type="submit">Submit</button>
              { this.props.isLoading && <Spinner /> }
              {errorBox}
          </form>
          <div className="paragraph-text small-text">
            (Be sure to RSVP individually for everyone in your party.)
          </div>
        </div>
      );
    } else if (this.props.sentRsvp) {
      boxContent = (
        <div className="paragraph-text">
          <span>Thank you for your RSVP!</span><br/><br/>
          <a href="" onClick={::this.handleResetClick}>
            Want to RSVP for someone else?
          </a>
        </div>
      );
    } else {
      boxContent = <RsvpForm guestRsvp={this.props.guestRsvp}
                             isLoading={this.props.isLoading}
                             onSubmit={this.props.onSubmit} />;
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
