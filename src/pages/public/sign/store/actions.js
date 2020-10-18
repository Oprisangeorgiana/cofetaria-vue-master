import axios from 'axios'
import signMutations from './mutations'
import signGetters from './getters'
import loginMutations from '../../login/store/mutations'
import UsersRepository from '../../../../repository/UsersRepository'

const ACTION_TYPES = {
  CREATE_USER: 'sign/CREATE_USER',

}

export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.CREATE_USER] ({ commit, state, getters }) {
    const firstPassword = getters[signGetters.GET_FIRST_PASSWORD]
    const secondPassword = getters[signGetters.GET_SECOND_PASSWORD]
    const fullName = getters[signGetters.GET_FULL_NAME]
    const error = getters[signGetters.GET_ERROR]
    const userName = getters[signGetters.GET_USERNAME]
    const mail = getters[signGetters.GET_MAIL]
    const users = await new UsersRepository().getAll()

    commit(signMutations.SET_ERROR_MESSAGES, null)
    commit(signMutations.SET_ERROR, false)

    if (firstPassword !== secondPassword) {
      commit(signMutations.SET_ERROR_MESSAGES, 'Password does not match')
      commit(signMutations.SET_ERROR, true)
    }

    if (users.find(function (item) {
      return item.mail === mail
    })) {
      commit(signMutations.SET_ERROR_MESSAGES, 'Mail taken')
      commit(signMutations.SET_ERROR, true)
      return
    }

    if (users.find(function (item) {
      return item.mail === userName
    })) {
      commit(signMutations.SET_ERROR_MESSAGES, 'Username taken')
      commit(signMutations.SET_ERROR, true)
      return
    }

    if ((!error) && (userName) && (secondPassword)) {

      const registerResponse = await axios.post('http://localhost:3000/users',
        {
          roleId: 2,
          username: userName,
          password: firstPassword,
          mail: mail,
          fullName: fullName,
          authFailed: false
        })

      const currentUser = await new UsersRepository().get(registerResponse.data.id)
      commit(loginMutations.SET_CURRENT_USER, currentUser)

    }
  }
}
