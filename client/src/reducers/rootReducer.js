import { combineReducers } from "redux";
import { fetchUser } from './authReducer';
import { contactListReducer } from './contactListReducer';
import { responsesReducer } from './responsesReducer';

import {  respondReducer } from './respondReducer';
import {  dashboardReducer } from './dashboardReducer';

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  user: fetchUser,
  form: formReducer,
  contactList: contactListReducer,
  respond: respondReducer,
  responsesPage: responsesReducer,
  dashboard: dashboardReducer
});
