import { createActions } from 'redux-actions';

const {
  keypad: { add: keypadAdd, changelist: keypadChangeList, change: keypadChange, state: keypadState }
} = createActions(
  {
    KEYPAD: {
      ADD: null,
      CHANGELIST: null,
      CHANGE: null,
      STATE: null
    }
  },
  { namespace: '_' }
);

export { keypadAdd, keypadChangeList, keypadChange, keypadState };
