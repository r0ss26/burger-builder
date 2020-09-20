import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Burger from '../../Components/Burger/Burger';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  handleIngredientUpdated = ingredient => {
    return action => {
      this.setState(prevState => {
        if (
          action === 'decrement' &&
          prevState.ingredients[ingredient] === 0
        )
          return prevState;
          
        return {
          ...prevState,
          ingredients: {
            ...prevState.ingredients,
            [ingredient]:
              action === 'decrement'
                ? prevState.ingredients[ingredient]--
                : prevState.ingredients[ingredient]++,
          },
        };
      });
      console.log(ingredient, this.state);
    };
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientUpdated={this.handleIngredientUpdated} />
      </>
    );
  }
}

export default BurgerBuilder;
