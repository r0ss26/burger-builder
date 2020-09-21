import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  toggleModal = () => {
    this.setState({purchasing: !this.state.purchasing})
  };

  updatePurchaseState = () => {
    const ingredients = {
      ...this.state.ingredients,
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => sum + el, 0);
    console.log(sum)
    this.setState({ purchaseable: sum > 0 });
  };

  handleIngredientUpdated = ingredient => {
    return action => {
      this.setState(prevState => {
        if (action === 'decrement' && prevState.ingredients[ingredient] === 0)
          return;

        return {
          ingredients: {
            ...prevState.ingredients,
            [ingredient]:
              action === 'decrement'
                ? prevState.ingredients[ingredient] - 1
                : prevState.ingredients[ingredient]++,
          },
          totalPrice:
            action === 'decrement'
              ? prevState.totalPrice - INGREDIENT_PRICES[ingredient]
              : prevState.totalPrice + INGREDIENT_PRICES[ingredient],
        };
      }, this.updatePurchaseState);
    };
  };

  handlePurchaseContinued = () => {
    alert('You continue!')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Modal toggleModal={this.toggleModal} show={this.state.purchasing}>
          <OrderSummary
            price={this.state.totalPrice}
            onPurchaseCancelled={this.toggleModal} 
            onPurchaseContinued={this.handlePurchaseContinued}
            ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onOrder={this.toggleModal}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          ingredientUpdated={this.handleIngredientUpdated}
        />
      </>
    );
  }
}

export default BurgerBuilder;
