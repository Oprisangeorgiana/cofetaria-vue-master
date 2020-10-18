const MUTATION_TYPES = {
    SET_ORDER: 'historyProducts/SET_ORDER',
}
export default MUTATION_TYPES

export const mutations = {
    [MUTATION_TYPES.SET_ORDER]: (state, data) => {
        state.order = data
    }
}
