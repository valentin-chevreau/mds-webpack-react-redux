import { fromJs } from 'immutable'
import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const getCurrentClassLesson = (state, actions) => (
  fromJs(state)
    .setIn(['courses'], actions.courses)
    .toJS()
)

const courses = (state = initialState, actions) => {
  switch (actions.type) {
    case actionsType.GET_CURRENT_CLASS_LESSON:
      return getCurrentClassLesson(state, actions)
    default:
      return state
  }
}

export default courses
