import React, {Component} from 'react';
import Person from './Person/Person';
import styles from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';
    if (this.state.showPersons) {
      personsBlock = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = styles.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) classes.push(styles.red);
    if (this.state.persons.length <= 1) classes.push(styles.bold);

    return (
      <div className={styles.App}>
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {personsBlock}
      </div>
    );
  }
}

export default App;
