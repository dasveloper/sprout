// Search Reducer
const initialState = {
  lists: [],
  error: null,
  loading: true
};
export function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LISTS_SUCCESS":
      return {
        ...state,
        lists: action.data.lists,
        loading: false,
        error: null
      };
    case "FETCH_LISTS_FAIL":
      return {
        ...state,
        error: action.data.lists,
        loading: false
      };
    default:
      return state;
  }
}
