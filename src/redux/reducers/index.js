import { combineReducers } from 'redux';
import tickets from './tickets.js';
import keypad from './keypad.js';

const rootReducers = combineReducers({ tickets, keypad });

export * from './tickets.js';
export * from './keypad.js';
export default rootReducers;
