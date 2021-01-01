import { createActions } from 'redux-actions';

const {
  ticket: { add: ticketAdd, del: ticketDel }
} = createActions(
  {
    TICKET: {
      ADD: null,
      DEL: null
    }
  },
  { namespace: '_' }
);

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

export { ticketAdd, ticketDel, ticketsSave, ticketsOpen, ticketsState };
