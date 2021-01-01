import { combineReducers } from 'redux';
import tickets from './tickets.js';

const rootReducers = combineReducers({ tickets });

export * from './tickets.js';
export default rootReducers;
