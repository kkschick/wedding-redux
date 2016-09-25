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
                   guestResults={this.props.guestResults}
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
    guestResults: state.rsvpReducer.guestResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetGuestsByName: (firstName, lastName) => dispatch(getGuestsByName(firstName, lastName)),
    onGetRsvpInfo: (guestId) => dispatch(getRsvpInfo(guestId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
