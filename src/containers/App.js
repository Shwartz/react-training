import React, {PureComponent} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import styles from './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }
  state = {
    persons: [
      {id: 'kds03', name: 'Max', age: '28'},
      {id: 'hdhd3', name: 'Manu', age: '29'},
      {id: 'sdw3', name: 'Stephanie', age: '26'},
    ],
    showPersons: false,
  };

  /*shouldComponentUpdate (nextProps, nextState) {
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  }*/

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
      <Aux styles={styles.App}>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}/>
        {personsBlock}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
