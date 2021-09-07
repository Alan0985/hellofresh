import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, WithStyles } from '@material-ui/core';

import Hello_Fresh_Logo from '../../../assets/images/Hello_Fresh_Logo.png';

import HeaderStyle from './HeaderStyle';

interface Props extends WithStyles {}

const Header = (props: Props) => {
  const { classes } = props;
  return (
    <nav className={classes.header}>
      <div className={classes.nav}>
        <NavLink exact className={classes.logo} to='/'>
          <img src={Hello_Fresh_Logo} alt='Hello_Fresh_Logo' />
        </NavLink>

        <ul className={classes.navBar}>
          <li className={classes.navItem}>
            <NavLink exact className='' to='/explore'>
              <p>Our Plans</p>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact className='' to='/explore/membership'>
              <p>How It Works</p>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact className='' to='/explore/training'>
              <p>Our Recipes</p>
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink exact className='' to='/explore/contact'>
              <p>COVID-19 Updates</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.login}>
        <NavLink exact className='' to='/login'>
          Log in
        </NavLink>
      </div>
    </nav>
  );
};

export default withStyles(HeaderStyle)(Header);
