import { handleActions } from 'redux-actions';
// import { combineReducers } from "redux";
import { ticketAdd, ticketDel, ticketsSave, ticketsOpen, ticketsState } from '../actions';
import { ticketTemplate } from '../constants';

const tickets = handleActions(
  {
    [ticketAdd]: (state, { payload }) => [
      ...state,
      { name: payload, actives: [...ticketTemplate.actives], items: [...ticketTemplate.items] }
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

export const getTickets = (state) => state.tickets;

// export default combineReducers({ items });
export default tickets;
