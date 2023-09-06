import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Home.module.css';
import Meals from '../Meals/Meals';
const Home = (props) => {
  return (
    <Fragment >
      
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='A table full of dishes'></img>
        </div>
        <div className={classes.background}>
        <div className='blue'>
          <Meals></Meals>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
