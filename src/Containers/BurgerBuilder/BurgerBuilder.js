import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Burger from '../../Components/Burger/Burger';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
  };

  handleIngredientUpdated = (ingredient, action) => {
    console.log('clicked');
    this.setState((prevState) => {
      return {
        ...prevState,
        ingredient: action === 'decrement' ? prevState[ingredient]-- : prevState[ingredient]++
      }
    })
  }


  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredientUpdated={this.handleIngredientUpdated}/>
      </>
    );
  }
}

export default BurgerBuilder;
