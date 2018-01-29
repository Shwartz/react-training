import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const {name, age, changed} = props;
  const style = {
    '@media (min-width: 500px)': {
      backgroundColor: 'lightBlue',
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm a {name} and I am {age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  )
};

export default Radium(person);