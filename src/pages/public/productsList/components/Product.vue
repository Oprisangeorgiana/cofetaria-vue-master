<template>
    <div>
        <div class="card m-20"
             style="width: 20rem;"
        >
            <div @click="setProduct">
                <img class="card-img-top" :src="product.image" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{product.name}}</h5>
                    <p>{{product.type}}</p>
                    <p class="card-text">{{product.price}} RON{{product.details}}</p>
                </div>
            </div>
            <div class="card-body">
                <add-button :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>


  import AddButton from '@/components/AddButton.vue'
  import RouterContants from '../../../../router/RouterContants'

  export default {

    name: 'products-grid',
    //================================================================================
    layout: 'PublicPortal',

    //================================================================================
    components: {
      AddButton,
    },
    props: {
      product: Object
    },
    //================================================================================
    data: function () {
      return {}
    },
    //================================================================================
    computed: {},

    methods: {
      setProduct () {
        let newRoute = RouterContants.PRODUCT_DETAILS
        newRoute = newRoute.replace(/:[a-zA-Z]+/, this.product.id)
        this.$router.push(newRoute)
      },

    }

  }
</script>

<style scoped>

</style>
