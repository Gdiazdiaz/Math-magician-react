import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar-container">
    <h1 className="header-title">Math Magician</h1>
    <ul className="items-container">
      <li><Link to="/Home" className="item">Home</Link></li>
      <li><Link to="/Calculator" className="item">Calculator</Link></li>
      <li><Link to="/Quote" className="item">Quote</Link></li>
    </ul>
  </div>
);

export default NavBar;
