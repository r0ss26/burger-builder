import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.module.css';

const Burger = (props) => {

   const totalIngredientsArray = Object.keys(props.ingredients).map((ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => <BurgerIngredient key={ingredient + i} type={ingredient}/>)
   })

   console.log(totalIngredientsArray)

  return (
    <div className={classes.Burger}>
      {totalIngredientsArray}
    </div>    
  )
}

export default Burger;
