// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
/** import { createStore } from 'redux' */

/** import { Provider } from 'react-redux' */

// Functions
/** import reducers from './reducers' */

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

// Components
import Routes from './routes'

const App = () => (
  /**  <Provider store={store}> */
  <Routes />
/**  </Provider> */
)

ReactDOM.render(<App />, document.getElementById('app'))
