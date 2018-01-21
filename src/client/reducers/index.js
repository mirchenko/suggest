import { combineReducers } from 'redux';
import Paragraphs from './paragraphs';
import Entries from './entries';

export default combineReducers({
  paragraphs: Paragraphs,
  entries: Entries
});