import React, {Component} from 'react';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    return (
      <div className={styles.App}>Empty app</div>
    );
  }
}

export default App;
