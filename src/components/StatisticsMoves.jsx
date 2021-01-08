import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { getKeypad, getTicketsSelector } from '../redux/reducers';

const StatisticsMoves = () => {
  const keypad = useSelector((state) => getKeypad(state));
  const tickets = useSelector((state) => getTicketsSelector(state));
  const keypadIsEmpty = _.isEmpty(keypad);
  const [hideMoves, setHideMoves] = React.useState(false);
  const showMoves = () => {
    setHideMoves(!hideMoves);
  };
  const MatchesTickets = (i) => {
    const matchResult = tickets.filter((ticket) => {
      return _.indexOf(ticket.items, keypad[i]) >= 0;
    });
    return matchResult.length;
  };
  return (
    !keypadIsEmpty && (
      <div className="statistics-moves">
        <button className="button" onClick={showMoves}>
          {hideMoves ? `Скрыть ходы` : `Показать ходы`}
        </button>
        {hideMoves && (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <th>Номер хода</th>
                <th>Число</th>
                <th>Совпадений в билетах</th>
              </tr>
              {keypad.map((element, i) => {
                return (
                  <tr key={`${element}-${i}`}>
                    <td>{i + 1}</td>
                    <td>{element}</td>
                    <td>{MatchesTickets(i)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    )
  );
};

export { StatisticsMoves };
