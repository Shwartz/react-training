import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Stephanie', age: '26'},
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: '28'},
        {name: 'Manu', age: '29'},
        {name: 'Stephanie', age: '25'},
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: '28'},
        {name: event.target.value, age: '29'},
        {name: 'Stephanie', age: '25'},
      ],
      otherState: 'Some other values',
    })
  };

  togglePersonsHandler = () => {
    console.log('show persons');
    const toggle = !this.state.showPersons;
    this.setState({
      showPersons: toggle
    })
  };

  render() {
    const persons = this.state.persons;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid salmon',
      borderRadius: '8px',
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        { this.state.showPersons === true ?
          <div>
            <Person
              name={persons[0].name}
              age={persons[0].age}/>

            <Person
              name={persons[1].name}
              age={persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangeHandler.bind(this)}
            >My Hobbies: Racing</Person>

            <Person
              name={persons[2].name}
              age={persons[2].age}/>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
