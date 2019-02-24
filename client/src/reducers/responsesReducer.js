// Search Reducer
const initialState = {
  form: null,
  error: null,
  loading: true
};
export function responsesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_RESPONSES_SUCCESS":
      return {
        ...state,
        form: action.data.form,
        error: null,
        loading: false
      };
    case "FETCH_RESPONSES_FAIL":
      return {
        ...state,
        error: action.error.message,
        loading: false
      };
    case "RESET_RESPONSES":
      return {
        ...initialState
      };
    default:
      return state;
  }
}
