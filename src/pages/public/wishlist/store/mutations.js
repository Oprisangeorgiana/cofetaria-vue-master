import store from 'js-store'

const MUTATION_TYPES = {
  SET_WISHLIST_PRODUCTS_DICTIONARY: 'wishlist/SET_WISHLIST_PRODUCTS_DICTIONARY',

}
export default MUTATION_TYPES

export const mutations = {

  [MUTATION_TYPES.SET_WISHLIST_PRODUCTS_DICTIONARY]: (state, data) => {
    state.wishlistProducts = data
    store.set('wishlist', data)
  },

}
