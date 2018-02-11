import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {today, time} from '../../Lib/date';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    // Is this safe to use? URLSearchParams
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;

    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
        console.log('price: ', param[1])
      } else {
        // pattern: ['salad', '1']
        ingredients[param[0]] = +param[1];
      }

    }
    this.setState({ingredients: ingredients, totalPrice: price})
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinue={this.checkoutContinueHandler}
          ingredients={this.state.ingredients}/>
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (
            <ContactData
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}
              {...props}
              time={time()}
              date={today()}/>)}/>
      </div>
    )
  }
}

export default Checkout;