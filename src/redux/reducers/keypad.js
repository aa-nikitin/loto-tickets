import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { keypadAdd, keypadChange } from '../actions';

const list = handleActions(
  {
    [keypadAdd]: (state, { payload }) => [...state, payload]
  },
  []
);

const selected = handleActions(
  {
    [keypadChange]: (_state, { payload }) => payload
  },
  0
);

export const getKeypad = (state) => state.keypad.list;
export const getKeypadSelected = (state) => state.keypad.selected;

export default combineReducers({ list, selected });
// export default tickets;
