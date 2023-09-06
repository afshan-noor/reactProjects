import React, { Fragment, useState} from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Cart from '../Cart/Cart'


const MainHeader = (props) => {
  const[cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <Fragment>  
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <header className={classes['header']}>
      <h1>ReactMeals</h1>
      
      <Navigation  onShowCart={showCartHandler} isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
    </Fragment>
    );
    
};

export default MainHeader;
