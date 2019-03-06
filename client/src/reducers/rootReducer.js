import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { emailSubscription } from './emailSubscription';

export default combineReducers({
  form: formReducer,
  email: emailSubscription
});
