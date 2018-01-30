import React from 'react';
import styles from './Person.css';


class Person extends React.Component {
  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    const {name, age, changed} = this.props;

    return <div className={styles.Person}>
      <p onClick={this.props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  }
}

export default Person;
