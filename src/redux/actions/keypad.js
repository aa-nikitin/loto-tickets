import { createActions } from 'redux-actions';

const {
  keypad: { add: keypadAdd, change: keypadChange }
} = createActions(
  {
    KEYPAD: {
      ADD: null,
      CHANGE: null
    }
  },
  { namespace: '_' }
);

export { keypadAdd, keypadChange };
