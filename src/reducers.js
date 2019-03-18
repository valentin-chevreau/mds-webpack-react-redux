import { combineReducers } from 'redux'

import courses from './components/qrCode/reducers'
import users from './components/login/reducers'

export default combineReducers({
  courses, users
})
