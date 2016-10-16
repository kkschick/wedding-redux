import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { submitFormData } from '../actions/rsvpActions';

class RsvpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-element paragraph-text" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <div className="form-field">
            <Field name="name" component="input" type="text" placeholder="Full name" className="input-name" />
          </div>
        </div>
        <hr />
        <div>
          <label>Will you be able to attend the wedding?</label>
          <div className="form-field">
            <label>
              <Field name="isComingWedding" component="input" type="radio" value="TRUE"/>
                &nbsp;Yes&nbsp;&nbsp;
            </label>
            <label>
              <Field name="isComingWedding" component="input" type="radio" value="FALSE"/>
                &nbsp;No
            </label>
          </div>
        </div>
        <hr />
        <div>
          <label>Please select a meal:</label>
          <div className="form-field">
            <Field name="mealPreference" component="select">
              <option value="chicken" key="chicken">Chicken</option>
              <option value="fish" key="fish">Fish</option>
              <option value="vegetarian" key="vegetarian">Vegetarian</option>
            </Field>
          </div>
        </div>
        <div>
          <label className="small-text">Any dietary restrictions we should know about?</label><br/>
          <div className="form-field">
            <Field name="dietaryRestrictions" component="textarea" type="text" className="textarea-field" />
          </div>
        </div>
        <hr />
        <div>
          <label>Will you need parking?</label>
          <div className="form-field">
            <label>
              <Field name="needsParking" component="input" type="radio" value="TRUE"/>
                &nbsp;Yes&nbsp;&nbsp;
            </label>
            <label>
              <Field name="needsParking" component="input" type="radio" value="FALSE"/>
                &nbsp;No
            </label>
          </div>
        </div>
        <div>
          <label>How many parking vouchers* will you need?</label>
          <div className="form-field">
            <Field name="numParkingSpots" component="input" type="number" placeholder="# spots" className="input-spots" />
          </div><br/>
          <span className="smaller-text">* With a voucher, you can park for $7/car at the Back Bay Garage.</span><br/>
        </div>
        <hr />
        <div>
          <label>Which of these other events will you be able to attend?</label><br/>
          <label htmlFor="isComingFri">Friday Welcome Party (4/28, 9:30pm-12am):</label>
          <div className="form-field">
            <Field name="isComingFri" id="isComingFri" component="input" type="checkbox"/>
          </div>
        </div>
        <div>
          <label htmlFor="isComingPicnic">Saturday Picnic (4/29, 10am-1pm):</label>
          <div className="form-field">
            <Field name="isComingPicnic" id="isComingPicnic" component="input" type="checkbox"/>
          </div>
        </div>
        <div>
          <label htmlFor="isComingBrunch">Sunday Brunch (4/30, 10am-1pm):</label>
          <div className="form-field">
            <Field name="isComingBrunch" id="isComingBrunch" component="input" type="checkbox"/>
          </div>
        </div>
        <hr />
        <div>
          <label>Anything else you want to tell us?</label><br/>
          <div className="form-field">
            <Field name="comments" component="textarea" type="text" className="textarea-field" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RsvpForm = reduxForm({
  form: 'rsvpForm'
})(RsvpForm);

RsvpForm = connect(
  state => ({
    initialValues: state.rsvpReducer.guestRsvp
  })
)(RsvpForm);

export default RsvpForm;
