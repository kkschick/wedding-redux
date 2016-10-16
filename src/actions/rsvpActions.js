import fetch from 'isomorphic-fetch';

import * as types from './actionTypes';
import { KEY, SECRET } from '../config';

const BASE_API_URL = 'https://sheetsu.com/apis/v1.0/cd490b287c3c';

function requestRsvpInfo() {
  return {
    type: types.GET_RSVP_INFO_REQUEST
  }
}

function requestRsvpInfoSuccess(data) {
  return {
    type: types.GET_RSVP_INFO_SUCCESS,
    data
  }
}

function requestRsvpInfoFailure(error) {
  return {
    type: types.GET_RSVP_INFO_FAILURE,
    error
  }
}

function sendRsvp() {
  return {
    type: types.SEND_RSVP_REQUEST
  }
}

function sendRsvpSuccess() {
  return {
    type: types.SEND_RSVP_SUCCESS
  }
}

function sendRsvpFailure(error) {
  return {
    type: types.SEND_RSVP_FAILURE,
    error
  }
}

export function resetRsvpForm() {
  return {
    type: types.RESET_RSVP
  }
}

export function getRsvpInfo(guestName) {
  return function(dispatch) {
    dispatch(requestRsvpInfo());
    fetch(`${BASE_API_URL}/search?name=${guestName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(KEY + ':' + SECRET)
      }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((responseJson) => dispatch(requestRsvpInfoSuccess(responseJson)));
      } else {
        dispatch(requestRsvpInfoFailure("Whoops! We couldn't get your information. Please try again."));
      }
    });
  };
}

export function submitFormData(data) {
  data.name = data.name.toLowerCase();
  return function(dispatch) {
    dispatch(sendRsvp());
    return fetch(`${BASE_API_URL}/name/${data.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(KEY + ':' + SECRET)
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        return response.json().then((responseJson) => dispatch(sendRsvpSuccess(responseJson)));
      } else {
        dispatch(sendRsvpFailure("Whoops! We couldn't update your information. Please try again."));
      }
    });
  };
}
