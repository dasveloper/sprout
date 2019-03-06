import axios from "axios";
import { SubmissionError } from "redux-form";

import { SET_SUCCESS_MESSAGE } from "./types";


export function subscribe(args) {
  console.log(args);

  return async dispatch => {

    try {
      return axios
        .post("/email/subscribe", {
          ...args
        })
        .then(response => {
          dispatch({
            type: SET_SUCCESS_MESSAGE,
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error.response);

          throw new SubmissionError({
            _error: error.response.data
          });
        });
    } catch (err) {
      console.log(err.response);

      throw new SubmissionError({
        _error: err.response.data
      });
    }
  };
}

