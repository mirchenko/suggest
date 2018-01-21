import findIndex from 'lodash/findIndex';
import {
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  DELETE_ENTRY,
  APPROVE_ENTRY
} from '../../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_ENTRIES: {
      return { ...state, isFetching: true, lastUpdate: Date.now };
    }
    case RECEIVE_ENTRIES: {
      return { ...state, isFetching: false, lastUpdate: Date.now, data: action.payload.data };
    }
    case DELETE_ENTRY: {
      const nextData = state.data.slice();
      const index = findIndex(nextData, item => item.id === action.payload);
      if(index >= 0) {
        nextData.splice(index, 1);
      }

      return { ...state, data: nextData };
    }
    case APPROVE_ENTRY: {
      const nextData = state.data.slice();
      const index = findIndex(nextData, item => item.id === action.payload.data.id);
      if(index >= 0) {
        nextData[index] = action.payload.data;
      }

      return { ...state, data: nextData };
    }
    default: return state;
  }
};