import React from 'react';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';

import { getRsvpInfo, submitFormData } from '../actions/rsvpActions';

class SearchBoxContainer extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <SearchBox guestRsvp={this.props.guestRsvp}
                   gotRsvp={this.props.gotRsvp}
                   errorMessage={this.props.errorMessage}
                   getRsvpInfo={(guestName) => this.props.onGetRsvpInfo(guestName)}
                   onSubmit={(data) => this.props.onSubmit(data)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    guestRsvp: state.rsvpReducer.guestRsvp,
    gotRsvp: state.rsvpReducer.gotRsvp,
    errorMessage: state.rsvpReducer.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRsvpInfo: (guestName) => dispatch(getRsvpInfo(guestName)),
    onSubmit: (data) => dispatch(submitFormData(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
