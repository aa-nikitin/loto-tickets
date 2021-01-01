import React from 'react';

const Ticket = ({ items, actives }) => {
  // console.log(items);
  return (
    <div className="ticket">
      {items.map((element, i) => {
        // console.log(element, i);
        return (
          <div className={`ticket__item ${actives[i] ? 'active' : ''}`} key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export { Ticket };
