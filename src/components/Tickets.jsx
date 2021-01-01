import React from 'react';
import produce from 'immer';

import { Ticket } from './Ticket';

const Tickets = () => {
  const [tickets, setTickets] = React.useState([
    { actives: [false, false, false, false, false], items: [23, 22, null, 1, null] },
    { actives: [false, false, false, false, false], items: [null, null, 4, null, 22] }
  ]);
  const [valueNumber, setValueNumber] = React.useState(0);
  const handleNumber = () => {
    const value = Number(valueNumber);
    const nextState = produce(tickets, (draftState) => {
      draftState.forEach((element, iTickets) =>
        element.items.forEach((item, iTicket) =>
          item === value ? (draftState[iTickets].actives[iTicket] = true) : null
        )
      );
    });
    setTickets(nextState);
  };
  const changeNumber = (element) => {
    const valueNumber = Number(element.target.value) ? element.target.value : 0;
    setValueNumber(valueNumber);
  };
  return (
    <div className="tickets">
      {tickets.map((element, i) => {
        // console.log(element);
        return <Ticket items={element.items} actives={element.actives} key={i} />;
      })}
      <input onChange={changeNumber} value={valueNumber} />
      <button onClick={handleNumber}>asd</button>
    </div>
  );
};

export { Tickets };
