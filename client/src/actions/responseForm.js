import axios from "axios";

export function submitResponse(args) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      axios
        .post("/forms/respond", {
          ...args
        })
        .then(response => {
          dispatch({
            type: "RESPOND_SUCCESS",
            data: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: "RESPOND_FAIL",
            error: err
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
export function fetchFormDetails(formId) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      axios
        .get("/forms/get", {
          params: {
            formId
          }
        })
        .then(response => {
          dispatch({
            type: "FETCH_FORM_SUCCESS",
            data: response.data
          });
        })
        .catch(response => {
          dispatch({
            type: "FETCH_FORM_FAIL",
            error: response.error
          });
        });

      // Update payload in reducer on success
    } catch (err) {
      dispatch({
        type: "FETCH_FORM_FAIL",
        error: err
      });
    }
  };
}
