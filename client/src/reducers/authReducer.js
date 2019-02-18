import { FETCH_USER } from '../actions/types';
const initialState = {
  account: null
};
export function fetchUser(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
    return {
      ...state,
      account: action.payload || false
    };
    default:
      return state;
  }
}

