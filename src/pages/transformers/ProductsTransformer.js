import IngredientsRepository from '../../repository/IngredientsRepository'
import Utils from '../../utils/Utils'
import CategoriesRepository from '../../repository/CategoriesRepository'

class ProductsTransformer {
  static async fromAPI (product) {
    let result = Utils.makeArray(product)

    // Get detailed information about product categories
    const categoryIDSList = Utils.getItemKeyFromlist(result, 'categoriesList')
    const categoriesList = await new CategoriesRepository().get(categoryIDSList)
    result = await Utils.putChildIntoList(result, categoriesList, 'categoriesList', 'categoriesList')

    // Get detailed information about product ingredient
    const ingredientIDSList = Utils.getItemKeyFromlist(result, 'ingredients')
    const ingredientList = await new IngredientsRepository().get(ingredientIDSList)
    result = await Utils.putChildIntoList(result, ingredientList, 'ingredients', 'ingredients')

    // Convert back to object if it was initially that way
    return !Array.isArray(product) ? _.first(result) : result
  }
}

export default ProductsTransformer
