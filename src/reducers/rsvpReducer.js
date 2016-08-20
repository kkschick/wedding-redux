import * as types from '../actions/actionTypes';

function rsvpReducer(state = {searchResults: [], partyResults: [], errorMessage: ''}, action) {
  switch (action.type) {
    case types.GUEST_SEARCH_SUCCESS:
      let errorMsg;
      if (action.data.length === 0) {
        errorMsg = "Hmm, we can't find you!";
      }
      return {
        ...state,
        searchResults: [ ...action.data ],
        errorMessage: errorMsg
      };
    case types.GET_RSVP_SUCCESS:
      return {
        ...state,
        partyResults: [ ...action.data ]
      }
    case types.GUEST_SEARCH_FAILURE:
    case types.GET_RSVP_FAILURE:
      return {
        ...state,
        errorMessage: action.error
      };
    case types.GUEST_SEARCH_REQUEST:
    case types.GET_RSVP_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default rsvpReducer;
