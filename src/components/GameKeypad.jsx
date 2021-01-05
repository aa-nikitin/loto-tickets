import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getKeypad } from '../redux/reducers';
import { keypadAdd, ticketsSave, keypadChangeList } from '../redux/actions';
import { NUMERIC_KEYPAD } from '../redux/constants';

const GameKeypad = () => {
  const keypad = useSelector((state) => getKeypad(state));
  const dispatch = useDispatch();
  const handleClickKeypad = (value) => {
    dispatch(keypadAdd(value));
    dispatch(ticketsSave());
  };
  const handleClear = () => {
    console.log('asd');
    dispatch(keypadChangeList([]));
  };
  return (
    <div className="numeric-keypad">
      {NUMERIC_KEYPAD.map((element, i) => {
        const activeNumber = _.indexOf(keypad, element);

        return (
          <div
            onClick={() => handleClickKeypad(element)}
            className={`numeric-keypad__item ${activeNumber >= 0 ? 'active' : ''}`}
            key={i}>
            {element}
          </div>
        );
      })}
      <button onClick={handleClear}>Очистить</button>
    </div>
  );
};

export { GameKeypad };
