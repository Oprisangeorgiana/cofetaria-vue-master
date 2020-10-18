<template>
  <div>
    <div class="row upbar">
      <div class="col-1">
        <router-link to="/">
          <img src="/img/cofetaria.png" class="upbar_element m-5 ">
        </router-link>
      </div>

      <div class="col-9 display-flex upbar_element ">
        <button class="upbar_element btn">
          Contact
        </button>
        <button class="upbar_element btn" @click="onNavigateAbout">
          Despre
        </button>
        <button class="upbar_element btn" @click="onNavigateProducts">
          Products
        </button>
        <div v-if="currentUser">
          <button class="upbar_element btn" @click="onNavigateAdmin">
            Admin
          </button>
        </div>

      </div>

      <div class="col-2 display-flex upbar_element to_the_right">
        <button id="user" class="login btn" @click="onNavigateLogin">
          {{ activeUserName }}
        </button>


        <button class="upbar_element btn" @click="onNavigateWishlist">
          Wishlist
        </button>
        <span class="badge badge-secondary">{{ wishlistProductsListCount }}</span>

        <button class="upbar_element btn" @click="onNavigateCart">
          Coș
        </button>
        <span class="badge badge-secondary">{{ cartProductsNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>

  import cartGetter from 'pages/public/cart/store/getters'
  import wishlistGetter from 'pages/public/wishlist/store/getters'
  import RouterContants from '../../../router/RouterContants'
  import toolbarActions from './store/actions'
  import globalGetters from '../../../store/global/getters'

  export default {

    name: 'ToolbarComponent',
//================================================================================
    layout: 'PublicPortal',
//================================================================================
    props: {},
//================================================================================
    data: function () {
      return {
        myVar: 0

      }
    },
//================================================================================
    computed: {
      currentUser: function () {
        return this.$store.getters[globalGetters.GET_USER]
      },
      activeUserName () {
        if (!this.currentUser) {
          return 'Neautentificat'
        }

        return this.currentUser.fullName
      },

      cartProductsList () {
        return this.$store.getters[cartGetter.GET_CART_PRODUCTS_LIST]
      },
      cartProductsNumber () {
        let count = 0

        return this.$store.getters[cartGetter.GET_CART_TOTAL_PRODUCTS]
      },

      wishlistProducts () {
        return this.$store.getters[wishlistGetter.GET_WISHLIST_PRODUCTS_LIST]
      },
      wishlistProductsListCount () {
        let count = 0
        for (let currentProduct of this.wishlistProducts) {
          if (this.currentUser.id === currentProduct.user) {
            count = count + 1
          }
        }
        return count

        return this.wishlistProducts.length
      }
    },
    mounted () {
      this.$store.dispatch(toolbarActions.FETCH_CART)
    },
//================================================================================
    methods: {
      getUser (userList) {
        return
      },
      onNavigateAbout () {
        this.$router.push(RouterContants.ABOUT)
      },
      onNavigateCart () {
        this.$router.push(RouterContants.CART)
      },
      onNavigateLogin () {
        this.$router.push(RouterContants.LOGIN)
      },
      onNavigateWishlist () {
        this.$router.push(RouterContants.WISHLIST)
      },
      onNavigateProducts () {
        this.$router.push(RouterContants.PRODUCTS_LIST)
      },
      onNavigateAdmin () {
        this.$router.push(RouterContants.ADMIN)
      }
    }
  }

</script>

<style scoped>

  .upbar_element {
    font-style: oblique;
    font-family: "American ", serif;
    max-height: 35px;
  }

  .login {
    font-style: oblique;
    font-family: "American ", serif;
    max-height: 60px;
    padding: 0px 16px;
  }

  .upbar {
    border: 1px solid;
    border-bottom: 1px;
    height: 45px;
    background-color: #DCDCDC;
    padding: 0px 1px;
  }

  .to_the_right {
    display: flex;
    justify-content: flex-end;
    height: 100%;
  }
</style>
