import React, {Component} from 'react';
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid salmon',
      borderRadius: '8px',
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
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {personsBlock}
      </div>
    );
  }
}

export default App;
