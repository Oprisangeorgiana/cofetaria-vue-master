const GETTER_TYPES = {
  GET_CART: 'cart/GET_CART',
}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_CART]: state => {
    return state.cart
  },

}
