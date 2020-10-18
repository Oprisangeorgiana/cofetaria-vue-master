const MUTATION_TYPES = {

  SET_USERNAME: 'sign/SET_USERNAME',
  SET_FIRST_PASSWORD: 'sign/SET_FIRST_PASSWORD',
  SET_SECOND_PASSWORD: 'sign/SET_SECOND_PASSWORD',
  SET_FULL_NAME: 'sign/SET_FULL_NAME',
  SET_MAIL: 'sign/SET_MAIL',
  SET_ERROR: 'sign/SET_ERROR',
  SET_ERROR_MESSAGES: 'sign/SET_ERROR_MESSAGES',

}
export default MUTATION_TYPES

export const mutations = {
  [MUTATION_TYPES.SET_USERNAME]: (state, data) => {
    state.userName = data
  },
  [MUTATION_TYPES.SET_FIRST_PASSWORD]: (state, data) => {
    state.firstPassword = data
  },
  [MUTATION_TYPES.SET_SECOND_PASSWORD]: (state, data) => {
    state.secondPassword = data
  },
  [MUTATION_TYPES.SET_FULL_NAME]: (state, data) => {
    state.fullName = data
  },
  [MUTATION_TYPES.SET_MAIL]: (state, data) => {
    state.mail = data
  },
  [MUTATION_TYPES.SET_ERROR]: (state, data) => {
    state.error = data
  },
  [MUTATION_TYPES.SET_ERROR_MESSAGES]: (state, data) => {
    state.errorMessages = data
  },


}
