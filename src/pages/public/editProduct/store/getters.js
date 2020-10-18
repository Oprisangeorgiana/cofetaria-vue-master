
const GETTER_TYPES = {

  GET_PRODUCT: 'products/GET_PRODUCT',


}
export default GETTER_TYPES

export const getters = {




  [GETTER_TYPES.GET_PRODUCT]: state => {
    return state.product
  },
}
