import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getKeypad, getKeypadSelected } from '../redux/reducers';
import { keypadAdd, keypadChange } from '../redux/actions';
import { NUMERIC_KEYPAD } from '../redux/constants';

const GameKeypad = () => {
  const keypad = useSelector((state) => getKeypad(state));
  const keypadSelected = useSelector((state) => getKeypadSelected(state));
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(keypadAdd(value));
  };
  return (
    <div className="numeric-keypad">
      {NUMERIC_KEYPAD.map((element, i) => {
        // console.log(element);
        _.indexOf([1, 2, 1, 2], 2);
        return (
          <div onClick={() => handleClick(element)} className="numeric-keypad__item" key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export { GameKeypad };
