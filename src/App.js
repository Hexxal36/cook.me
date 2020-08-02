import React from 'react';
import Header from './components/header'
import './app.module.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faSearch)

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
