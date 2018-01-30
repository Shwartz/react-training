import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styles from './App.css';

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
    let personsBlock = null;
    if (this.state.showPersons) {
      personsBlock = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />;
    }

    return (
      <div className={styles.App}>
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}/>
        {personsBlock}
      </div>
    );
  }
}

export default App;
