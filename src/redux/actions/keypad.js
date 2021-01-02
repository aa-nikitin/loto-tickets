import { createActions } from 'redux-actions';

const {
  keypad: { add: keypadAdd, change: keypadChange, state: keypadState }
} = createActions(
  {
    KEYPAD: {
      ADD: null,
      CHANGE: null,
      STATE: null
    }
  },
  { namespace: '_' }
);

export { keypadAdd, keypadChange, keypadState };
