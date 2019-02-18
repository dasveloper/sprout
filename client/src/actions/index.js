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



export const signupUser = (values, history) => async (dispatch) => {
  const { email, password, confirmPassword } = values;

  return axios
    .post('/auth/signup', {
      email,
      password,
      confirmPassword,
    })
    .then((response) => {
      history.push('/dashboard');
      dispatch({ type: FETCH_USER, payload: response.data });
    })
    .catch((error) => {
      throw new SubmissionError({
        _error: error.response.data,
      });
    });
};

export const loginUser = (values, history) => async (dispatch) => {
  const { email, password } = values;
  return axios
    .post('/auth/login', {
      email,
      password,
    })
    .then((response) => {
      dispatch({ type: FETCH_USER, payload: response.data });
      history.push('/dashboard');
    })
    .catch((error) => {
      throw new SubmissionError({
        _error: error.response.data,
      });
    });

  // if (res)
  // dispatch({ type: FETCH_USER, payload: res.data });
};
