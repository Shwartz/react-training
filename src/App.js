import React, {Component} from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import styles from './App.css';

class App extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div className={styles.App}>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
