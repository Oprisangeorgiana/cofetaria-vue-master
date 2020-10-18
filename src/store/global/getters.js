import UserTransformer from '../../pages/transformers/UserTransformer'
import Utils from '../../utils/Utils'

const USER_ROLES = {
  ADMIN: 'Administrator',
  USER: 'User'
}
const USER_PERMISSIONS = {
  VIEW: 'View',
  INSERT: 'Insert',
  UPDATE: 'Update',
  DELETE: 'Delete'
}

const GETTER_TYPES = {

  GET_USER: 'global/GET_USERS',
  GET_IS_FETCHING_USER: 'global/GET_IS_FETCHING_USER',

  GET_ROLE: 'global/GET_ROLE',
  GET_PERMISSION: 'global/GET_PERMISSION',

  IS_LOGGED_IN: 'global/IS_LOGGED_IN',
  IS_ADMIN: 'global/IS_ADMIN',
  IS_USER: 'global/IS_USER',
  HAS_VIEW_PERMISSION: 'global/GET_USER_VIEW_PERMISSION',
  HAS_INSERT_PERMISSION: 'global/GET_USER_INSERT_PERMISSION',
  HAS_UPDATE_PERMISSION: 'global/GET_USER_UPDATE_PERMISSION',
  HAS_DELETE_PERMISSION: 'global/GET_USER_DELETE_PERMISSION'
}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_USER]: state => {
    return _.get(state,'user')
  },
  [GETTER_TYPES.GET_IS_FETCHING_USER]: state => {
    return state.isFetchingUser
  },

  [GETTER_TYPES.GET_ROLE]: state => {
    return _.get(state, 'user.role')
  },
  [GETTER_TYPES.GET_PERMISSION]: state => {
    return _.get(state, 'user.role.permissions')
  },

  [GETTER_TYPES.IS_LOGGED_IN]: state => {
    console.log(state.user)
    return !!state.user
  },
  [GETTER_TYPES.IS_ADMIN]: state => {
    let userRole = _.get(state, 'user.role.name')
    return userRole === USER_ROLES.ADMIN
  },
  [GETTER_TYPES.IS_USER]: state => {
    let userRole = _.get(state, 'user.role.name')
    return userRole === USER_ROLES.USER
  },
  [GETTER_TYPES.HAS_VIEW_PERMISSION]: state => {
    let userPermissions = _.get(state, 'user.role.permissions')
    if (!userPermissions)
      return false
    userPermissions = Utils.makeArray(userPermissions)

    let userPermissionsDictionary = Utils.normalize(userPermissions, 'name')
    return !!userPermissionsDictionary[USER_PERMISSIONS.VIEW]
  },
  [GETTER_TYPES.HAS_INSERT_PERMISSION]: state => {
    let userPermissions = _.get(state, 'user.role.permissions')
    if (!userPermissions)
      return false
    userPermissions = Utils.makeArray(userPermissions)

    let userPermissionsDictionary = Utils.normalize(userPermissions, 'name')
    return !!userPermissionsDictionary[USER_PERMISSIONS.INSERT]
  },
  [GETTER_TYPES.HAS_UPDATE_PERMISSION]: state => {
    let userPermissions = _.get(state, 'user.role.permissions')
    if (!userPermissions)
      return false
    userPermissions = Utils.makeArray(userPermissions)

    let userPermissionsDictionary = Utils.normalize(userPermissions, 'name')
    return !!userPermissionsDictionary[USER_PERMISSIONS.UPDATE]
  },
  [GETTER_TYPES.HAS_DELETE_PERMISSION]: state => {
    let userPermissions = _.get(state, 'user.role.permissions')
    if (!userPermissions)
      return false
    userPermissions = Utils.makeArray(userPermissions)

    let userPermissionsDictionary = Utils.normalize(userPermissions, 'name')
    return !!userPermissionsDictionary[USER_PERMISSIONS.DELETE]
  }
}
