import React from 'react';
import './Person.css';

const person = (props) => {
  console.log('props', props);
  const {name, age} = props;

  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={name} />
    </div>
  )
};

export default person;