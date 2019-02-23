import axios from 'axios';
import { SubmissionError } from 'redux-form';

import formValues from 'redux-form/lib/formValues';
import {
  FETCH_USER
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};


