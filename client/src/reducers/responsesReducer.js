// Search Reducer
const initialState = {
    responses: []
  };
  export function responsesReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_RESPONSES_SUCCESS':
        return {
          ...state,
          responses: action.data.responses
        };
        case 'FETCH_RESPONSES_FAIL':
        return {
          ...state,
          contactListSubmitted: true,
          responses: []
        };
      default:
        return state;
    }
  }
  