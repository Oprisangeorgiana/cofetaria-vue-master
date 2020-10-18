<template>
    <div>
        <div v-if="isInWishlist">
            <div>
                <p class="btn btn-primary" @click="deleteFromWishlist">
                    Scoate din WISHLIST
                </p>
            </div>
        </div>
        <div v-else>
            <div>
                <p class="btn btn-primary" @click="addToWishlist">
                    Adaugă în WISHLIST
                </p>
            </div>

        </div>
    </div>
</template>

<script>


  import wishlistMutations from 'pages/public/wishlist/store/mutations'
  import wishlistGetters from 'pages/public/wishlist/store/getters'
  import loginGetters from 'pages/public/login/store/getters'

  export default {
    //  ================================================================================
    //  ========================   GLOBAL AWARENESS   ==================================
    //  ================================================================================
    name: 'wishlistButton',
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
      product: Object,
      buttonText: String,
    },
    //  ================================================================================
    //  ============================   LOCAL STATE   ===================================
    //  ================================================================================
    data: function () {
      return {}
    },
    computed: {
      isInWishlist(){

        let obj = null
        if(this.product) {
          let product = this.product
          obj = this.wishlistDictionary.find(function (item) {
            return item.product.id === product.id
          })
        }
        return obj
      },
      wishlistDictionary () {
        let Obj = _.cloneDeep(this.$store.getters[wishlistGetters.GET_WISHLIST_PRODUCTS_DICTIONARY])
        const arrayOfObj = Object.entries(Obj).map((e) => ( { [e[0]]: e[1] } ))
        let user = this.currentUser
        let filterArrayOfObj= arrayOfObj.filter(function(object) {
            if(user !== null)
            return Object.values(object)[0].user=== user.id
        })
        let newArray=[]

        filterArrayOfObj.forEach(function(object){
          newArray.push(Object.values(object)[0])
        })
        return newArray
      },
      currentUser(){
        return this.$store.getters[loginGetters.GET_CURRENTUSER]
      }
    },
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


      addToWishlist: function () {
        const wishlistProductsDictionary = _.cloneDeep(this.$store.getters[wishlistGetters.GET_WISHLIST_PRODUCTS_DICTIONARY])
          wishlistProductsDictionary[this.product.id] = {
            product: this.product,
            user: this.currentUser.id
          }
        this.$store.commit(wishlistMutations.SET_WISHLIST_PRODUCTS_DICTIONARY, wishlistProductsDictionary)
      },

      deleteFromWishlist () {
        const wishlistProductsDictionary = _.cloneDeep(this.$store.getters[wishlistGetters.GET_WISHLIST_PRODUCTS_DICTIONARY])
        delete wishlistProductsDictionary[this.product.id]
        this.$store.commit(wishlistMutations.SET_WISHLIST_PRODUCTS_DICTIONARY, wishlistProductsDictionary)
      }

    },
    //  ================================================================================
    //  ==========================   CUSTOM PROPERTIES   ===============================
    //  ================================================================================
    metaInfo () {
      return {}
    }

  }

</script>

<style>

</style>
