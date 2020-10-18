import OrdersRepository from 'repository/OrdersRepository'
import cartMutations from './mutations'
import OrdersTransformer from '../../../transformers/OrdersTransformer'
import Utils from '../../../../utils/Utils'

const ACTION_TYPES = {
  FETCH_PAGE_DETAILS: 'cart/FETCH_CART',
  PLACE_ORDER: 'cart/PLACE_ORDER',
  DELETE_PRODUCT: 'cart/DELETE_PRODUCT'
}
export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.FETCH_PAGE_DETAILS] ({ commit, state }, id) {
    let data = await new OrdersRepository().get(id)
    const transformedData = await OrdersTransformer.fromAPI(data)
    commit(cartMutations.SET_CART_PRODUCTS, transformedData)
  },
  async [ACTION_TYPES.PLACE_ORDER] ({ commit, state }) {         //continua aici
    console.log(state.cartProductsList)
    //let data = await new OrdersRepository().insert(OrdersTransformer.toAPI(state.cartProductsList))
    //commit(cartMutations.SET_CART_PRODUCTS_DICTIONARY, data)
  },
  [ACTION_TYPES.DELETE_PRODUCT] ({ state, commit }, productId) {
    let cartProducts = _.cloneDeep(state.cartProductsList)
    let orderProducts = cartProducts.orderProducts
    console.log(orderProducts)
    console.log(productId)
    orderProducts = orderProducts.filter((product)=> product.product_id !== productId)
    console.log(orderProducts)
    cartProducts.orderProducts = orderProducts
    commit(cartMutations.SET_CART_PRODUCTS, cartProducts)
  }

}
