import React from 'react';
import PropTypes from 'prop-types';

import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';


class Person extends React.Component {
  componentWillUnmount() {
    console.log('will unmount');
  }

  componentDidMount() {
    console.log('component did mount');
    if (this.props.position === 0) this.inputField.focus();
  }

  render() {
    const {name, age, changed} = this.props;

    return <Aux styles={styles.Person}>
      <p onClick={this.props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{this.props.children}</p>
      <input
        ref={(inp) => this.inputField = inp}
        type="text"
        onChange={changed}
        value={name}/>
    </Aux>
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, styles.Person);
