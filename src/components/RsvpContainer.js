import React from 'react';
import { connect } from 'react-redux';

import RsvpSearch from './RsvpSearch';

import { getRsvpInfo, resetRsvpForm, submitFormData } from '../actions/rsvpActions';

class RsvpContainer extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <RsvpSearch guestRsvp={this.props.guestRsvp}
                    gotRsvp={this.props.gotRsvp}
                    errorMessage={this.props.errorMessage}
                    sentRsvp={this.props.sentRsvp}
                    getRsvpInfo={(guestName) => this.props.onGetRsvpInfo(guestName)}
                    resetRsvp={() => this.props.onResetRsvp()}
                    onSubmit={(data) => this.props.onSubmit(data)}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    guestRsvp: state.rsvpReducer.guestRsvp,
    gotRsvp: state.rsvpReducer.gotRsvp,
    errorMessage: state.rsvpReducer.errorMessage,
    sentRsvp: state.rsvpReducer.sentRsvp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRsvpInfo: (guestName) => dispatch(getRsvpInfo(guestName)),
    onResetRsvp: () => dispatch(resetRsvpForm()),
    onSubmit: (data) => dispatch(submitFormData(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RsvpContainer);
