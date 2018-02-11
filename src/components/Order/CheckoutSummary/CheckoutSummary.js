import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        clicked={props.checkoutCancelled}
        btnType="Danger">Cancel</Button>
      <Button
        clicked={props.checkoutContinue}
        btnType="Success">Continue</Button>
    </div>
  );
};

export default checkoutSummary;