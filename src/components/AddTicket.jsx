import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ticketAdd, ticketDel, ticketsSave, ticketsOpen } from '../redux/actions';
import { Ticket } from './Ticket';

const AddTicket = () => {
  const [nameTicket, setNameTicket] = React.useState('');
  const tickets = useSelector(({ tickets }) => tickets);
  //   console.log(tickets);
  const dispatch = useDispatch();
  const addTicket = () => {
    if (nameTicket) {
      dispatch(ticketAdd(nameTicket));
      dispatch(ticketsSave());
      setNameTicket('');
      // localStorage.setItem('test', 1);
    }
  };
  const delTicket = (name) => {
    dispatch(ticketDel(name));
    dispatch(ticketsSave());
  };
  const changeNameTicket = ({ target }) => {
    setNameTicket(target.value);
  };
  return (
    <div>
      <input onChange={changeNameTicket} value={nameTicket} />
      <button onClick={addTicket}>Добавить билет</button>
      <div className="tickets">
        {/* <div className="tickets__name">{element.name}</div> */}
        {tickets.map((element, i) => {
          //   console.log(element.name);
          return (
            <div className="tickets__item" key={`${element.name}-${i}`}>
              <div className="tickets__head">
                <div className="tickets__name">{element.name}</div>
                <button className="tickets__delete" onClick={() => delTicket(element.name)}>
                  Удалить
                </button>
              </div>

              <div className="tickets__one" key={element.name}>
                <Ticket items={element.items} actives={element.actives} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AddTicket };
