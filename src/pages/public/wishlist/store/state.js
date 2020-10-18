import store from"js-store"


export default {
  wishlistProducts: store.get("wishlist")||{},
}

