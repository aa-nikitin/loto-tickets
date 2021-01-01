import React from 'react';
import produce from 'immer';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../redux/reducers';
import { Ticket } from './Ticket';
import { ticketsState, ticketsSave } from '../redux/actions';

const Tickets = () => {
  const [valueNumber, setValueNumber] = React.useState(0);
  const tickets = useSelector((state) => getTickets(state));
  //   console.log(tickets);
  const dispatch = useDispatch();
  const handleNumber = () => {
    const value = Number(valueNumber);
    const nextState = produce(tickets, (draftState) => {
      draftState.forEach((element, iTickets) =>
        element.items.forEach((item, iTicket) =>
          item === value ? (draftState[iTickets].actives[iTicket] = true) : null
        )
      );
    });
    dispatch(ticketsState(nextState));
    dispatch(ticketsSave());
  };
  const changeNumber = (element) => {
    const valueNumber = Number(element.target.value) ? element.target.value : 0;
    setValueNumber(valueNumber);
  };
  return (
    <div>
      <input onChange={changeNumber} value={valueNumber} />
      <button onClick={handleNumber}>asd</button>
      <div className="tickets">
        {/* <div className="tickets__name">{element.name}</div> */}
        {tickets.map((element, i) => {
          //   console.log(element.name);
          return (
            <div className="tickets__item" key={`${element.name}-${i}`}>
              <div className="tickets__head">
                <div className="tickets__name">{element.name}</div>
              </div>

              <div className="tickets__one" key={element.name}>
                <Ticket nameTicket={element.name} items={element.items} actives={element.actives} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tickets };
