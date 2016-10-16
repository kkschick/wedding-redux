import _ from 'lodash';

import * as types from '../actions/actionTypes';

const initialState = {
  guestRsvp: null,
  gotRsvp: false,
  errorMessage: ''
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
        errorMessage: action.error
      };
    default:
      return state;
  }
}

export default rsvpReducer;
