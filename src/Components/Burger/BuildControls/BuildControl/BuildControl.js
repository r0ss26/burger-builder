import React from 'react'
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={() => props.ingredientUpdated(props.label, 'decrement')} className={classes.Less}>Less</button>
      <button onClick={() => props.ingredientUpdated(props.label, 'increment')} className={classes.More}>More</button>
    </div>
  )
}

export default BuildControl
