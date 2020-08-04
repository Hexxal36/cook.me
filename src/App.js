import React from 'react';
import Header from './components/header'
import Aside from './components/aside'
import CardStack from './components/card-stack'
import styles from './app.module.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faSearch)

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles["page-container"]}>
          <CardStack />
        </div>
      </div>
    </div>
  );
}

export default App;
