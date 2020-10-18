import Vue from 'vue'
import Router from 'vue-router'
import RouterContants from './RouterContants'
import globalStoreGetters from '../store/global/getters'
import store from '../store/store'

const productDetailsPage = () => import(/* webpackChunkName: "product" */ 'pages/public/productPage/ProductPage.vue')
const productListEditPage = () => import(/* webpackChunkName: "products_edit" */ 'pages/public/editProductList/EditProductList.vue')
const productEditPage = () => import(/* webpackChunkName: "product" */ 'pages/public/editProduct/EditProduct.vue')
const productsListPage = () => import(/* webpackChunkName: "product" */ 'pages/public/productsList/ProductsList.vue')
const aboutPage = () => import(/* webpackChunkName: "about" */ 'pages/public/About.vue')
const cartPage = () => import(/* webpackChunkName: "cart" */ 'pages/public/cart/Cart.vue')
const wishlistPage = () => import(/* webpackChunkName: "wishlist" */ 'pages/public/wishlist/Wishlist.vue')
const firstPage = () => import(/* webpackChunkName: "cart" */ 'pages/public/first/First.vue')
const loginPage = () => import(/* webpackChunkName: "login" */ 'pages/public/login/Login.vue')
const signinPage = () => import(/* webpackChunkName: "signin" */ 'pages/public/sign/Signin.vue')
const errorPage = () => import(/* webpackChunkName: "login" */ 'pages/public/error/Error.vue')
const historyPage = () => import(/* webpackChunkName: "history" */ 'pages/public/history/History.vue')
const adminIngredientsPage = () => import(/* webpackChunkName: "ingredients" */ 'pages/public/ingredientsManagement/ingredientsManagement.vue')
const editIngredientsPage = () => import(/* webpackChunkName: "editIngredients" */ 'pages/public/ingredientsManagement/components/EditIngredients.vue')
const historyOrderDetailsPage = () => import(/* webpackChunkName: "products" */ 'pages/public/historyProducts/HistoryProducts.vue')
const adminPage = () => import(/* webpackChunkName: "AdminHome" */ 'pages/admin/home/Home.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: RouterContants.PRODUCTS_LIST,
      name: productsListPage.name,
      component: productsListPage
    },
    {
      path: RouterContants.PRODUCTS_LIST_EDIT,
      name: productListEditPage.name,
      component: productListEditPage
    },
    {
      path: RouterContants.PRODUCT_DETAILS,
      name: productDetailsPage.name,
      component: productDetailsPage
    },
    {
      path: RouterContants.PRODUCT_EDIT,
      name: productEditPage.name,
      component: productEditPage
    },
    {
      path: RouterContants.ABOUT,
      name: aboutPage.name,
      component: aboutPage
    },
    {
      path: RouterContants.SIGNIN,
      name: signinPage.name,
      component: signinPage
    },
    {
      path: RouterContants.CART,
      name: cartPage.name,
      component: cartPage
    },
    {
      path: RouterContants.WISHLIST,
      name: wishlistPage.name,
      component: wishlistPage
    },
    {
      path: RouterContants.HOME,
      name: firstPage.name,
      component: firstPage
    },
    {
      path: RouterContants.LOGIN,
      name: loginPage.name,
      component: loginPage
    },
    {
      path: RouterContants.NOT_FOUND,
      name: errorPage.name,
      component: errorPage
    },
    {
      path: RouterContants.INGREDIENTS_ADMIN,
      name: adminIngredientsPage.name,
      component: adminIngredientsPage
    },
    {
      path: RouterContants.EDIT_INGREDIENTS,
      name: editIngredientsPage.name,
      component: editIngredientsPage
    },
    {
      path: RouterContants.HISTORY,
      name: historyPage.name,
      component: historyPage
    },
    {
      path: RouterContants.HISTORY_PRODUCTS,
      name: historyOrderDetailsPage.name,
      component: historyOrderDetailsPage
    },
    {
      path: RouterContants.ADMIN,
      name: adminPage.name,
      component: adminPage,
      beforeEnter: guard,
      children: [
        {
          path: 'about',
          name: adminPage.name,
          component: adminPage
        }

      ]
    }

  ]
})

async function guard (to, from, next) {
  if (!store.getters[globalStoreGetters.IS_ADMIN]) {
    if (store.getters[globalStoreGetters.IS_LOGGED_IN])
      next(RouterContants.HOME)
    else
      next(RouterContants.LOGIN)
  }
  next()
}
