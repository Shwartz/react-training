import React from 'react';
import Person from './Person/Person';

// this is like one liner and does return, ES6 feature
// const persons = (props) => (props.value.is.returned)

class Persons extends React.PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    return nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked;
  }*/

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons;