import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { ticketAdd, ticketDel, ticketsSave } from '../redux/actions';
import { getTicketsSelector, getKeypad } from '../redux/reducers';
import { Ticket } from './Ticket';

const Tickets = ({ editor }) => {
  const [nameTicket, setNameTicket] = React.useState('');
  const tickets = useSelector((state) => getTicketsSelector(state));
  const keypad = useSelector((state) => getKeypad(state));
  const dispatch = useDispatch();
  const addTicket = () => {
    const similarTickets = _.find(tickets, function (ticket) {
      return ticket.name === nameTicket;
    });
    if (nameTicket && !similarTickets) {
      dispatch(ticketAdd(nameTicket));
      dispatch(ticketsSave());
      setNameTicket('');
    }
  };
  const delTicket = (name) => {
    dispatch(ticketDel(name));
    dispatch(ticketsSave());
  };
  const changeNameTicket = ({ target }) => {
    setNameTicket(target.value);
  };

  const countRestNums = (i) => {
    const restCounts = tickets[i].numbersOfTicket.filter((elem) => _.indexOf(keypad, elem) < 0)
      .length;
    const textResult =
      restCounts > 0
        ? `Осталось чисел - ${restCounts} / ${tickets[i].numbersOfTicket.length}`
        : `Выйгрышный билет`;

    return textResult;
  };

  return (
    <Fragment>
      {editor ? (
        <div className="add-ticket">
          <input
            className="add-ticket__edit-text edit-text"
            onChange={changeNameTicket}
            value={nameTicket}
          />
          <button className="add-ticket__button button" onClick={addTicket}>
            Добавить билет
          </button>
        </div>
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
                  <button
                    className="tickets__delete"
                    title="Удалить"
                    onClick={() => delTicket(element.name)}></button>
                ) : (
                  ''
                )}
              </div>

              <div className="tickets__one" key={element.name}>
                <Ticket permissionToEdit={editor} nameTicket={element.name} items={element.items} />
              </div>
              {!editor ? <div className="tickets__stat">{countRestNums(i)}</div> : ''}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

Tickets.propTypes = {
  editor: PropTypes.bool
};
Tickets.defaultProps = { editor: false };

export { Tickets };
