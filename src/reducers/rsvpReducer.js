import _ from 'lodash';

import * as types from '../actions/actionTypes';

function rsvpReducer(state = {allRsvps: [], currentGuest: null, guestRsvp: null, gotRsvp: false, errorMessage: ''}, action) {
  switch (action.type) {
    case types.GET_ALL_RSVPS_SUCCESS:
      return {
        ...state,
        allRsvps: [ ...action.data.values ]
      }
    // case types.GET_ALL_RSVPS_SUCCESS:
    //   let errorMsg;
    //   if (action.data.length === 0) {
    //     errorMsg = "Hmm, we can't find you!";
    //   }
    //   return {
    //     ...state,
    //     searchResults: [ ...action.data ],
    //     errorMessage: errorMsg
    //   };
    // case types.GET_RSVP_SUCCESS:
    //   return {
    //     ...state,
    //     guestResults: [ ...action.data ]
    //   }
    case types.GET_RSVP_INFO:
      let allRsvps = state.allRsvps,
          guestNames = _.first(allRsvps),
          guestName = action.data.guestName.replace(/\b\w/g, l => l.toUpperCase()),
          idx = _.findIndex(guestNames, item => item == guestName),
          guestRsvp;

      if (idx > -1) {
        guestRsvp = {
          name: allRsvps[0][idx],
          mealPreference: allRsvps[1][idx],
          dietaryRestrictions: allRsvps[2][idx],
          needsParking: allRsvps[3][idx],
          numParkingSpots: allRsvps[4][idx],
          isComingFri: allRsvps[5][idx],
          isComingPicnic: allRsvps[6][idx],
          isComingWedding: allRsvps[7][idx],
          isComingBrunch: allRsvps[8][idx],
          comments: allRsvps[9][idx]
        };
      }
      return {
        ...state,
        guestRsvp: guestRsvp,
        gotRsvp: true,
        currentGuest: guestName
      }
    case types.GET_ALL_RSVPS_FAILURE:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
}

export default rsvpReducer;
