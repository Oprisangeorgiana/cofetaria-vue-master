import productMutations from './mutations'
import ProductsRepository from "../../../../repository/ProductsRepository";

const ACTION_TYPES = {

  FETCH_PRODUCT: 'products/FETCH_PRODUCT',
  UPDATE_PRODUCT: 'products/UPDATE_PRODUCT',
}

export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.FETCH_PRODUCT]({commit, state}, id) {
    let data = await new ProductsRepository().get(id)
    commit(productMutations.SET_PRODUCT, data)
  },
  async [ACTION_TYPES.UPDATE_PRODUCT]({commit, state}) {
    let data = await new ProductsRepository().update(state.product)
    commit(productMutations.SET_PRODUCT, data)
  },
}
