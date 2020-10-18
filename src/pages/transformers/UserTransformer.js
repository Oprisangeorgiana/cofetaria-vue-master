import Utils from '../../utils/Utils'
import RolesRepository from '../../repository/RolesRepository'
import PermissionsRepository from '../../repository/PermissionsRepository'
import * as _ from 'lodash'

class UserTransformer {
  static async fromAPI (users) {
    let result = Utils.makeArray(users)

    // Get roes for users
    const roleIDSList = Utils.getItemKeyFromlist(result, 'roleId')
    let rolesList = await new RolesRepository().get(roleIDSList)
    //Get permissions
    let roleArray = Utils.makeArray(rolesList)
    const permissionIDSList = Utils.getItemKeyFromlist(roleArray, 'permissions')
    const permissionsList = await new PermissionsRepository().get(permissionIDSList)

    //Attach permissions to roles
    rolesList = Utils.putChildIntoList(roleArray, permissionsList, 'permissions', 'permissions')
    //Attach roles to users
    result = Utils.putChildIntoList(result, rolesList, 'roleId', 'role')

    // Convert back to object if it was initially that way
    return !Array.isArray(users) ? _.head(result) : result
  }
}

export default UserTransformer
