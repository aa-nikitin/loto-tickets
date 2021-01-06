import React from 'react';
import _ from 'lodash';
import produce from 'immer';
import { useSelector, useDispatch } from 'react-redux';
import { getKeypad, getTickets, getTicketSelected } from '../redux/reducers';
import { keypadAdd, ticketsState, ticketsSave, keypadChangeList } from '../redux/actions';
import { NUMERIC_KEYPAD } from '../redux/constants';

const Keypad = ({ editor }) => {
  const keypad = useSelector((state) => getKeypad(state));
  const tickets = useSelector((state) => getTickets(state));
  const ticketSelected = useSelector((state) => getTicketSelected(state));
  const dispatch = useDispatch();
  const handleGameKeypad = (value) => {
    dispatch(keypadAdd(value));
    dispatch(ticketsSave());
  };

  const handleEditorKeypad = (value) => {
    const activeTicketIndex = _.findIndex(tickets, function (o) {
      return o.name === ticketSelected.nameTicket;
    });

    if (activeTicketIndex >= 0) {
      const nextState = produce(tickets, (draftState) => {
        draftState[activeTicketIndex].items[ticketSelected.item] = value;
      });
      dispatch(ticketsState(nextState));
      dispatch(ticketsSave());
    }
  };

  const handleClick = (value) => {
    if (!editor) handleGameKeypad(value);
    else handleEditorKeypad(value);
  };

  const handleClear = () => dispatch(keypadChangeList([]));
  return (
    <div className="numeric-keypad">
      {NUMERIC_KEYPAD.map((element, i) => {
        const activeNumber = !editor ? _.indexOf(keypad, element) : -1;

        return (
          <div
            onClick={() => handleClick(element)}
            className={`numeric-keypad__item ${activeNumber >= 0 ? 'active' : ''}`}
            key={i}>
            {element}
          </div>
        );
      })}
      {!editor ? <button onClick={handleClear}>Очистить</button> : ''}
    </div>
  );
};

export { Keypad };
