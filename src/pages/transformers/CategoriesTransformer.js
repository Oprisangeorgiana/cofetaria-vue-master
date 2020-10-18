import CategoriesRepository from 'repository/CategoriesRepository'

class CategoriesTransformer {
  static async fromAPI (product) {
    let result = product
    const categoriesList = await new CategoriesRepository().get(product.type)
    result.categories = categoriesList
    return result
  }
}

export default CategoriesTransformer
