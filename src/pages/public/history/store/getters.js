const GETTER_TYPES = {
    GET_ORDERS: 'history/GET_ORDERS',
}
export default GETTER_TYPES

export const getters = {
    [GETTER_TYPES.GET_ORDERS]: state => {
        return state.orders
    },

}
