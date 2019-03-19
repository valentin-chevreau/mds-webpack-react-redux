// Import needed modules
import { fromJs } from 'immutable'
import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getUser = (state, actions) => (
  fromJs(state)
    .setIn(['users'], actions.users)
    .toJS()
)

const users = (state = initialState, actions) => {
  switch (actions.type) {
    // use the action GET_USERS
    case actionsType.GET_USERS:
      return getUser(state, actions)
    default:
      return state
  }
}

export default users
