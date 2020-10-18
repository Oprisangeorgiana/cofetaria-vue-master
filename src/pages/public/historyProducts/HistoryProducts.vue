<template>
  <public-page-layout>
    <div class="row title">
      <h2>PRODUCTS</h2>
    </div>

    <div class="row products">
      <div class="col-12">
        <div class="">
          <one-history-product v-for="orderProduct in orderProducts"
                               :orderProduct="orderProduct"
          />
        </div>
        <p class="btn btn-primary" @click="addToCart">
          Adaugă în coș
        </p>
      </div>
    </div>
  </public-page-layout>
</template>

<script>
    // @ is an alias to /src
    import OneHistoryProduct from "./components/OneHistoryProduct";
    import pageActions from "./store/actions";
    import pageGetters from "./store/getters";
    import PublicPageLayout from "../../../layouts/PublicPageLayout";


    export default {
        name: 'HistoryProducts',
        components: {
            PublicPageLayout,
            OneHistoryProduct,
        },
        data: function () {
            return {}
        },
        computed: {
            orderProducts() {
                return this.$store.getters[pageGetters.GET_ORDER_PRODUCTS]
            },
            order() {
                return this.$store.getters[pageGetters.GET_ORDER]
            }


        },
        async mounted() {
            await this.$store.dispatch(pageActions.FETCH_PAGE_DETAILS, this.$route.params.id)
        },

        methods: {
            addToCart() {
            }
        }

    }
</script>

<style scoped>
    .products {
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

    .image img {
        width: 50%;
    }
</style>
