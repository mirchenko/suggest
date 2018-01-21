import axios from 'axios';
import {
  ROOT_URL,
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  DELETE_ENTRY,
  APPROVE_ENTRY
} from "./types";


export const fetchEntries = q => dispatch => {
  dispatch({ type: REQUEST_ENTRIES });
  return axios.get(`${ROOT_URL}/entries${q}`)
    .then(res => dispatch({ type: RECEIVE_ENTRIES, payload: res.data }))
    .catch(e => console.log(e));
};

export const postEntry = data => dispatch => axios.post(`${ROOT_URL}/entries`, data);

export const patchEntry = (id, data) => dispatch => axios.patch(`${ROOT_URL}/entries/${id}`, data)
  .then(res => dispatch({ type: APPROVE_ENTRY, payload: res.data }));

export const deleteEntry = id => dispatch => axios.delete(`${ROOT_URL}/entries/${id}`)
  .then(res => dispatch({ type: DELETE_ENTRY, payload: id }));