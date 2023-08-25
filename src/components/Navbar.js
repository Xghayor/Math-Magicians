import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">Math Magicians</Link>
    </div>
    <ul className="navbar-menu">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li className="navbar-item">
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
