import * as _ from 'lodash'
import Constants from '../../../../config/Constants'

const GETTER_TYPES = {
    GET_CATEGORIES_LIST: 'productsList/GET_CATEGORIES_LIST',
    GET_INGREDIENTS_LIST: 'productsList/GET_INGREDIENTS_LIST', //dan
    GET_ACTIVE_CATEGORY: 'productsList/GET_ACTIVE_CATEGORY',
    GET_ACTIVE_INGREDIENT: 'productsList/GET_ACTIVE_INGREDIENT', //dan
    GET_IS_FETCHING_CATEGORIES: 'productsList/GET_IS_FETCHING_CATEGORIES',
    GET_IS_FETCHING_INGREDIENTS: 'productsList/GET_IS_FETCHING_INGREDIENTS',            //dan
    GET_PRODUCTS_LIST: 'productsList/GET_PRODUCTS_LIST',
    GET_PROCESSED_PRODUCTS_LIST: 'productsList/GET_PROCESSED_PRODUCTS_LIST',
    GET_PAGINATED_PROCESSED_PRODUCTS_LIST: 'productsList/GET_PAGINATED_PROCESSED_PRODUCTS_LIST',
    GET_SORTBY: 'productsList/GET_SORTBY',
    GET_PAGESIZE: 'productsList/GET_PAGESIZE',
    GET_PAGE_NUMBER: 'productsList/GET_PAGE_NUMBER',
    GET_SIZED_PRODUCT_LIST: 'productsList/GET_SIZED_PRODUCT_LIST',
    GET_CURRENT_PAGE: 'productsList/GET_CURRENT_PAGE',
    GET_IS_FETCHING_PRODUCTS: 'productsList/GET_IS_FETCHING_PRODUCTS',

}
export default GETTER_TYPES

export const getters = {
    [GETTER_TYPES.GET_CATEGORIES_LIST]: state => {
        return state.categoriesList
    },

    [GETTER_TYPES.GET_INGREDIENTS_LIST]: state => {                //dan
        return state.ingredientsList
    },

    [GETTER_TYPES.GET_ACTIVE_CATEGORY]: state => {
        return state.activeCategory
    },
    [GETTER_TYPES.GET_IS_FETCHING_PRODUCTS]: state => {
        return state.isFetchingProducts
    },

    [GETTER_TYPES.GET_ACTIVE_INGREDIENT]: state => {                //dan
        return state.activeIngredient

    },

    [GETTER_TYPES.GET_CURRENT_PAGE]: state => {
        return state.currentPage
    },

    [GETTER_TYPES.GET_IS_FETCHING_CATEGORIES]: state => {
        return state.isFetchingCategories
    },

    [GETTER_TYPES.GET_IS_FETCHING_INGREDIENTS]: state => {                //dan
        return state.isFetchingIngredients
    },

    [GETTER_TYPES.GET_PRODUCTS_LIST]: state => {
        return state.productsList
    },

    [GETTER_TYPES.GET_PROCESSED_PRODUCTS_LIST]: (state, getters) => {
        const activeCategory = getters[GETTER_TYPES.GET_ACTIVE_CATEGORY]
        const activeIngredient = getters[GETTER_TYPES.GET_ACTIVE_INGREDIENT]    //dan
        const productsList = getters[GETTER_TYPES.GET_PRODUCTS_LIST]
        const sortBy = getters[GETTER_TYPES.GET_SORTBY]

        let result = []
        // filter

        // if (activeCategory === "Toate produsele") {
        //     result = [...productsList]
        // } else {

        for (let currentProduct of productsList) {

            let shouldAddProduct = true
            // Check if user has selectad an ingredient. Only then filter the products
            if (activeIngredient) {
                if(!_.find(currentProduct.ingredients, function(item) { return item.id === activeIngredient.id; }))
                {
                    shouldAddProduct = false
                }
            }

            // If type=toate produsele add it...
            if (activeCategory !== "Toate produsele") {

                if (activeCategory) {
                    if(!_.find(currentProduct.categoriesList, function(item) { return item.id === activeCategory.id; }))
                    {
                        shouldAddProduct = false
                    }
                }
            }

            if (shouldAddProduct) {
                result.push(currentProduct)
            }
        }

        //sort

        if (sortBy === 'Nume'
        ) {
            result = _.sortBy(result, 'name')
        }
        if (sortBy === 'Pret Asc') {
            result = _.sortBy(result, 'price')
        }
        if (sortBy === 'Pret Desc') {
            result = _.sortBy(result, 'price').reverse()
        }

        return result
    },

    [GETTER_TYPES.GET_PAGE_NUMBER]:
        (state, getters) => {
            const pageSize = getters[GETTER_TYPES.GET_PAGESIZE]
            const paginatedResult = getters[GETTER_TYPES.GET_PROCESSED_PRODUCTS_LIST]
            if (pageSize === Constants.PAGE_SIZE_ALL) {
                return 1
            }
            // console.log('test', paginatedResult)
            let pageNumbers = Math.ceil(paginatedResult.length / pageSize)
            return pageNumbers
        },

    [GETTER_TYPES.GET_SORTBY]:
        state => {
            return state.sortBy
        },

    [GETTER_TYPES.GET_PAGINATED_PROCESSED_PRODUCTS_LIST]:
        (state, getters) => {

            const currentPage = getters[GETTER_TYPES.GET_CURRENT_PAGE]
            const pageSize = getters[GETTER_TYPES.GET_PAGESIZE]
            const result = getters[GETTER_TYPES.GET_PROCESSED_PRODUCTS_LIST]
            if (pageSize === Constants.PAGE_SIZE_ALL) {
                return result
            }
            let begin = (currentPage - 1) * parseInt(pageSize)
            let end = (currentPage - 1) * parseInt(pageSize) + parseInt(pageSize)
            return result.slice(begin, end)

        },

    [GETTER_TYPES.GET_PAGESIZE]:
        state => {
            return state.pageSize
        },

}
