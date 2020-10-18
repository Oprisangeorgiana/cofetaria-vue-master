import ProductsRepository from "../../../../repository/ProductsRepository";

const GETTER_TYPES = {
    GET_ORDER: 'historyProducts/GET_ORDER',
    GET_ORDER_PRODUCTS: 'historyProducts/GET_ORDER_PRODUCTS',
}
export default GETTER_TYPES

export const getters = {
    [GETTER_TYPES.GET_ORDER]: state => {
        return state.order
    },
    [GETTER_TYPES.GET_ORDER_PRODUCTS]: state => {
        return state.order.orderProducts
    }
}
