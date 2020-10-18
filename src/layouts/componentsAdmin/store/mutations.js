const pageMutations = {
  SET_EDIT_CATEGORIES_LIST: 'adminLayout/SET_EDIT_CATEGORIES_LIST',
  SET_ADMIN_ACTIVE_CATEGORY: 'adminLayout/SET_ADMIN_ACTIVE_CATEGORY'

}
export default pageMutations

export const mutations = {
  [pageMutations.SET_EDIT_CATEGORIES_LIST]: (state, data) => {
    state.editCategoriesList = data
  },
  [pageMutations.SET_ADMIN_ACTIVE_CATEGORY]: (state, data) => {
    state.activeCategory = data
  },

}




