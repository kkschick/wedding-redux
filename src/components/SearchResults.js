import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import _ from 'lodash';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.partyResults);
    return (
      <div className="form-container">
        Yo
        {this.props.partyResults}
      </div>
    );
  }
}
