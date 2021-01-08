import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import _ from 'lodash';
import { keypadAdd, keypadChange, keypadState, keypadChangeList } from '../actions';

const list = handleActions(
  {
    [keypadAdd]: (state, { payload }) =>
      payload !== null && _.indexOf(state, payload) < 0 ? [...state, payload] : [...state],
    [keypadState]: (_state, { payload }) => payload,
    [keypadChangeList]: (_state, { payload }) => payload
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
