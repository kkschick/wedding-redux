import _ from 'lodash';

import * as types from '../actions/actionTypes';

const initialState = {
  guestRsvp: null,
  gotRsvp: false,
  errorMessage: '',
  sentRsvp: false
};

function rsvpReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RSVP_INFO_SUCCESS:
      return {
        ...state,
        guestRsvp: _.first(action.data),
        gotRsvp: true
      }
    case types.GET_RSVP_INFO_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        gotRsvp: false
      };
    case types.SEND_RSVP_SUCCESS:
      return {
        ...state,
        sentRsvp: true
      }
    case types.SEND_RSVP_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        sentRsvp: false
      }
    case types.RESET_RSVP:
      return {
        ...state,
        gotRsvp: false,
        sentRsvp: false
      }
    default:
      return state;
  }
}

export default rsvpReducer;
