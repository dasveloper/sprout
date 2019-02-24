// Search Reducer
const initialState = {
  form: null,
  loading: true,
  respondSuccess: false
};
export function respondReducer(state = initialState, action) {
  switch (action.type) {
    case "RESPOND_SUCCESS":
      return {
        ...state,
        respondSuccess: true,
        loading: false

      };
    case "FETCH_FORM_SUCCESS":
      return {
        ...state,
        form: action.data.message,
        loading: false
      };
    case "FETCH_FORM_FAIL":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
