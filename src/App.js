import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'kds03', name: 'Max', age: '28'},
      {id: 'hdhd3', name: 'Manu', age: '29'},
      {id: 'sdw3', name: 'Stephanie', age: '26'},
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  };

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    console.log('show persons');
    const toggle = !this.state.showPersons;
    this.setState({
      showPersons: toggle
    })
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid salmon',
      padding: '4px 8px',
      borderRadius: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let personsBlock = null;
    if (this.state.showPersons) {
      personsBlock = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {personsBlock}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
