const GETTER_TYPES = {
  GET_USERNAME: 'sign/GET_USERNAME',
  GET_FIRST_PASSWORD: 'sign/GET_FIRST_PASSWORD',
  GET_SECOND_PASSWORD: 'sign/GET_SECOND_PASSWORD',
  GET_FULL_NAME: 'sign/GET_FULL_NAME',
  GET_MAIL: 'sign/GET_MAIL',
  GET_ERROR: 'sign/GET_ERROR',
  GET_ERROR_MESSAGES: 'sign/GET_ERROR_MESSAGES',

}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_USERNAME]: state => {
    return state.userName
  },
  [GETTER_TYPES.GET_FIRST_PASSWORD]: state => {
    return state.firstPassword
  },
  [GETTER_TYPES.GET_SECOND_PASSWORD]: state => {
    return state.secondPassword
  },
  [GETTER_TYPES.GET_FULL_NAME]: state => {
    return state.fullName
  },
  [GETTER_TYPES.GET_MAIL]: state => {
    return state.mail
  },
  [GETTER_TYPES.GET_ERROR]: state => {
    return state.error
  },
 [GETTER_TYPES.GET_ERROR_MESSAGES]: state => {
    return state.errorMessages
  },

}
