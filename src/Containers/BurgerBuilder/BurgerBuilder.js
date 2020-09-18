import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Burger from '../../Components/Burger/Burger';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      // salad: 1,
      // bacon: 1,
      // cheese: 2,
      // meat: 2
      salad: 0
    },
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </>
    );
  }
}

export default BurgerBuilder;
