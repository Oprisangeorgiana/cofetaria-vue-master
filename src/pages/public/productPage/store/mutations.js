const MUTATION_TYPES = {

  SET_PRODUCT: 'productPage/SET_PRODUCT',
  CLEAR_STATE: 'productPage/CLEAR_STATE'

}
export default MUTATION_TYPES

export const mutations = {

  [MUTATION_TYPES.SET_PRODUCT]: (state, data) => {
    state.product = data
  },
  [MUTATION_TYPES.CLEAR_STATE]: (state, data) => {
    state.product = null
  }
}




