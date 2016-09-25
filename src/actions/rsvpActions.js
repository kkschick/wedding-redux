import * as types from './actionTypes';

export function getGuestsByName(firstName, lastName) {
  return function(dispatch) {
    dispatch({type: types.GUEST_SEARCH_REQUEST});
    fetch(`/api/search/${firstName}&${lastName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch({type: types.GUEST_SEARCH_FAILURE, error: "Whoops! We couldn't get your information. Please try again."});
      }
    }).then((responseJson) => {
      dispatch({type: types.GUEST_SEARCH_SUCCESS, data: responseJson});
    }).catch((error) => {
      dispatch({type: types.GUEST_SEARCH_FAILURE, error: "Whoops! We couldn't get your information. Please try again."});
    });
  };
}

export function getRsvpInfo(guestId) {
  return function(dispatch) {
    dispatch({type: types.GET_RSVP_REQUEST});
    fetch(`/api/guest/${guestId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch({type: types.GET_RSVP_FAILURE, error: 'Failed to retrieve RSVP information. Please try again.'});
      }
    }).then((responseJson) => {
      dispatch({type: types.GET_RSVP_SUCCESS, data: responseJson});
    }).catch((error) => {
      dispatch({type: types.GET_RSVP_FAILURE, error: 'Failed to retrieve RSVP information. Please try again.'});
    });
  };
}
