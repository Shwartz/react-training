import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactDate.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    console.log('this.props', this.props);
    /* Price would be calculated on a server to avoid manipulations */
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'John Doe',
        zipCode: '23234234',
        country: 'Latvia',
      },
      email: 't@t.com',
      deliveryMethod: 'fastest',
      date: this.props.date,
      time: this.props.time,
    };

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name"/>
        <input type="email" name="email" placeholder="Your email"/>
        <input type="text" name="street" placeholder="Your street"/>
        <input type="text" name="postal" placeholder="Your postal code"/>
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner/>;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;