import _ from 'lodash';

import * as types from '../actions/actionTypes';

const initialState = {
  guestRsvp: null,
  gotRsvp: false,
  errorMessage: '',
  isLoading: false,
  sentRsvp: false
};

function rsvpReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RSVP_INFO_REQUEST:
    case types.SEND_RSVP_REQUEST:
      return {
        ...state,
        errorMessage: '',
        isLoading: true
      }
    case types.GET_RSVP_INFO_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        guestRsvp: _.first(action.data),
        gotRsvp: true,
        isLoading: false
      }
    case types.GET_RSVP_INFO_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        gotRsvp: false,
        isLoading: false
      };
    case types.SEND_RSVP_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isLoading: false,
        sentRsvp: true
      }
    case types.SEND_RSVP_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isLoading: false,
        sentRsvp: false
      }
    case types.RESET_RSVP:
      return {
        ...state,
        errorMessage: '',
        gotRsvp: false,
        sentRsvp: false
      }
    default:
      return state;
  }
}

export default rsvpReducer;
