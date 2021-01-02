import { select, takeLatest, put /*call,  */ } from 'redux-saga/effects';
// import { getData } from "../api";
import { getTickets, getKeypad } from '../reducers';
import { TICKETS_STORAGE_KEY } from '../constants';
import { ticketsSave, ticketsOpen, ticketsState, keypadState } from '../actions';

// export function* addTicket() {
//   try {
//     // const comments = yield call(getData, "/comments/");
//     // if (comments) yield put(itemLoad(comments));
//     // yield put(ticketAdd('comments'));
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* saveTickets() {
  try {
    // const tickets = yield JSON.stringify(select(getTickets));
    const tickets = yield select(getTickets);
    const keypad = yield select(getKeypad);
    const saveString = yield JSON.stringify({
      tickets: tickets,
      keypad: keypad
    });
    yield localStorage.setItem(TICKETS_STORAGE_KEY, saveString);
  } catch (error) {}
}

export function* openTickets() {
  try {
    // const tickets = yield JSON.parse(localStorage.getItem(TICKETS_STORAGE_KEY));
    const openString = yield localStorage.getItem(TICKETS_STORAGE_KEY);
    const openJson = yield openString ? JSON.parse(openString) : [];

    yield put(ticketsState(openJson.tickets));
    yield put(keypadState(openJson.keypad));
  } catch (error) {}
}

export function* ticketsWatch() {
  yield takeLatest(ticketsSave, saveTickets);
  yield takeLatest(ticketsOpen, openTickets);
}
