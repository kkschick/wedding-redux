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

  handleFormChange(e) {
    e.preventDefault();
  }

  render() {
    let currentGuest = this.props.currentGuest,
        guestRsvp = this.props.guestRsvp,
        rsvpHeader = (
          <h1 className="header-medium">
            RSVP for {currentGuest}
          </h1>
        );

    console.log(currentGuest, guestRsvp);
    let rsvpForm = (
      <div>
        <form className="form-element" onSubmit={::this.handleSubmit}>
          <fieldset>
            <label>Full name: </label>
            <input name="name" 
                   value={currentGuest.name}
                   className="form-element" />
          </fieldset>
          <fieldset>
            <div className="paragraph-text">
              Will you be able to attend the wedding?
            </div>
            <label>Yes</label>
            <input type="radio"
                   name="isComingWedding"
                   defaultChecked={true}
                   value={true} />
            <label>No</label>
            <input type="radio"
                   name="isComingWedding"
                   value={false} />
          </fieldset>
          <fieldset>
            <label>Please select a meal:</label>
            <select name="mealPreference">
              <option value="chicken">Chicken</option>
              <option value="fish">Fish</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </fieldset>
          <fieldset>
            <label>Any dietary restrictions we should know about?</label>
            <input name="dietaryRestrictions" 
                   value={currentGuest.dietaryRestrictions}
                   className="form-element" /><br/>
          </fieldset>
          <fieldset>
            <div className="paragraph-text">
              Will you need parking?
            </div>
            <label>Yes</label>
            <input type="radio"
                   name="needsParking"
                   id="accept"
                   defaultChecked={true}
                   value={this.state.isComing} />
            <label>No</label>
            <input type="radio"
                   name="needsParking"
                   id="decline"
                   value={this.state.isComing} />
          </fieldset>
          <fieldset>
            <label>How many parking vouchers will you need?</label>
            <input name="numParkingSpots" 
                   value={currentGuest.dietaryRestrictions}
                   className="form-element" /><br/>
          </fieldset>
          <fieldset>
            <div className="paragraph-text">
              Which of these other events will you be able to attend?
            </div>
            <label>Friday Welcome Party (4/28, 9:30-12am): </label>
            <input type="checkbox"
                   name="isComingFri"
                   defaultChecked={true}
                   value={true} /><br/>
            <label>Saturday Picnic (4/29, 10am-1pm): </label>
            <input type="checkbox"
                   name="isComingPicnic"
                   value={false} /><br/>
            <label>Sunday Brunch (4/30, 10am-1pm): </label>
            <input type="checkbox"
                   name="isComingBrunch"
                   value={false} /><br/>
          </fieldset>
          <button type="submit">Submit</button>
          <br/>
        </form>
      </div>
    );
    return (
      <div>
        {rsvpHeader}<br/><br/>
        {rsvpForm}
      </div>
    );
  }
}
