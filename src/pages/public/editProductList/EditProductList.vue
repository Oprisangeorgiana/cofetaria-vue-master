<template>
  <div class="container-fluid">
    <admin-page-layout>

    <div class="row">
      <h1>All Products</h1>
    </div>
    <div class="row">
      <div class="shopping-cart">
        <div class="row">
          <div class="">
            <item-list v-for="product in products"
                       :key="product.id"
                       :product="product"/>
          </div>
        </div>
      </div>
    </div>

    </admin-page-layout>

  </div>
</template>

<script>
  import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
  import AppFooter from '@/components/UI-kit/AppFooter'
  import productActions from 'pages/public/editProductList/store/actions'
  import productGetters from 'pages/public/editProductList/store/getters'
  import ItemList from './components/ItemList'
  import adminPageLayout from '../../../layouts/AdminPageLayout'

  export default {
    name: 'EditProductList',
    components: {
      ItemList,
      ToolbarComponent,
      AppFooter,
      adminPageLayout,
    },
    computed: {
      products () {
        return this.$store.getters[productGetters.GET_PRODUCTS]
      }
    },
    data: function () {
      return {}
    },
    methods: {},
    mounted () {
      this.$store.dispatch(productActions.FETCH_PRODUCTS)
    }
  }
</script>

<style scoped>
  .shopping-cart {
    width: 1000px;
    min-height: 500px;
    height: auto;
    margin: 100px auto;
    background: #DCDCDC;
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    display: flex;


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

  .description span {
    display: block;
    font-size: 14px;
    color: #43484D;
    font-weight: 400;
  }

  .description span:first-child {
    margin-bottom: 5px;
  }

  .description span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }

  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }


  .minus-btn img {
    margin-bottom: 3px;
  }

  .plus-btn img {
    margin-top: 2px;
  }

  button:focus,
  input:focus {
    outline: 0;
  }


  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .image img {
      width: 50%;
    }
  }
</style>
