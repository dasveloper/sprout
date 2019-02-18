import axios from "axios";

export function fetchForms() {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      axios
        .get("/forms/all")
        .then(response => {
            console.log(response);
          dispatch({
            type: "FETCH_FORMS_SUCCESS",
            data: response.data
          });
        })
        .catch(response => {
          dispatch({
            type: "FETCH_FORMS_FAIL",
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
