import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="top-menu">
      <NavLink exact activeClassName="active" to="/">
        Играть
      </NavLink>
      <NavLink exact activeClassName="active" to="/tickets-editor.html">
        Редактор билетов
      </NavLink>
    </nav>
  );
};

export { Header };
