import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Navigation from './navigation'
import * as serviceWorker from './serviceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faSignInAlt, faTimes)

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
