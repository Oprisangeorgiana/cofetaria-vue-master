const GETTER_TYPES = {
  GET_WISHLIST_PRODUCTS_LIST: 'wishlist/GET_WISHLIST_PRODUCTS_LIST',
  GET_WISHLIST_PRODUCTS_DICTIONARY: 'wishlist/GET_WISHLIST_PRODUCTS_DICTIONARY',

}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_WISHLIST_PRODUCTS_DICTIONARY]: state => {
    return state.wishlistProducts
  },

  [GETTER_TYPES.GET_WISHLIST_PRODUCTS_LIST]: (state, getters) => {
    const wishlistProductsDictionary = getters[GETTER_TYPES.GET_WISHLIST_PRODUCTS_DICTIONARY]
    return Object.values(wishlistProductsDictionary)
  },



}
