import React from 'react';
import _ from 'lodash';
import produce from 'immer';
import { useSelector, useDispatch } from 'react-redux';
import { NUMERIC_KEYPAD } from '../redux/constants';
import { getTickets, getTicketSelected } from '../redux/reducers';
import { ticketsState, ticketsSave } from '../redux/actions';

const NumericKeypad = () => {
  const tickets = useSelector((state) => getTickets(state));
  const ticketSelected = useSelector((state) => getTicketSelected(state));
  const dispatch = useDispatch();
  const handleClick = (value) => {
    const activeTicketIndex = _.findIndex(tickets, function (o) {
      return o.name === ticketSelected.nameTicket;
    });
    const nextState = produce(tickets, (draftState) => {
      draftState[activeTicketIndex].items[ticketSelected.item] = value;
    });
    dispatch(ticketsState(nextState));
    dispatch(ticketsSave());
  };
  return (
    <div className="numeric-keypad">
      {NUMERIC_KEYPAD.map((element, i) => {
        // console.log(element);
        return (
          <div onClick={() => handleClick(element)} className="numeric-keypad__item" key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export { NumericKeypad };
