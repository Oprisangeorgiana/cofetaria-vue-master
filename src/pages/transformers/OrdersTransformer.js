import * as _ from "lodash";
import Utils from '../../utils/Utils'
import ProductsRepository from "../../repository/ProductsRepository";
import ProductsTransformer from "./ProductsTransformer";

class OrdersTransformer {
    static async fromAPI(order) {
        let result = Utils.makeArray(order)

        // Get roes for users
        let orderProducts = Utils.getItemKeyFromlist(result, 'orderProducts')
        let orderProductsIDs = Utils.getItemKeyFromlist(orderProducts, 'product_id')
        let productList = await new ProductsRepository().get(orderProductsIDs)
        productList = await ProductsTransformer.fromAPI(productList)

        let productsDictionary = Utils.normalize(productList)
        for (let currentOrder of result) {
            for (let currentProductOrder of _.get(currentOrder, 'orderProducts')) {
                currentProductOrder.product = productsDictionary[_.get(currentProductOrder, 'product_id')]
            }
        }

        return !Array.isArray(order) ? _.head(result) : result
    }
}

export default OrdersTransformer
