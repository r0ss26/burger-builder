import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <BuildControl
          disabled={props.disabled[control.type]}
          onIngredientUpdated={props.onIngredientUpdated(control.type)}
          key={control.label}
          label={control.label}
        />
      ))}
      <button onClick={props.onOrder} disabled={!props.purchaseable} className={classes.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  onOrder: PropTypes.func,
  purchaseable: PropTypes.bool,
  price: PropTypes.number,
  disabled: PropTypes.objectOf(PropTypes.bool),
  ingredientUpdated: PropTypes.func
}

export default BuildControls;
