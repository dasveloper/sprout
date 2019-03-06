import {  SUBSCRIBE_EMAIL, SET_SUCCESS_MESSAGE} from "../actions/types";
const initialState = {
  message: null
};
export function emailSubscription(state = initialState, action) {
  switch (action.type) {
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        message: action.payload.message || false
      };
    default:
      return state;
  }
}
