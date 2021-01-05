import React from 'react';
// import produce from 'immer';
import { useSelector } from 'react-redux';
import { getTickets } from '../redux/reducers';
import { Ticket } from './Ticket';

const Tickets = () => {
  const tickets = useSelector((state) => getTickets(state));

  return (
    <div>
      <div className="tickets">
        {tickets.map((element, i) => {
          return (
            <div className="tickets__item" key={`${element.name}-${i}`}>
              <div className="tickets__head">
                <div className="tickets__name">{element.name}</div>
              </div>

              <div className="tickets__one" key={element.name}>
                <Ticket permissionToEdit={false} nameTicket={element.name} items={element.items} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tickets };
