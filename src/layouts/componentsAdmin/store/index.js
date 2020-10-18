import state from './state'
import {mutations} from './mutations'
import {getters} from './getters'
import {actions } from './actions'


export default {
  namespaced: false,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
}
