import React, { Component } from 'react';

import Burger from '../../Components/Burger/Burger';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      'bread-top': 1,
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
      'bread-bottom': 1,
    },
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
