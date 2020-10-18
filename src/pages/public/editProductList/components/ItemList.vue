<template>
  <div>

    <!-- Product #1 -->
    <div class="item">

      <div class="image col-3">
        <img :src="product.image">
      </div>

      <div class="description col-3">
        <h5>{{product.name}}</h5>
      </div>

      <div class="total-price col-3"> {{product.price}} RON</div>
      <div class="col-3">
        <button @click="editProduct">Edit</button>
        <button @click="deleteProduct">Delete</button>
      </div>

    </div>
  </div>
</template>

<script>
    import productActions from "../store/actions";
    import RouterContants from "../../../../router/RouterContants";

    export default {
        name: "ItemList",
        props: {
            product: Object
        },
        methods: {
            deleteProduct() {
                this.$store.dispatch(productActions.DELETE_PRODUCT, this.product)
                this.$store.dispatch(productActions.FETCH_PRODUCTS)
            },
            editProduct() {
                let newRoute = RouterContants.PRODUCT_EDIT
                newRoute = newRoute.replace(/:[a-zA-Z]+/, this.product.id)
                this.$router.push(newRoute)
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .item {
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
  }

  .item:nth-child(3) {
    border-top: 1px solid #E1E8EE;
    border-bottom: 1px solid #E1E8EE;
  }

  .buttons {
    position: relative;
    padding-top: 30px;
    margin-right: 60px;
  }

  .image {
    width: 350px;
    text-align: center;
  }


  .description {
    padding-top: 10px;
    margin-right: 60px;
  }

  .description h5 {
    display: block;
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

  .image img {
    width: 40%;
  }

  .total-price {
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }
</style>
