
const GETTER_TYPES = {
  GET_PRODUCTS: 'products/GET_PRODUCTS',
}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_PRODUCTS]: state => {
    return state.products
  },
}
