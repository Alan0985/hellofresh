import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, WithStyles } from '@material-ui/core';

import HeaderStyle from './HeaderStyle';

interface Props extends WithStyles {}

const Header = (props: Props) => {
  const { classes } = props;
  return (
    <nav className={classes.header}>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact className='' to='/'>
            <p>Home</p>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact className='' to='/explore'>
            <p>About Us</p>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact className='' to='/explore/membership'>
            <p>Membership</p>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact className='' to='/explore/training'>
            <p>Training</p>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact className='' to='/explore/contact'>
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>

      <div className='login'>
        <a href='#'>Log in</a>
      </div>
    </nav>
  );
};

export default withStyles(HeaderStyle)(Header);
