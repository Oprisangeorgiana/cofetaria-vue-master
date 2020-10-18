const GETTER_TYPES = {
  GET_CART_PRODUCTS_LIST: 'cart/GET_CART_PRODUCTS_LIST',
  GET_CART_TOTAL_PRICE: 'cart/GET_CART_TOTAL_PRICE',
  GET_CART_TOTAL_PRODUCTS: 'cart/GET_CART_TOTAL_PRODUCTS'
}
export default GETTER_TYPES

export const getters = {

  [GETTER_TYPES.GET_CART_PRODUCTS_LIST]: (state) => {
    return state.cartProductsList
  },
  [GETTER_TYPES.GET_CART_TOTAL_PRICE]: (state) => {
    if (state.cartProductsList === null)
      return 0
    let total = 0
    for (let currentCartProduct of state.cartProductsList.orderProducts) {
      total = total + currentCartProduct.quantity * currentCartProduct.product.price
    }
    return total
  },
  [GETTER_TYPES.GET_CART_TOTAL_PRODUCTS]: (state) => {
    const cartProducts = state.cartProductsList
    if (cartProducts == null)
      return 0
    const cartTotalQuantity = cartProducts.orderProducts

    let cartQun = 0
    for (const currentItem of cartTotalQuantity) {
      cartQun = cartQun + currentItem.quantity
    }
    return cartQun
  }

}
