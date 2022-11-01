import React from 'react';
import { NavLink } from 'react-router-dom';
import navStyles from './Navigation.module.css';

const Navigation = () => {
  const activePage = ({ isActive }) => ({
    color: isActive ? 'rgba(46, 0, 230, 0.8)' : 'black',
  });

  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navLinks}>
        <h2>Math Magicians</h2>
        <ul className={navStyles.navMenu}>
          <li>
            <NavLink to="/" end style={activePage}>Home </NavLink>
            |
          </li>
          <li>
            <NavLink to="/calculator" style={activePage}>Calculator </NavLink>
            |
          </li>
          <li><NavLink to="/quotes" style={activePage}>Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
