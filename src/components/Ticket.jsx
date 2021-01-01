import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ticketItemSelected } from '../redux/actions';
import { getTicketSelected } from '../redux/reducers';

const Ticket = ({ items, actives, nameTicket }) => {
  const ticketSelected = useSelector((state) => getTicketSelected(state));
  const dispatch = useDispatch();
  const handleClickItem = (item) => {
    dispatch(ticketItemSelected({ item, nameTicket }));
    // console.log(item);
  };
  return (
    <div className="ticket">
      {items.map((element, i) => {
        // console.log(element, i);
        return (
          <div
            onClick={() => handleClickItem(i)}
            className={`ticket__item ${actives[i] ? 'active' : ''} ${
              i === ticketSelected.item && nameTicket === ticketSelected.nameTicket
                ? 'selected'
                : ''
            }`}
            key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export { Ticket };
