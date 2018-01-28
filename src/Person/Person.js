import React from 'react';

const person = (props) => {
  const {name, age} = props;
  console.log('props', props);

  return (
    <div>
      <p>I'm a {name} and I am {age} years old.</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;