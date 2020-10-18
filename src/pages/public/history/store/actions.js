import pageMutations from './mutations'
import OrderRepository from '../../../../repository/OrdersRepository'
import OrdersTransformer from "../../../transformers/OrdersTransformer";

const ACTION_TYPES = {
  FETCH_ORDERS: 'history/FETCH_ORDERS',
}
export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.FETCH_ORDERS] ({ commit, state }) {
    let fetchedorders = await new OrderRepository().getAll()
    fetchedorders = await OrdersTransformer.fromAPI(fetchedorders)

    // await fetchedorders.forEach(async (order) => order = await OrdersTransformer.fromAPI(order))

    commit(pageMutations.SET_ORDERS, fetchedorders)
  },

}
