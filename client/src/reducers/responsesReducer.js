// Search Reducer
const initialState = {
  form: null,
  error: null
};
export function responsesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_RESPONSES_SUCCESS":
      return {
        ...state,
        form: action.data.form,
        error: null
      };
    case "FETCH_RESPONSES_FAIL":
      console.log(action.error.message);
      return {
        ...state,
        error: action.error.message
      };
    default:
      return state;
  }
}
