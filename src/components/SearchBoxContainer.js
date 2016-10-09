import React from 'react';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';

import { getAllRsvpInfo, getRsvpInfo, goBack } from '../actions/rsvpActions';

class SearchBoxContainer extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <SearchBox allRsvps={this.props.allRsvps}
                   guestRsvp={this.props.guestRsvp}
                   gotRsvp={this.props.gotRsvp}
                   currentGuest={this.props.currentGuest}
                   errorMessage={this.props.errorMessage}
                   getAllRsvpInfo={() => this.props.onGetAllRsvpInfo()}
                   getRsvpInfo={(guestName) => this.props.onGetRsvpInfo(guestName)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allRsvps: state.rsvpReducer.allRsvps,
    guestRsvp: state.rsvpReducer.guestRsvp,
    gotRsvp: state.rsvpReducer.gotRsvp,
    currentGuest: state.rsvpReducer.currentGuest,
    errorMessage: state.rsvpReducer.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetAllRsvpInfo: () => dispatch(getAllRsvpInfo()),
    onGetRsvpInfo: (guestName) => dispatch(getRsvpInfo(guestName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
