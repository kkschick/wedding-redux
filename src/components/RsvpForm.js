import React from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

export default class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComing: true
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // if (this.state.firstName && this.state.lastName) {
    //   this.setState({
    //     error: ''
    //   });
    //   this.props.getGuestsByName(this.state.firstName, this.state.lastName);
    // } else {
    //   this.setState({
    //     error: 'Please enter both a first and last name!'
    //   });
    // }
  }

  handleIsComing(e) {
    console.log(this.state);
    e.preventDefault();
    this.setState({
      isComing: !isComing
    });
  }

  render() {
    let currentGuest = _.first(this.props.party);
    console.log(currentGuest);
    return (
      <div>
        <h1 className="header-medium">
          {currentGuest.first_name}{'  '}{currentGuest.last_name}
        </h1><br/><br/>
        <form className="form-element" onSubmit={::this.handleSubmit}>
          <div className="paragraph-text">
            Will you be able to attend?
          </div>
          <input type="radio"
                 name="isComing"
                 id="accept"
                 defaultChecked={true}
                 value={this.state.isComing} 
                 onChange={() => ::this.handleIsComing}/>
          <label>Accept</label>
          <input type="radio"
                 name="isComing"
                 id="decline"
                 value={this.state.isComing} 
                 onChange={() => ::this.handleIsComing}/>
          <label>Decline</label>
          <button type="submit">Submit</button>
          <br/>
        </form>
      </div>
    );
  }
}
