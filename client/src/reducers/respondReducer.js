// Search Reducer
const initialState = {
    form: null
  };
  export function respondReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_FORM_SUCCESS':
        return {
          ...state,
          form: action.data.message
        };
        case 'CREATE_CONTACT_LIST_SUCCESS':
        return {
          ...state,
          contactListSubmitted: true,
          contactListId: action.data
        };
      default:
        return state;
    }
  }
  