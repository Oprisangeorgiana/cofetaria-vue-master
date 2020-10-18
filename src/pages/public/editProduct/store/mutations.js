const MUTATION_TYPES = {

  SET_PRODUCT: 'products/SET_PRODUCT',

}
export default MUTATION_TYPES

export const mutations = {

  [MUTATION_TYPES.SET_PRODUCT]: (state, data) => {
    state.product = data
  },
}




