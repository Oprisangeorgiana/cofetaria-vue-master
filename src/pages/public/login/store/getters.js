
const GETTER_TYPES = {
  GET_USER: 'login/GET_USER',
  GET_USERNAME: 'login/GET_USERNAME',
  GET_PASSWORD: 'login/GET_PASSWORD'
}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_USER]: state => {
    return state.users
  },
  [GETTER_TYPES.GET_USERNAME]: state => {
    return state.username
  },
  [GETTER_TYPES.GET_PASSWORD]: state => {
    return state.password
  }
}
