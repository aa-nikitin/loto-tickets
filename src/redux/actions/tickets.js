import { createActions } from 'redux-actions';

const {
  ticket: {
    add: ticketAdd,
    del: ticketDel,
    item: { selected: ticketItemSelected }
  }
} = createActions(
  {
    TICKET: {
      ADD: null,
      DEL: null,
      ITEM: {
        SELECTED: null
      }
    }
  },
  { namespace: '_' }
);

export { ticketAdd, ticketDel, ticketItemSelected };

const {
  tickets: { save: ticketsSave, open: ticketsOpen, state: ticketsState }
} = createActions(
  {
    TICKETS: {
      SAVE: null,
      OPEN: null,
      STATE: null
    }
  },
  { namespace: '_' }
);

export { ticketsSave, ticketsOpen, ticketsState };
