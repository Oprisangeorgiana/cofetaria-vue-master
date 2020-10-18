import OrderRepository from "repository/OrdersRepository";
import pageMutations from "./mutations";
import OrdersTransformers from '../../../transformers/OrdersTransformer';

const ACTION_TYPES = {

    FETCH_PAGE_DETAILS: 'historyProducts/FETCH_PAGE_DETAILS',

}
export default ACTION_TYPES


export const actions = {
    async [ACTION_TYPES.FETCH_PAGE_DETAILS]({commit, state}, id) {
        const response = await new OrderRepository().get(id)
        //console.log(response)
        commit(pageMutations.SET_ORDER, await OrdersTransformers.fromAPI(response))
    }
}
