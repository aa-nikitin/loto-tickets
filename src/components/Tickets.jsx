import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import produce from 'immer';
import { ticketAdd, ticketDel, ticketsSave } from '../redux/actions';
import { getTickets } from '../redux/reducers';
import { Ticket } from './Ticket';

const Tickets = ({ editor }) => {
  const [nameTicket, setNameTicket] = React.useState('');
  const tickets = useSelector((state) => getTickets(state));
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
      {editor ? (
        <Fragment>
          <input onChange={changeNameTicket} value={nameTicket} />
          <button onClick={addTicket}>Добавить билет</button>
        </Fragment>
      ) : (
        ''
      )}

      <div className="tickets">
        {tickets.map((element, i) => {
          return (
            <div className="tickets__item" key={`${element.name}-${i}`}>
              <div className="tickets__head">
                <div className="tickets__name">{element.name}</div>
                {editor ? (
                  <button className="tickets__delete" onClick={() => delTicket(element.name)}>
                    Удалить
                  </button>
                ) : (
                  ''
                )}
              </div>

              <div className="tickets__one" key={element.name}>
                <Ticket permissionToEdit={editor} nameTicket={element.name} items={element.items} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tickets };
