import React from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';


class Person extends React.Component {
  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    const {name, age, changed} = this.props;

    return <Aux styles={styles.Person}>
      <p onClick={this.props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={changed} value={name}/>
    </Aux>
  }
}

export default withClass(Person, styles.Person);
