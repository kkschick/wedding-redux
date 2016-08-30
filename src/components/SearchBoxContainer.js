import React from 'react';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';

import { getGuestsByLastName, getRsvpInfo } from '../actions/rsvpActions';

export default class SearchBoxContainer extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <SearchBox searchResults={this.props.searchResults}
                   errorMessage={this.props.errorMessage}
                   partyResults={this.props.partyResults}
                   getGuestsByLastName={(lastName) => this.props.onGetGuestsByLastName(lastName)}
                   getRsvpInfo={(guestId) => this.props.onGetRsvpInfo(guestId)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.rsvpReducer.searchResults,
    errorMessage: state.rsvpReducer.errorMessage,
    partyResults: state.rsvpReducer.partyResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetGuestsByLastName: (lastName) => dispatch(getGuestsByLastName(lastName)),
    onGetRsvpInfo: (guestId) => dispatch(getRsvpInfo(guestId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
