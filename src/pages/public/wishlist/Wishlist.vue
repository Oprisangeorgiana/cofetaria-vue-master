<template>
    <public-page-layout>

        <div class="wishlist row container-fluid ">
            <!-- Title -->
            <div>
            <span class="title">
                    WISHLIST
                </span>
            <span class="subtitle">
                *Click pe imagine pentru a vedea produsul!
            </span>
            </div>

            <div class="col-12">
                <products-wishlist>
                </products-wishlist>
            </div>
        </div>

    </public-page-layout>
</template>

<script>
    // @ is an alias to /src

    import ToolbarComponent from 'components/UI-kit/Toolbar/ToolbarComponent'
    import AppFooter from 'components/UI-kit/AppFooter'
    import ProductsWishlist from 'pages/public/wishlist/components/ProductsWishlist'
    import PublicPageLayout from "../../../layouts/PublicPageLayout";

    export default {
        name: 'Wishlist',
        components: {
            PublicPageLayout,
            ProductsWishlist,

        },
        props: {},
        data:
            function () {
                return {}
            },
        computed: {},

        methods: {}
    }


</script>

<style scoped>

    .wishlist {
        width: 1000px;
        min-height: 500px;
        margin: 50px auto;
        background: #DCDCDC;
        box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.10);
        border-radius: 6px;
        display: flex;
        position: relative;
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

    .subtitle{
        height: 20px;
        color: #5E6977;
        font-size: 10px;
        font-weight: 200;
        font-family: 'Roboto', sans-serif;

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
