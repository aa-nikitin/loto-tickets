import { select, takeLatest, put /*call,  */ } from 'redux-saga/effects';
// import { getData } from "../api";
import { getTickets } from '../reducers';
import { TICKETS_STORAGE_KEY } from '../constants';
import { ticketsSave, ticketsOpen, ticketsState } from '../actions';

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
    const ticketsA = yield JSON.stringify(tickets);
    // console.log('tickets');
    yield localStorage.setItem(TICKETS_STORAGE_KEY, ticketsA);
  } catch (error) {}
}

export function* openTickets() {
  try {
    // const tickets = yield JSON.parse(localStorage.getItem(TICKETS_STORAGE_KEY));
    const tickets = yield localStorage.getItem(TICKETS_STORAGE_KEY);
    const ticketsA = yield JSON.parse(tickets);
    console.log(ticketsA);
    yield put(ticketsState(ticketsA));
  } catch (error) {}
}

export function* ticketsWatch() {
  yield takeLatest(ticketsSave, saveTickets);
  yield takeLatest(ticketsOpen, openTickets);
}
