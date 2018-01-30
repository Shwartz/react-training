import React from 'react';
import styles from  './Person.css';

const person = (props) => {
  const {name, age, changed} = props;
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  )
};

export default person;