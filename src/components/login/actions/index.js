import actionsType from './actions-type'

export const getUser = username => ({
  type: actionsType.GET_USERS,
  username
})
