import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tickets } from './components/Tickets';
import { AddTicket } from './components/AddTicket';
import { ticketsOpen } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('sad');
    dispatch(ticketsOpen());
  }, []);
  return (
    <div className="App">
      <Tickets />
      <AddTicket />
    </div>
  );
};

export default App;
