import axios from "axios";
import { SubmissionError } from "redux-form";

import { FETCH_USER,  RESET_LINK_MESSAGE,REGISTRATION_FAILED } from "./types";

export function login(args) {
 
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      return axios
        .post("/auth/login", {
          ...args
        })
        .then(response => {
          dispatch({
            type: FETCH_USER,
            payload: response.data
          });
        })
        .catch(error => {
          throw new SubmissionError({
            _error: error.response.data
          });
        });

      // Update payload in reducer on success
    } catch (err) {
      // Update error in reducer on failure
      // dispatch({
      //   type: 'FETCH_SEARCH_FAILURE',
      // error: err
      //  });
    }
  };
}

export function register(args) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      return axios
        .post("/auth/register", {
          ...args
        })
        .then(response => {
          dispatch({
            type: FETCH_USER,
            payload: response.data
          });
        })
        .catch(error => {
          throw new SubmissionError({
            _error: error.response.data
          });
        });
    } catch (err) {
      // Update error in reducer on failure
      // dispatch({
      //   type: 'FETCH_SEARCH_FAILURE',
      // error: err
      //  });
    }
  };
}

export function forgotPassword(args) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      return axios
        .post("/auth/forgotPassword", {
          ...args
        })
        .then(response => {
          dispatch({
            type: RESET_LINK_MESSAGE,
            payload: response.data
          });
        })
        .catch(error => {
          throw new SubmissionError({
            _error: error.response.data
          });
        });
    } catch (err) {
      // Update error in reducer on failure
      // dispatch({
      //   type: 'FETCH_SEARCH_FAILURE',
      // error: err
      //  });
    }
  };
}

export const clearResetMessage = () => {
  return {
    type: "CLEAR_RESET_SUCCESS"
  };
};

