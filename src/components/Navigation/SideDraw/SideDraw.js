import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import styles from './SideDraw.css';

const sideDraw = (props) => {

  return (
    <div className={styles.SideDraw}>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
};
export default sideDraw;