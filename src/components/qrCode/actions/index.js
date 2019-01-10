import actionsType from './actions-type'
import store from '../../../store'
import courses from '../../../mock/courses.json'

/**
 * Format events
 * @param {Array} events
 * @return {Array} eventsFormatted
 */

const getEventsData = () => {
  store.dispatch(courses)
}

export const getLastEvents = async () => {
  const events = await getEventsData()

  return {
    type: actionsType.GET_LAST_EVENTS,
    data: getEventsData(events)
  }
}
