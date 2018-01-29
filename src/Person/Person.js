import React from 'react';
import './Person.css';

const person = (props) => {
  const {name, age, changed} = props;
  console.log('Person', props);
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  )
};

export default person;