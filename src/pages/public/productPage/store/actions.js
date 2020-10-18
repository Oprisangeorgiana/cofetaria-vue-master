import pageMutations from './mutations'
import ProductsRepository from 'repository/ProductsRepository'
import ProductsTransformer from '../../../transformers/ProductsTransformer'

const ACTION_TYPES = {

  FETCH_PAGE_DETAILS: 'product-page/FETCH_PAGE_DETAILS',
  FETCH_PRODUCT: 'productsList/FETCH_PRODUCT',
}

export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.FETCH_PAGE_DETAILS] ({ commit, state }, productID) {
    const product = await new ProductsRepository().get(productID)
    commit(pageMutations.SET_PRODUCT, await ProductsTransformer.fromAPI(product))
  }

}
