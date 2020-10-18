<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <toolbar-component>
        </toolbar-component>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h2>{{productName}}</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-4">

        <img v-if="productImage"
             :src="productImage"
             class="card-img-top" alt="Card image cap">
        <div v-else
             style="width: 250px; height: 250px; background: grey"></div>
      </div>
      <div class="col-6">
        <p>
          Ingrediente:
        </p>
        <ul v-for="ingredient in productIngredients "
            :key="ingredient">
          <li>
            {{ingredient}}
          </li>
        </ul>

        <br>
        <p>
          Pret: {{productPrice}} RON {{productDetails}}
        </p>
        <br>
        <div v-if="currentUser">
          <wishlist-button :product="product"/>
        </div>
        <p>
          <add-button :product="product">
          </add-button>
        </p>

      </div>
      <div class="col-2" v-if="hasPermissionToEdit" @click="editProduct">
        <i class="fas fa-pen" @click="editProduct"></i>
      </div>
    </div>


    <div class="row categoryTitle mt-10">
      <div class="col-12">
        <AppFooter></AppFooter>
      </div>
    </div>

  </div>


</template>

<script>
  // @ is an alias to /src

  import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
  import AppFooter from '@/components/UI-kit/AppFooter'
  import AddButton from '@/components/AddButton.vue'
  import WishlistButton from './components/WishlistButton'
  import productGetters from 'pages/public/productPage/store/getters'
  import loginGetters from 'pages/public/login/store/getters'
  import productActions from 'pages/public/productPage/store/actions'
  import RouterContants from '../../../router/RouterContants'
  import productMutations from './store/mutations'

  export default {
    name: 'productPage',

    components: {
      WishlistButton,
      ToolbarComponent,
      AppFooter,
      AddButton

    },

    data: function () {
      return {
        productID: this.$route.params.id
      }
    },

    computed: {

      hasPermissionToEdit () {
        return this.$store.getters[loginGetters.GET_USER_UPDATE_PERMISSION]
      },

      currentUser () {
        return this.$store.getters[loginGetters.GET_CURRENTUSER]
      },

      product () {
        return this.$store.getters[productGetters.GET_PRODUCT]
      },

      productName () {
        return _.get(this.product, 'name', ' - ')
      },
      productPrice () {
        return _.get(this.product, 'price')
      },
      productDetails () {
        return _.get(this.product, 'details')
      },
      productImage () {
        return _.get(this.product, 'image')
      },
      productIngredients () {
        let name = []
        const ingredients = _.get(this.product, 'ingredients', ' Lista goala ')
        for (let ingredient of ingredients) {
          name.push(ingredient.name)
        }
        return name

      }
    },

    methods: {
      editProduct () {
        let newRoute = RouterContants.PRODUCT_EDIT
        newRoute = newRoute.replace(/:[a-zA-Z]+/, this.productID)
        this.$router.push(newRoute)
      }
    },
    mounted () {
      this.$store.commit(productMutations.CLEAR_STATE)
      this.$store.dispatch(productActions.FETCH_PAGE_DETAILS, this.productID)
    }
  }
</script>

<style scoped>

</style>
