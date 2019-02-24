import axios from "axios";

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
      dispatch({
        type: "FETCH_RESPONSES_FAIL",
        error:err
      });
    }
  };
}

export const resetResponses = () => {
  return {
    type: "RESET_RESPONSES"
  };
};

