import ingredientsMutations from './mutations'
import IngredientsRepository from '../../../../repository/IngredientsRepository'

const ACTION_TYPES = {
  INGREDIENTS_REPO: 'ingredientsManagement/INGREDIENTS_REPO',
}
export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.INGREDIENTS_REPO] ({ commit, state }) {
    const ingredients = await new IngredientsRepository().getAll()
    commit(ingredientsMutations.SET_INGREDIENTS, ingredients)
  },

}
