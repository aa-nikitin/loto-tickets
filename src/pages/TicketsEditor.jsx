import React from 'react';

import { Tickets } from '../components/Tickets';
import { Keypad } from '../components/Keypad';

const TicketsEditor = () => {
  return (
    <div className="tickets-editor">
      <div className="tickets-editor__left">
        <Tickets editor={true} />
      </div>
      <div className="tickets-editor__right">
        <Keypad editor={true} />
      </div>
    </div>
  );
};

export { TicketsEditor };
