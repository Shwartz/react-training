import React from 'react';

import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    })
    // at this point we have [Array(0), Array(n), N)
    // we need flatten array to get that info out from Array and bet to array
    .reduce((arr, el) => {
      //-> [{key, props, f}, {n}]
      return arr.concat(el);
    }, []);
  console.log('transformIngredients', transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Ingredients</p>
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
};
export default burger;
