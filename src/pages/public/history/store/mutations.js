const MUTATION_TYPES = {
    SET_ORDERS: 'history/SET_ORDERS',
    SET_USERS_LIST: 'history/SET_USERS_LIST',

}
export default MUTATION_TYPES

export const mutations = {
    [MUTATION_TYPES.SET_ORDERS]: (state, data) => {
        state.orders = data
    },

}
