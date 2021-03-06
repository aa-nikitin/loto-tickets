import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { ticketAdd, ticketDel, ticketItemSelected, ticketsState } from '../actions';
import { ticketTemplate } from '../constants';

const list = handleActions(
  {
    [ticketAdd]: (state, { payload }) => [
      ...state,
      { name: payload, items: [...ticketTemplate.items] }
    ],
    [ticketDel]: (state, { payload }) =>
      [...state].filter((item) => {
        // console.log(item);
        return item.name !== payload;
      }),
    // [ticketsSave]: (_state, { payload }) => payload,
    // [ticketsOpen]: (_state, { payload }) => payload,
    [ticketsState]: (_state, { payload }) => payload
  },
  []
);

const itemSelected = handleActions(
  {
    [ticketItemSelected]: (_state, { payload }) => payload
  },
  { item: null, nameTicket: null }
);

export const getTickets = (state) => state.tickets.list;
export const getTicketSelected = (state) => state.tickets.itemSelected;

export const getTicketsSelector = createSelector(getTickets, (items) =>
  items.map((element, i) => {
    const numbersOfTicket = element.items.filter((elem, i) => {
      return elem !== null;
    });

    // const countTicket =
    return { ...element, numbersOfTicket };
  })
);

export default combineReducers({ list, itemSelected });
// export default tickets;
