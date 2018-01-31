import React, {Component} from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    return (
      <div className={styles.App}>
        <Layout>
          <BurgerBuilder>Burger builder</BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
