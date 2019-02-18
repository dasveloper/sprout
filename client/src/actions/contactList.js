import axios from "axios";

export function addContactListUser(args) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      // Update payload in reducer on success
      dispatch({
        type: "ADD_CONTACT_LIST_USER",
        newUser: args
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

export function createContactList(args) {
  return async dispatch => {
    // Initiate loading state
    // dispatch({
    // type: ADD_CONTACT_LIST_USER
    // });
    try {
      // Call the API
      // const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
      axios
        .post("/forms/create", {
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
