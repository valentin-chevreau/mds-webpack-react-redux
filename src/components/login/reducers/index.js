// Import needed modules
import { fromJS } from 'immutable'
import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getUser = (state, action) => (
  fromJS(state)
    .setIn(['username'], action.username)
    .toJS()
)

const login = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_USERS:
      return getUser(state, action)
    default:
      return state
  }
}

export default login
