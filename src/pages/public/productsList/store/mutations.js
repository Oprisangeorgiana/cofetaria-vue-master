const MUTATION_TYPES = {
    SET_CATEGORIES_LIST: 'productsList/SET_CATEGORIES_LIST',
    SET_INGREDIENTS_LIST: 'productsList/SET_INGREDIENTS_LIST',      //dan
    SET_ACTIVE_CATEGORY: 'productsList/SET_ACTIVE_CATEGORY',
    SET_ACTIVE_INGREDIENT: 'productsList/SET_ACTIVE_INGREDIENT',        //dan
    SET_IS_FETCHING_CATEGORIES: 'productsList/SET_IS_FETCHING_CATEGORIES',
    SET_IS_FETCHING_INGREDIENTS: 'productsList/SET_IS_FETCHING_INGREDIENTS',     //dan
    SET_PRODUCTS_LIST: 'productsList/SET_PRODUCTS_LIST',
    SET_SORTBY: 'productsList/SET_SORTBY',
    SET_PAGESIZE: 'productsList/SET_PAGESIZE',
    SET_CURRENT_PAGE: 'productsList/SET_CURRENT_PAGE',
    SET_IS_FETCHING_PRODUCTS: 'productsList/SET_IS_FETCHING_PRODUCTS',


}
export default MUTATION_TYPES

export const mutations = {
    [MUTATION_TYPES.SET_CATEGORIES_LIST]: (state, data) => {
        state.categoriesList = data
    },
    [MUTATION_TYPES.SET_INGREDIENTS_LIST]: (state, data) => {       //dan
        state.ingredientsList = data
    },
    [MUTATION_TYPES.SET_ACTIVE_CATEGORY]: (state, data) => {
        state.activeCategory = data
    },
    [MUTATION_TYPES.SET_ACTIVE_INGREDIENT]: (state, data) => {      //dan
        state.activeIngredient = data
    },
    [MUTATION_TYPES.SET_CURRENT_PAGE]: (state, data) => {
        state.currentPage = data
    },
    [MUTATION_TYPES.SET_IS_FETCHING_CATEGORIES]: (state, data) => {
        state.isFetchingCategories = data
    },
    [MUTATION_TYPES.SET_IS_FETCHING_INGREDIENTS]: (state, data) => {     //dan
        state.isFetchingIngredients = data
    },
    [MUTATION_TYPES.SET_IS_FETCHING_PRODUCTS]: (state, data) => {     //dan
        state.isFetchingProducts = data
    },
    [MUTATION_TYPES.SET_PRODUCTS_LIST]: (state, data) => {
        state.productsList = data
    },

    [MUTATION_TYPES.SET_SORTBY]: (state, data) => {
        state.sortBy = data
    },

    [MUTATION_TYPES.SET_PAGESIZE]: (state, data) => {
        state.pageSize = data
    }

}




