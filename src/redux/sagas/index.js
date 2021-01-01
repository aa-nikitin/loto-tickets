import { fork } from 'redux-saga/effects';

// import { addTicket } from './tickets';
import { ticketsWatch } from './tickets';

export function* sagas() {
  yield fork(ticketsWatch);
}
