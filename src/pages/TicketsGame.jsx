import React from 'react';

import { Tickets } from '../components/Tickets';
import { GameKeypad } from '../components/GameKeypad';

const TicketsGame = () => {
  return (
    <div className="tickets-editor">
      <div className="tickets-editor__left">
        <Tickets />
      </div>
      <div className="tickets-editor__right">
        <GameKeypad />
      </div>
    </div>
  );
};

export { TicketsGame };
