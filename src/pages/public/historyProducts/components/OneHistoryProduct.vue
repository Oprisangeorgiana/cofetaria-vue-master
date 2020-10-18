<template>
    <div>
        <div class="item">

            <div class="image">
                <img :src="orderProduct.product.image">
            </div>

            <div class="description">
                <h5>{{orderProduct.product.name}}</h5>
            </div>

            <!--                        <quantity-buttons />-->
            <!--            <div class="total-price font-weight-bold">Cantitate: 33</div>-->


            <div class="total-price m-10"> {{orderProduct.product.price}} RON</div>
                        <div class="total-price font-weight-bold">
                            Quantity: {{orderProduct.quantity}}
                        </div>
                        <div class="total-price font-weight-bold">
                            Total: {{orderProduct.quantity * orderProduct.product.price}}
                        </div>

        </div>
    </div>
</template>

<script>

    import RouterContants from "../../../../router/RouterContants";


    export default {
        //  ================================================================================
        //  ========================   GLOBAL AWARENESS   ==================================
        //  ================================================================================
        name: 'One-history-product',

        parent: {},
        //  ================================================================================
        //  ========================   CUSTOM MIDDLEWARE   =================================
        //  ================================================================================
        layout: 'PublicPortal',
        //  ================================================================================
        //  ==========================   DEPENDENCIES   ====================================
        //  ================================================================================
        components: {
            // QuantityButtons,
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
            orderProduct: Object,
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
            onQuantityChanged(quantity) {

            }

        },
        //  ================================================================================
        //  ==========================   CUSTOM PROPERTIES   ===============================
        //  ================================================================================
        metaInfo() {
            return {}
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
        width: 115px;
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
        width: 83px;
        padding-top: 27px;
        text-align: center;
        font-size: 16px;
        color: #43484D;
        font-weight: 300;
    }

</style>
