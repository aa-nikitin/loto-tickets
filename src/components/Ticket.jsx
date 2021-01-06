import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { ticketItemSelected } from '../redux/actions';
import { getTicketSelected, getKeypad } from '../redux/reducers';

const Ticket = ({ items, nameTicket, permissionToEdit }) => {
  const keypad = useSelector((state) => getKeypad(state));
  const ticketSelected = useSelector((state) => getTicketSelected(state));
  const dispatch = useDispatch();
  const handleClickItem = (item) => {
    dispatch(ticketItemSelected({ item, nameTicket }));
    // console.log(item);
  };
  const typeTicketStyle = permissionToEdit ? ' ticket--editor' : '';
  return (
    <div className={`ticket${typeTicketStyle}`}>
      {items.map((element, i) => {
        const activeNumberTicket =
          !permissionToEdit && _.indexOf(keypad, element) >= 0 ? ' active' : '';
        const selectedNumberTicket =
          i === ticketSelected.item && nameTicket === ticketSelected.nameTicket && permissionToEdit
            ? ' selected'
            : '';
        const classFieldBorder = i >= 18 && i <= 26 ? ' ticket--border' : '';

        return (
          <div
            onClick={() => handleClickItem(i)}
            className={`ticket__item${activeNumberTicket}${selectedNumberTicket}${classFieldBorder}`}
            key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export { Ticket };
