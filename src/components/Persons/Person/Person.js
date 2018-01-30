import React from 'react';
import styles from './Person.css';

const person = (props) => {
  const {name, age, changed} = props;

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  )
};

export default person;