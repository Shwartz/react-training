import React from 'react';

import styles from './Order.css';

const order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span style={{textTransform: 'Capitalize', display: 'block'}}
                 key={ig.name}>{ig.name} ({ig.amount})</span>
  });

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
      <div className={styles.Time}>
        <p>Date: {props.date}</p>
        <p>Time: {props.time}</p>
      </div>
    </div>
  )
};

export default order;