import React, {Component} from 'react';

import Layout from './components/Layout/Layout';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    return (
      <div className={styles.App}>
        <Layout>Test</Layout>
      </div>
    );
  }
}

export default App;
