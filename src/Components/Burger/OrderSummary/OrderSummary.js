import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
  componentDidUpdate() {
    console.log('order summary updated')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}{' '}
        </li>
      );
    });

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' onClick={this.props.onPurchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType='Success' onClick={this.props.onPurchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
};

OrderSummary.propTypes = {
  price: PropTypes.number,
  onPurchaseCancelled: PropTypes.func,
  onPurchaseContinued: PropTypes.func,
  ingredients: PropTypes.objectOf(PropTypes.number)
}

export default OrderSummary;
