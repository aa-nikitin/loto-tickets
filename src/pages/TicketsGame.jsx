import React from 'react';

import { Tickets } from '../components/Tickets';
import { Keypad } from '../components/Keypad';

const TicketsGame = () => {
  return (
    <div className="tickets-editor">
      <div className="tickets-editor__left">
        <Tickets editor={false} />
      </div>
      <div className="tickets-editor__right">
        <Keypad editor={false} />
      </div>
    </div>
  );
};

export { TicketsGame };
