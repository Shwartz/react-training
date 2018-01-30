import React from 'react';
import styles from './Person.css';
import WithClass from '../../../hoc/WithClass';


class Person extends React.Component {
  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    const {name, age, changed} = this.props;

    return <WithClass styles={styles.Person}>
      <p onClick={this.props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={changed} value={name} />
    </WithClass>
  }
}

export default Person;
