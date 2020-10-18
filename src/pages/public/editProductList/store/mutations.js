const MUTATION_TYPES = {

  SET_PRODUCTS: 'products/SET_PRODUCTS',

}
export default MUTATION_TYPES

export const mutations = {

  [MUTATION_TYPES.SET_PRODUCTS]: (state, data) => {
    state.products = data
  },
}




