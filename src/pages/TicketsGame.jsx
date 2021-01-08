import React from 'react';

import { Tickets } from '../components/Tickets';
import { Keypad } from '../components/Keypad';
import { StatisticsMoves } from '../components/StatisticsMoves';

const TicketsGame = () => {
  return (
    <div className="tickets-editor">
      <div className="tickets-editor__left">
        <Tickets editor={false} />
        <div className="tickets-editor__moves">
          <StatisticsMoves />
        </div>
      </div>
      <div className="tickets-editor__right">
        <Keypad editor={false} />
      </div>
    </div>
  );
};

export { TicketsGame };
