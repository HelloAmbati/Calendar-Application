import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Communication Tracking</h1>
      <nav>
        <Link to="/admin">Admin Panel</Link>
        <Link to="/user">User Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
