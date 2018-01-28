import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Manu', age: '29'},
      {name: 'Stephanie', age: '26'},
    ]
  };

  switchNameHandler = () => {
    console.log('Was clicked!');
    //this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: 'Maximilian', age: '28'},
        {name: 'Manu', age: '29'},
        {name: 'Stephanie', age: '25'},
      ]
    })
  };

  render() {
    const persons = this.state.persons;
    console.log('persons', persons);

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={persons[0].name}
          age={persons[0].age} />
        <Person
          name={persons[1].name}
          age={persons[1].age}
          click={this.switchNameHandler}
        >My Hobbies: Racing</Person>
        <Person
          name={persons[2].name}
          age={persons[2].age} />
      </div>
    );
  }
}

export default App;
