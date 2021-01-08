import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { getKeypad } from '../redux/reducers';

const StatisticsMoves = () => {
  const keypad = useSelector((state) => getKeypad(state));
  const keypadIsEmpty = _.isEmpty(keypad);
  const [hideMoves, setHideMoves] = React.useState(false);
  const showMoves = () => {
    setHideMoves(!hideMoves);
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
              </tr>
              {keypad.map((element, i) => {
                return (
                  <tr key={`${element}-${i}`}>
                    <td>{i + 1}</td>
                    <td>{element}</td>
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
