import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDraw/SideDraw';

const layout = (props) => (
  <Aux>
    <Toolbar/>
    <SideDrawer/>
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;