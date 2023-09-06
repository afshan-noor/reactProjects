import React, { Fragment } from 'react';
import classes from './Navigation.module.css';
import HeaderCartButton from './HeaderCartButton';

const Navigation = (props) => {
  return (
    <Fragment>
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
           
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <HeaderCartButton onClick={props.onShowCart}/>
          </li>
        )}
      </ul>
    </nav>
    
</Fragment>
  );
};

export default Navigation;
