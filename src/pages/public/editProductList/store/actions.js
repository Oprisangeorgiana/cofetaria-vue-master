import productMutations from './mutations'
import ProductsRepository from "../../../../repository/ProductsRepository";

const ACTION_TYPES = {
  FETCH_PRODUCTS: 'products/FETCH_PRODUCTS',
  INSERT_PRODUCT: 'products/INSERT_PRODUCT',
  UPDATE_PRODUCT: 'products/UPDATE_PRODUCT',
  DELETE_PRODUCT: 'products/DELETE_PRODUCT',
}

export default ACTION_TYPES

export const actions = {
  async [ACTION_TYPES.FETCH_PRODUCTS]({commit, state}) {
    let data = await new ProductsRepository().getAll()
    commit(productMutations.SET_PRODUCTS, data)
  },
  async [ACTION_TYPES.INSERT_PRODUCT]({commit, state}) {
    let data = await new ProductsRepository().insert()
    commit(productMutations.SET_PRODUCTS, data)
  },
  async [ACTION_TYPES.UPDATE_PRODUCT]({commit, state}, item) {
    let data = await new ProductsRepository().update(item)
    commit(productMutations.SET_PRODUCTS, data)
  },
  async [ACTION_TYPES.DELETE_PRODUCT]({commit, state}, item) {
    let data = await new ProductsRepository().delete(item)
  }
}
