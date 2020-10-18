import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from '@/pages/public/productsList/store/index'
import cartStore from '@/pages/public/cart/store/index'
import loginStore from '@/pages/public/login/store/index'
import pageStore from '@/pages/public/productPage/store/index'
import historyStore from '@/pages/public/history/store/index'
import wishlistStore from '@/pages/public/wishlist/store/index'
import editPageStore from '@/pages/public/editProduct/store/index'
import editProductListStore from '@/pages/public/editProductList/store/index'
import signinStore from '@/pages/public/sign/store/index'
import ingredientsManagementStore from '@/pages/public/ingredientsManagement/store/index'
import historyProductsStore from '@/pages/public/historyProducts/store/index'
import toolbarStore from '@/components/UI-kit/Toolbar/store/index'
import globalStore from './global/index'
import adminLayoutStore from '@/layouts/componentsAdmin/store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homeStore: homeStore,
    cartStore: cartStore,
    loginStore: loginStore,
    pageStore: pageStore,
    wishlistStore: wishlistStore,
    historyStore: historyStore,
    editPageStore: editPageStore,
    signinStore: signinStore,
    historyProducts: historyProductsStore,
    editProductListStore: editProductListStore,
    ingredientsManagementStore: ingredientsManagementStore,
    toolbarStore: toolbarStore,
    globalStore: globalStore,
    adminLayoutStore: adminLayoutStore
  }
})
