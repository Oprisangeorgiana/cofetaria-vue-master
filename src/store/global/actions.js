import pageMutations from './mutations'
import UsersRepository from '../../repository/UsersRepository'
import UserTransformer from '../../pages/transformers/UserTransformer'

const ACTION_TYPES = {

  FETCH_USER: 'global/FETCH_USER',
  LOGIN_USER: 'global/LOGIN_USER',
  REGISTER_USER: 'global/REGISTER_USER',
  LOGOUT_USER: 'global/LOGOUT_USER',
  DELETE_USER: 'global/DELETE_USER'
}

export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.FETCH_USER] ({ commit, state }) {
    commit(pageMutations.SET_IS_FETCHING_USER, true)

    const fetchedUsersList = await new UsersRepository().get(_.get(state, 'user.id'))
    const transformedFetchUsersList = await UserTransformer.fromAPI(fetchedUsersList)

    commit(pageMutations.SET_USER, transformedFetchUsersList)
    commit(pageMutations.SET_IS_FETCHING_USER, false)
  },
  async [ACTION_TYPES.LOGIN_USER] ({ commit, state }, userCredentials) {
    commit(pageMutations.SET_IS_FETCHING_USER, true)

    let users = await new UsersRepository().getAll()
    let user = users.find((user) => userCredentials.name === user.name)
    if (user.password === userCredentials.password) {
      commit(pageMutations.SET_USER, await UserTransformer.fromAPI(user))
    }
    else
      commit(pageMutations.SET_USER, null)
    commit(pageMutations.SET_IS_FETCHING_USER, false)
  },
  async [ACTION_TYPES.REGISTER_USER] ({ commit, userDetails }) {
    commit(pageMutations.SET_IS_FETCHING_USER, true)

    //Todo get current user i guess
    const fetchedUsersList = await new UsersRepository().get(1)
    const transformedFetchUsersList = await UserTransformer.fromAPI(fetchedUsersList)

    commit(pageMutations.SET_USER, transformedFetchUsersList)
    commit(pageMutations.SET_IS_FETCHING_USER, false)
  },
  async [ACTION_TYPES.LOGOUT_USER] ({ commit, state }) {
    commit(pageMutations.SET_IS_FETCHING_USER, true)
    commit(pageMutations.UNSET_USER)
    commit(pageMutations.SET_IS_FETCHING_USER, false)
  },
  async [ACTION_TYPES.DELETE_USER] ({ commit, state }) {
    commit(pageMutations.SET_IS_FETCHING_USER, true)

    //Todo get current user i guess
    const fetchedUsersList = await new UsersRepository().get(1)
    const transformedFetchUsersList = await UserTransformer.fromAPI(fetchedUsersList)

    commit(pageMutations.SET_USER, transformedFetchUsersList)
    commit(pageMutations.SET_IS_FETCHING_USER, false)
  }
}
