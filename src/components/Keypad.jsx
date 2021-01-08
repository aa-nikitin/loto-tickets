import React from 'react';
import _ from 'lodash';
import produce from 'immer';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getKeypad, getTickets, getTicketSelected } from '../redux/reducers';
import { keypadAdd, ticketsState, ticketsSave, keypadChangeList } from '../redux/actions';
import { NUMERIC_KEYPAD } from '../redux/constants';

const Keypad = ({ editor }) => {
  const keypad = useSelector((state) => getKeypad(state));
  const tickets = useSelector((state) => getTickets(state));
  const ticketSelected = useSelector((state) => getTicketSelected(state));
  const dispatch = useDispatch();
  const activeTicketIndex = _.findIndex(
    tickets,
    (ticket) => ticket.name === ticketSelected.nameTicket
  );
  const itemsOfActiveTicket = tickets[activeTicketIndex] ? tickets[activeTicketIndex].items : [];
  const handleGameKeypad = (value) => {
    dispatch(keypadAdd(value));
    dispatch(ticketsSave());
  };

  const handleEditorKeypad = (value) => {
    if (activeTicketIndex >= 0) {
      const similarTicketsItems = _.indexOf(itemsOfActiveTicket, value);

      if (similarTicketsItems <= 0) {
        const nextState = produce(tickets, (draftState) => {
          draftState[activeTicketIndex].items[ticketSelected.item] = value;
        });
        dispatch(ticketsState(nextState));
        dispatch(ticketsSave());
      }
    }
  };

  const handleClick = (value) => {
    if (!editor) handleGameKeypad(value);
    else handleEditorKeypad(value);
  };

  const handleClear = () => {
    dispatch(keypadChangeList([]));
    dispatch(ticketsSave());
  };

  return (
    <div className={`numeric-keypad${editor ? ' numeric-keypad--editor' : ''}`}>
      <div className="numeric-keypad__wrap">
        {NUMERIC_KEYPAD.map((element, i) => {
          const elementWithouNull = element !== null ? element : -1;
          const activeNumber = !editor
            ? _.indexOf(keypad, element)
            : _.indexOf(itemsOfActiveTicket, elementWithouNull);

          return (
            <div
              onClick={() => handleClick(element)}
              className={`numeric-keypad__item ${activeNumber >= 0 ? 'active' : ''}`}
              key={i}>
              {element}
            </div>
          );
        })}
      </div>
      {!editor ? (
        <div className="numeric-keypad__button-box">
          <button className="numeric-keypad__button button" onClick={handleClear}>
            Очистить
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

Keypad.propTypes = {
  editor: PropTypes.bool
};
Keypad.defaultProps = { editor: false };

export { Keypad };
