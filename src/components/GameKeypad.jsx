import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getKeypad, getKeypadSelected } from '../redux/reducers';
import { keypadAdd, keypadChange, ticketsSave } from '../redux/actions';
import { NUMERIC_KEYPAD } from '../redux/constants';

const GameKeypad = () => {
  const keypad = useSelector((state) => getKeypad(state));
  const keypadSelected = useSelector((state) => getKeypadSelected(state));
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(keypadAdd(value));
    dispatch(ticketsSave());
  };
  return (
    <div className="numeric-keypad">
      {NUMERIC_KEYPAD.map((element, i) => {
        const activeNumber = _.indexOf(keypad, element);

        return (
          <div
            onClick={() => handleClick(element)}
            className={`numeric-keypad__item ${activeNumber >= 0 ? 'active' : ''}`}
            key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export { GameKeypad };
