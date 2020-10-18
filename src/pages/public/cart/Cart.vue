<template>
  <public-page-layout>

    <div class="shopping-cart row container-fluid ">
      <!-- Title -->
      <span class="title">Shopping Bag</span>

      <products-cart class="container-fluid row" :cart-products-list="cartProductsList"/>

      <div class=" container-fluid row totalspace">
                    <span class=" col-md-3 totalprice">
                            Total: <!-- pretul total din Vuex: cartProductsTotalPrice-->
                            {{cartProductsTotalPrice}} RON
                        </span>

        <div class="orderbuttonspace col-2">
          <div class="orderbutton" type="button" @click="placeOrder">
            Plasează Comanda
          </div>
        </div>
      </div>
    </div>

  </public-page-layout>

</template>

<script>
  // @ is an alias to /src

  import ProductsCart from './components/ProductsCart'
  import cartGetters from 'pages/public/cart/store/getters'
  import cartActions from './store/actions'
  import PublicPageLayout from '../../../layouts/PublicPageLayout'

  export default {
    name: 'Cart',
    components: {
      PublicPageLayout,
      ProductsCart

    },
    props: {
      product: Object
    },
    data:
      function () {
        return {}
      },

    computed: {
      cartProductsList () {
        return this.$store.getters[cartGetters.GET_CART_PRODUCTS_LIST]
      },
      cartProductsTotalPrice(){
        return this.$store.getters[cartGetters.GET_CART_TOTAL_PRICE]
      }
    },
    methods: {
      placeOrder () {
        this.$store.dispatch(cartActions.PLACE_ORDER)
      }
    },
    mounted () {
      this.$store.dispatch(cartActions.FETCH_PAGE_DETAILS, 3)
    }
  }

</script>

<style scoped>

  .shopping-cart {
    width: 1000px;
    min-height: 500px;
    margin: 50px auto;
    background: #DCDCDC;
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    display: flex;
    position: relative;
  }

  .title {
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    display: flex;
  }

  .totalspace {
    height: 50px;
    position: absolute;
    bottom: 1px;
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
  }

  .totalprice {
    color: #5E6977;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    border-top: 3px solid #E1E8EE;
  }

  .orderbuttonspace {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .orderbutton {
    width: 100px;
    height: 50px;
    background-size: 50%;
    cursor: pointer;
    text-align: center;
  }

  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
</style>
