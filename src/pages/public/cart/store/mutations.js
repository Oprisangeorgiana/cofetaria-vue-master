const MUTATION_TYPES = {
    SET_CART_PRODUCTS: 'cart/SET_CART_PRODUCTS',
}
export default MUTATION_TYPES

export const mutations = {
    [MUTATION_TYPES.SET_CART_PRODUCTS]: (state, data) => {
        state.cartProductsList = data
    }
}
