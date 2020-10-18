import store from 'js-store'

const MUTATION_TYPES = {

  SET_USER: 'global/SET_USER',
  UNSET_USER: 'global/UNSET_USER',
  SET_IS_FETCHING_USER: 'global/SET_IS_FETCHING_USER'

}
export default MUTATION_TYPES

export const mutations = {

  [MUTATION_TYPES.SET_USER]: (state, data) => {
    state.user = data
    store.set('user', data)
  },
  [MUTATION_TYPES.UNSET_USER]: (state) => {
    state.user = null
    store.remove('user')
  },
  [MUTATION_TYPES.SET_IS_FETCHING_USER]: (state, data) => {
    state.isFetchingUser = data
  }
}
