
import {
  RECEIVE_PARAGRAPHS,
  REQUEST_PARAGRAPHS,
} from '../../actions/types';

const INITIAL_STATE = {
  data: [],
  page: {},
  isFetching: true,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_PARAGRAPHS: {
      return { ...state, isFetching: true, lastUpdate: Date.now() };
    }
    case RECEIVE_PARAGRAPHS: {
      const { payload: { data, page} } = action;
      return { ...state, isFetching: false, lastUpdate: Date.now(), data, page };
    }
    default: return state;
  }
};