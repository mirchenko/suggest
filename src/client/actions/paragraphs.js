import axios from 'axios';

import {
  ROOT_URL,
  RECEIVE_PARAGRAPHS,
  REQUEST_PARAGRAPHS
} from './types';

export const fetchParagraphs = q => dispatch => {
  dispatch({ type: REQUEST_PARAGRAPHS });
  return axios.get(`${ROOT_URL}/paragraphs${q}`)
    .then(res => dispatch({ type: RECEIVE_PARAGRAPHS, payload: res.data }))
    .catch(err => console.log(err));
};