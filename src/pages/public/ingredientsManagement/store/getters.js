const GETTER_TYPES = {
  GET_INGREDIENTS: 'ingredientsManagement/GET_INGREDIENTS',
  GET_NEW_INGREDIENT: 'ingredientsManagement/GET_NEW_INGREDIENT',
}
export default GETTER_TYPES

export const getters = {
  [GETTER_TYPES.GET_INGREDIENTS]: state => {
    return state.ingredients
  },
  [GETTER_TYPES.GET_NEW_INGREDIENT]: state => {
    return state.newIngredent
  },

}
