<template>
    <div class="quantity ">
        <div>
            <button @click="increment">
                <img src="img\plus.svg"/>
            </button>
            <input :value="cartProduct.quantity">
            <button @click="decrement">
                <img src="img\minus.svg"/>
            </button>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    import {mapGetters} from 'vuex'
    import cartMutations from 'pages/public/cart/store/mutations'
    import cartGetters from 'pages/public/cart/store/getters'

    export default {
        //  ================================================================================
        //  ========================   GLOBAL AWARENESS   ==================================
        //  ================================================================================
        name: 'quantity-button',

        //  ================================================================================
        layout: 'PublicPortal',

        //  ================================================================================
        components: {},

        //  ================================================================================

        props: {
            cartProduct: Object,

        },

        //  ================================================================================
        data: function () {
            return {}
        },

        //  ================================================================================

        //  ================================================================================
        methods: {
            increment() {
                const cartProductsDictionary = _.cloneDeep(this.$store.getters[cartGetters.GET_CART_PRODUCTS_DICTIONARY])
                cartProductsDictionary[this.cartProduct.product.id].quantity++
                this.$store.commit(cartMutations.SET_CART_PRODUCTS_DICTIONARY, cartProductsDictionary)

            },
            decrement() {
                const cartProductsDictionary = _.cloneDeep(this.$store.getters[cartGetters.GET_CART_PRODUCTS_DICTIONARY])
                if (cartProductsDictionary[this.cartProduct.product.id].quantity > 1) {
                    cartProductsDictionary[this.cartProduct.product.id].quantity--
                } else {
                    delete cartProductsDictionary[this.cartProduct.product.id]
                }
                this.$store.commit(cartMutations.SET_CART_PRODUCTS_DICTIONARY, cartProductsDictionary)

            },
        },

    }
</script>

<style scoped>


    .quantity {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 115px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quantity input {
        -webkit-appearance: none;
        border: none;
        text-align: center;
        width: 32px;
        font-size: 22px;
        font-family: "Apple Color Emoji";
        background-color: #DCDCDC;
        font-weight: 300;
    }


    .minus-btn img {
        margin-bottom: 3px;
        align-content: center;
        vertical-align: middle;

    }

    .plus-btn img {
        margin-top: 2px;
        align-content: center;
        vertical-align: middle;
    }

    button:focus,
    input:focus {
        outline: 0;

    }
</style>
