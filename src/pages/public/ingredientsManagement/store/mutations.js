const MUTATION_TYPES = {
  SET_INGREDIENTS: 'ingredientsManagement/SET_INGREDIENTS',
  SET_NEW_INGREDIENT: 'ingredientsManagement/SET_NEW_INGREDIENT',
}

export default MUTATION_TYPES

export const mutations = {
  [MUTATION_TYPES.SET_INGREDIENTS]: (state, data) => {
    state.ingredients = data
  },
[MUTATION_TYPES.SET_NEW_INGREDIENT]: (state, data) => {
    state.newIngredent = data
  },

}
