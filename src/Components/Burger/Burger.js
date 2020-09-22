import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import PropTypes from 'prop-types';

import classes from './Burger.module.css';

const Burger = (props) => {

   let totalIngredientsArray = Object.keys(props.ingredients).map((ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => <BurgerIngredient key={ingredient + i} type={ingredient}/>)
   }).reduce((arr, el) => arr.concat(el), [])

   if (!totalIngredientsArray.length) {
     totalIngredientsArray = <p>Please start adding ingredients!</p>
   }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {totalIngredientsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>    
  )
}

Burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number)
}

export default Burger;
