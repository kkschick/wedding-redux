import * as types from './actionTypes';
import { KEY } from './config';

export function getAllRsvpInfo() {
  return function(dispatch) {
    dispatch({type: types.GET_ALL_RSVPS_REQUEST});
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1mGvfiRothM5fxjSWmzNIveuIkmJ6r-jYqK23Su6hi1I/values/A1:K300?key=${KEY}&majorDimension=COLUMNS`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        dispatch({type: types.GET_ALL_RSVPS_FAILURE, error: "Whoops! We couldn't get your information. Please try again."});
      }
    }).then((responseJson) => {
      dispatch({type: types.GET_ALL_RSVPS_SUCCESS, data: responseJson});
    }).catch((error) => {
      dispatch({type: types.GET_ALL_RSVPS_FAILURE, error: "Whoops! We couldn't get your information. Please try again."});
    });
  };
}

export function getRsvpInfo(guestName) {
  return {
    type: types.GET_RSVP_INFO,
    data: {
      guestName: guestName
    }
  };
}

// export function getRsvpInfo(guestId) {
//   return function(dispatch) {
//     dispatch({type: types.GET_RSVP_REQUEST});
//     fetch(`/api/guest/${guestId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         dispatch({type: types.GET_RSVP_FAILURE, error: 'Failed to retrieve RSVP information. Please try again.'});
//       }
//     }).then((responseJson) => {
//       dispatch({type: types.GET_RSVP_SUCCESS, data: responseJson});
//     }).catch((error) => {
//       dispatch({type: types.GET_RSVP_FAILURE, error: 'Failed to retrieve RSVP information. Please try again.'});
//     });
//   };
// }
