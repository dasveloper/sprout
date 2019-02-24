import axios from "axios";

export function fetchLists() {
  return async dispatch => {
    try {
      axios
        .get("/forms/all")
        .then(response => {
          dispatch({
            type: "FETCH_LISTS_SUCCESS",
            data: response.data
          });
        })
        .catch(response => {
          dispatch({
            type: "FETCH_LISTS_FAIL",
            error: response.error
          });
        });
    } catch (err) {
      dispatch({
        type: "FETCH_LISTS_FAIL",
        error: err
      });
    }
  };
}
