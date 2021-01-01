import React from 'react';

import { AddTicket } from '../components/AddTicket';
import { NumericKeypad } from '../components/NumericKeypad';

const TicketsEditor = () => {
  return (
    <div className="tickets-editor">
      <div className="tickets-editor__left">
        <AddTicket />
      </div>
      <div className="tickets-editor__right">
        <NumericKeypad />
      </div>
    </div>
  );
};

export { TicketsEditor };
