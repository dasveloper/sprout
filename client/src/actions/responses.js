import axios from "axios";

export function submitResponse(args){
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
            type: "CREATE_CONTACT_LIST_SUCCESS",
            data: response.data
          });
        })
        .catch(response => {

          dispatch({
            type: "CREATE_CONTACT_LIST",
            error: response.error
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
export function fetchResponses(formId) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      axios
        .get("/forms/responses", {
          params: {
            formId
          }
        })
        .then(response => {
          dispatch({
            type: "FETCH_RESPONSES_SUCCESS",
            data: response.data
          });
        })
        
        .catch(error => {
          dispatch({
            type: "FETCH_RESPONSES_FAIL",
            error: error.response.data
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
