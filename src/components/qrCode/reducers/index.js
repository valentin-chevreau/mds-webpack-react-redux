import { fromJs } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getLastEvents = (state, actions) => (
  fromJs(state)
    .setIn(['data'], actions.data)
    .toJS()
)

const courses = (state = initialState, actions) => {
  switch (actions.type) {
    case actionsType.GET_LAST_EVENTS:
      return getLastEvents(state, actions)
    default:
      return state
  }
}

export default courses
