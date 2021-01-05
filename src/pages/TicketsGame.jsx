import React from 'react';
// import produce from 'immer';
// import { useSelector, useDispatch } from 'react-redux';

import { Tickets } from '../components/Tickets';
import { GameKeypad } from '../components/GameKeypad';
// import { getTickets } from '../redux/reducers';
// import { keypadChangeList } from '../redux/actions';

const TicketsGame = () => {
  // const dispatch = useDispatch();
  // const [valueNumber, setValueNumber] = React.useState(0);
  // const tickets = useSelector((state) => getTickets(state));

  // const handleKeypad = (value) => {
  //   // const value = Number(valueNumber);
  //   const nextState = produce(tickets, (draftState) => {
  //     draftState.forEach((element, iTickets) =>
  //       element.items.forEach((item, iTicket) =>
  //         item === value ? (draftState[iTickets].actives[iTicket] = true) : null
  //       )
  //     );
  //   });
  //   console.log(nextState);
  //   dispatch(ticketsState(nextState));
  //   dispatch(ticketsSave());
  // };
  return (
    <div className="tickets-editor">
      <div className="tickets-editor__left">
        <Tickets />
      </div>
      <div className="tickets-editor__right">
        <GameKeypad /*onKeypad={handleKeypad}*/ />
      </div>
    </div>
  );
};

export { TicketsGame };
