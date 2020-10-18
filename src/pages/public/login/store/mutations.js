const MUTATION_TYPES = {
  SET_USER: 'login/SET_USER',
  SET_USERNAME: 'login/SET_USERNAME',
  SET_PASSWORD: 'login/SET_PASSWORD',
  UNSET_USER: 'login/UNSET_USER'
}
export default MUTATION_TYPES

export const mutations = {
  [MUTATION_TYPES.SET_USER]: (state, data) => {
    state.user = data
  },
  [MUTATION_TYPES.SET_USERNAME]: (state, data) => {
    state.username = data
  },
  [MUTATION_TYPES.SET_PASSWORD]: (state, data) => {
    state.password = data
  },
  [MUTATION_TYPES.UNSET_USER]: (state, data) => {
    state.user = null
  }

}
