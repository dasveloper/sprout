// Search Reducer
const initialState = {
  forms: []
};
export function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_FORMS_SUCCESS":
      return {
        ...state,
        forms: action.data.forms
      };
    default:
      return state;
  }
}
