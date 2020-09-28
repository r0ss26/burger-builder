import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import axios from '../../axiosOrders';

import Burger from '../../Components/Burger/Burger';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    loading: false,
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    error: false,
  };

  async componentDidMount() {
    try {
      const ingredients = await this.getIngredients();
      this.setState({ ingredients });
    } catch (error) {
      this.setState({error: true})
    }
  }

  async getIngredients() {
    try {
      const response = await axios.get('/ingredients.json');
      return response.data;
    } catch (error) {
      this.setState({ error: true });
    }
  }

  toggleModal = () => {
    this.setState({ purchasing: !this.state.purchasing });
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

  handlePurchaseContinued = async () => {
    // alert('You continue!');
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Ross',
        address: {
          street: 'teststreet',
          zipcode: '2089',
          country: 'Australia',
        },
        email: 'test@Test.com',
        deliveryMethod: 'fastest',
      },
    };

    try {
      const response = await axios.post('/orders.json', order);
      console.log(response);
      this.setState({ loading: false, purchasing: false });
    } catch (error) {
      this.setState({ loading: false, purchasing: false });
      console.log(error);
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingredients can't be loading</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          onPurchaseCancelled={this.toggleModal}
          onPurchaseContinued={this.handlePurchaseContinued}
          ingredients={this.state.ingredients}
        />
      );

      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            onOrder={this.toggleModal}
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
            disabled={disabledInfo}
            onIngredientUpdated={this.handleIngredientUpdated}
          />
        </>
      );
    }

    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <>
        <Modal toggleModal={this.toggleModal} show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
