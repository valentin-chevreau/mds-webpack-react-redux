import actionsType from './actions-type'
import store from '../../../store'

const getImage = data => ({
  type: actionsType.GET_CURRENT_CLASS_LESSON,
  courses
})

export const getLessons = (data) => {
  store.dispatch(getImage(data))
}
