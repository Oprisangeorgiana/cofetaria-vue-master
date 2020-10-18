    <template>
    <div>

        <div class="row item">

            <div class="col-3 m-25 image" @click="goProduct">
                <img :src="wishlistProduct.product.image">
            </div>

            <div class="col-3 m-25 item">
                <h5>{{wishlistProduct.product.name}}</h5>
            </div>

            <div class="col-3 m-25 item">
                <h6>{{wishlistProduct.product.price}} RON {{wishlistProduct.product.details}}</h6>
            </div>

            <div>
                <p class="btn btn-primary" @click="deleteProduct">Sterge produsul</p>
            </div>

        </div>
    </div>
</template>

<script>

  import wishlistMutations from 'pages/public/wishlist/store/mutations'
  import wishlistGetters from 'pages/public/wishlist/store/getters'
  import RouterContants from 'router/RouterContants'



  export default {
    //  ================================================================================
    //  ========================   GLOBAL AWARENESS   ==================================
    //  ================================================================================
    name: 'WishlistProduct',

    parent: {},
    //  ================================================================================
    //  ========================   CUSTOM MIDDLEWARE   =================================
    //  ================================================================================
    layout: 'PublicPortal',
    //  ================================================================================
    //  ==========================   DEPENDENCIES   ====================================
    //  ================================================================================
    components: {},
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
    props: {
      wishlistProduct: Object,
    },
    //  ================================================================================
    //  ============================   LOCAL STATE   ===================================
    //  ================================================================================
    data: function () {
      return {}

    },
    computed: {},
    //  ================================================================================
    //  ==============================   EVENTS   ======================================
    //  ================================================================================
    watch: {},
    mounted: function () {
    },
    //  ================================================================================
    //  ========================   NON-REACTIVE PROPERTIES   ===========================
    //  ================================================================================
    methods: {

      deleteProduct () {
        const wishlistProductsDictionary = _.cloneDeep(this.$store.getters[wishlistGetters.GET_WISHLIST_PRODUCTS_DICTIONARY])
        delete wishlistProductsDictionary[this.wishlistProduct.product.id]
        this.$store.commit(wishlistMutations.SET_WISHLIST_PRODUCTS_DICTIONARY, wishlistProductsDictionary)
      },

      goProduct () {
        let newRoute = RouterContants.PRODUCT_DETAILS
        newRoute = newRoute.replace(/:[a-zA-Z]+/, this.wishlistProduct.product.id)
        this.$router.push(newRoute)
      },

    },
    //  ================================================================================
    //  ==========================   CUSTOM PROPERTIES   ===============================
    //  ================================================================================
    metaInfo () {
      return {}
    }

  }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .image {
        width: 400px;
        text-align: center;
    }

    img{
        width: 90%;
    }

    .item{
        padding: 30px;
    }
</style>
