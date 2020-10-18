<template>
    <div class="">
        <one-wishlist-product v-for="currentWishlistProduct in wishlistProductsList"
                              :key="currentWishlistProduct.product.id"
                              :wishlist-product="currentWishlistProduct"/>
    </div>
</template>

<script>


  import OneWishlistProduct from './OneWishlistProduct'
  import wishlistGetters from 'pages/public/wishlist/store/getters'
  import loginGetters from 'pages/public/login/store/getters'

  export default {
    //  ================================================================================
    //  ========================   GLOBAL AWARENESS   ==================================
    //  ================================================================================
    name: 'ProductsWishlist',

    parent: {},
    //  ================================================================================
    //  ========================   CUSTOM MIDDLEWARE   =================================
    //  ================================================================================
    layout: 'PublicPortal',
    //  ================================================================================
    //  ==========================   DEPENDENCIES   ====================================
    //  ================================================================================
    components: {
      OneWishlistProduct,

    },
    directives: {},
    filters: {},
    //  ================================================================================
    //  ===========================   COMPOSITION   ====================================
    //  ================================================================================
    mixins: [],
    extends: {},
    //  ================================================================================
    //  ========================   COMPONENT INTERFACE   ===============================
    //  ================================================================================
    inheritAttrs: {},
    model: {},
    props: {},
    //  ================================================================================
    //  ============================   LOCAL STATE   ===================================
    //  ================================================================================
    data: function () {
      return {}
    },
    computed: {
      currentUser () {
        return this.$store.getters[loginGetters.GET_CURRENTUSER]
      },

      wishlistProductsList () {
        const allWishlistProducts = this.$store.getters[wishlistGetters.GET_WISHLIST_PRODUCTS_LIST]
        let filteredWishlist = []
        for (let currentProduct of allWishlistProducts) {
          if (this.currentUser.id === currentProduct.user) {
            filteredWishlist.push(currentProduct)
          }
        }
        return filteredWishlist
      },

    },
    //  ================================================================================
    //  ========================   NON-REACTIVE PROPERTIES   ===========================
    //  ================================================================================
    methods: {}
  }
</script>

<style scoped>

</style>
