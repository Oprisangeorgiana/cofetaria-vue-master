<template>
    <!-- Product  -->
    <div class="item row">

        <div class="description col-sm ">
            <like-button class="col-sm"/>
        </div>

        <div class="description col-sm" >
            <span style="font-size: 32px; color: dimgrey;" @click="deleteProduct">
                    <i class="far fa-trash-alt "></i>
            </span>

        </div>

        <div class="imagespace col-sm" @click="goProduct">
            <img class="image" :src="cartProduct.product.image">
        </div>

        <div class="description col-sm ">
            <div>
                <h5 @click="goProduct"> {{ cartProduct.product.name }} </h5>
                <span class=""> {{ cartProduct.product.price }} RON </span>
            </div>
        </div>

        <quantity-buttons class="col-sm" :cart-product=" this.cartProduct "/>

        <div class="col-sm payspace">
            <span class="total-price m-5"> {{ cartProduct.product.price * cartProduct.quantity }} RON  </span>
        </div>

    </div>

</template>

<script>


    import LikeButton from './LikeButton'
    import QuantityButtons from './QuantityButtons'
    import cartMutations from 'pages/public/cart/store/mutations'
    import cartGetters from 'pages/public/cart/store/getters'
    import cartActions from 'pages/public/cart/store/actions'
    import RouterContants from 'router/RouterContants'


    export default {
        //  ================================================================================
        //  ========================   GLOBAL AWARENESS   ==================================
        //  ================================================================================
        name: 'one-product-cart',

        parent: {},
        //  ================================================================================
        //  ========================   CUSTOM MIDDLEWARE   =================================
        //  ================================================================================
        layout: 'PublicPortal',
        //  ================================================================================
        //  ==========================   DEPENDENCIES   ====================================
        //  ================================================================================
        components: {
            LikeButton,
            QuantityButtons

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
        props: {
            cartProduct: Object,
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
            goProduct() {
                let newRoute = RouterContants.PRODUCT_DETAILS
                newRoute = newRoute.replace(/:[a-zA-Z]+/, this.cartProduct.product.id)
                this.$router.push(newRoute)
            },
            deleteProduct() {
                console.log(this.cartProduct)
                this.$store.dispatch(cartActions.DELETE_PRODUCT,this.cartProduct.product_id)
            },
        },
        //  ================================================================================
        //  ==========================   CUSTOM PROPERTIES   ===============================
        //  ================================================================================
        metaInfo() {
            return {}
        },

    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .item {
        padding: 10px 20px;
        margin-top: 2px;
        margin-bottom: 8px;
        display: flex;
    }

    .imagespace {
        width: 500px;
        text-align: center;
        cursor: zoom-in;
    }

    .image {
        width: 230px;
        height: 150px;
    }


    .description {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 115px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .description h5 {
        display: block;
        color: #0f0708;
        font-weight: 700;
        cursor: zoom-in;
        margin: 8px auto;
        text-align: center;
    }

    .description span {
        display: block;
        color: #200f11;
        font-weight: 500;
        text-align: center;

    }

    .payspace {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 115px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .total-price {
        text-align: center;
        display: block;
        color: #0f0708;
        font-weight: 700;
        font-family: "Apple Color Emoji";
    }
</style>
