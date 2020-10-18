import axios from 'axios'

const pageActions = {
  FETCH_CATEGORIES_LIST: 'productsList/FETCH_CATEGORIES_LIST',
  FETCH_INGREDIENTS_LIST: 'productsList/FETCH_INGREDIENTS_LIST',
  FETCH_PAGE_DETAILS: 'productsList/FETCH_PAGE_DETAILS',
  FETCH_PAGESIZE: 'productsList/FETCH_PAGESIZE',
  FETCH_SORTBY: 'productsList/FETCH_SORTBY',
  FETCH_PRODUCTS_LIST: 'productsList/FETCH_PRODUCTS_LIST',

}
export default pageActions

import pageMutations from './mutations'
import CategoriesRepository from '../../../../repository/CategoriesRepository'
import ProductsRepository from '../../../../repository/ProductsRepository'
import ProductsTransformer from '../../../transformers/ProductsTransformer'

export const actions = {
  async [pageActions.FETCH_PAGE_DETAILS] ({ commit, state,dispatch }) {
    dispatch(pageActions.FETCH_CATEGORIES_LIST)
    dispatch(pageActions.FETCH_INGREDIENTS_LIST)
    dispatch(pageActions.FETCH_PRODUCTS_LIST)
  },

  async [pageActions.FETCH_CATEGORIES_LIST] ({ commit, state }) {
    commit(pageMutations.SET_IS_FETCHING_CATEGORIES, true)
    const fetchedCategoriesList = await new CategoriesRepository().getAll()
    commit(pageMutations.SET_CATEGORIES_LIST, fetchedCategoriesList)
    commit(pageMutations.SET_IS_FETCHING_CATEGORIES, false)
  },
  async [pageActions.FETCH_PRODUCTS_LIST] ({ commit, state }) {
    commit(pageMutations.SET_IS_FETCHING_PRODUCTS, true)
    const fetchedProductsList = await new ProductsRepository().getAll()
    const transformedFetchProductsList = await ProductsTransformer.fromAPI(fetchedProductsList)
    commit(pageMutations.SET_PRODUCTS_LIST, transformedFetchProductsList)
    commit(pageMutations.SET_IS_FETCHING_PRODUCTS, false)
  },

  async [pageActions.FETCH_INGREDIENTS_LIST] ({ commit, state }) {
    commit(pageMutations.SET_IS_FETCHING_INGREDIENTS, true)
    const fetchedIngredientsList = await axios.get(
      'http://localhost:3000/ingredients')
    commit(pageMutations.SET_INGREDIENTS_LIST, fetchedIngredientsList.data)
    commit(pageMutations.SET_IS_FETCHING_INGREDIENTS, false)
  },

  [pageActions.FETCH_PAGESIZE] ({ commit, state }) {

    const fetchedPageSize = pageSize
    commit(pageMutations.SET_PAGESIZE, fetchedPageSize)

  },

  [pageActions.FETCH_SORTBY] ({ commit, state }) {

    const fetchedSortBy = sortBy
    commit(pageMutations.SET_SORTBY, fetchedSortBy)

  }

}
