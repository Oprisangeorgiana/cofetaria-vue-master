const pageGetters = {

  GET_ADMIN_ACTIVE_CATEGORY: 'adminLayout/GET_ACTIVE_CATEGORY',
  GET_EDIT_CATEGORIES_LIST: 'adminLayout/GET_EDIT_CATEGORIES_LIST'

}
export default pageGetters

export const getters = {
  [pageGetters.GET_EDIT_CATEGORIES_LIST]: state => {
    return state.editCategoriesList
  },

  [pageGetters.GET_ADMIN_ACTIVE_CATEGORY]: state => {
    return state.activeCategory
  }

}
