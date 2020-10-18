import OrdersRepository from "repository/OrdersRepository";
import productMutations from "./mutations";

const ACTION_TYPES = {
    FETCH_CART: 'products/FETCH_CART',
}
export default ACTION_TYPES


export const actions = {
    async [ACTION_TYPES.FETCH_CART]({commit, state}, id) {
        let data = await new OrdersRepository().getAll()
        // console.log(data)
        commit(productMutations.SET_CART, data)
    }
}
