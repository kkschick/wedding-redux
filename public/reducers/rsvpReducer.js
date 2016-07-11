import * as types from '../actions/actionTypes';

function rsvpReducer(state = {currentGuest: null, searchResults: [], isLoading: false, errorMessage: ''}, action) {
  switch (action.type) {
    case types.GUEST_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: [ ...action.data ],
        isLoading: false,
        errorMessage: ''
      };
    case types.GUEST_SEARCH_FAILURE:
    case types.GET_RSVP_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error
      };
    case types.GUEST_SEARCH_REQUEST:
    case types.GET_RSVP_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}

export default rsvpReducer;
