import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Играть</Link>
      <Link to="/tickets-editor.html">Редактор билетов</Link>
    </div>
  );
};

export { Header };
