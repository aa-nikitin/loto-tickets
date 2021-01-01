import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { TicketsGame } from './pages/TicketsGame';
import { TicketsEditor } from './pages/TicketsEditor';
import { ticketsOpen } from './redux/actions';
import { Header } from './components/Header';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ticketsOpen());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Route path="/" component={TicketsGame} exact />
      <Route path="/tickets-editor.html" component={TicketsEditor} exact />
      {/* <Tickets />
      <AddTicket /> */}
    </div>
  );
};

export default App;
