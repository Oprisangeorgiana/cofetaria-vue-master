const MUTATION_TYPES = {
  SET_CART: 'cart/SET_CART',

}
export default MUTATION_TYPES

export const mutations = {

  [MUTATION_TYPES.SET_CART]: (state, data) => {
     state.cart = data
  },
}
