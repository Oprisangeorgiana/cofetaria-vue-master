import store from "js-store";

export default {
  user: store.get('user') || null,
  isFetchingUser: false
}
