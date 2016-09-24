import React from 'react';
import { connect } from 'react-redux';

import SearchResults from './SearchResults';

class SearchResultsContainer extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <SearchResults partyResults={this.props.partyResults} />
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
    onGetGuestsByLastName: (lastName) => dispatch(getGuestsByLastName(lastName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
