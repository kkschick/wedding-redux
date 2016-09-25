import React from 'react';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';

import { getGuestsByName, getRsvpInfo } from '../actions/rsvpActions';

class SearchBoxContainer extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <SearchBox searchResults={this.props.searchResults}
                   errorMessage={this.props.errorMessage}
                   partyResults={this.props.partyResults}
                   getGuestsByName={(firstName, lastName) => this.props.onGetGuestsByName(firstName, lastName)}
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
    onGetGuestsByName: (firstName, lastName) => dispatch(getGuestsByName(firstName, lastName)),
    onGetRsvpInfo: (guestId) => dispatch(getRsvpInfo(guestId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
