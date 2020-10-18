<template>
    <public-page-layout>

        <div class="row  mt-10 content-wrap">
            <div class="col-12">
                <div class="row mt-10">

                    <div class="col-2 category ">
                        <app-side-bar/>
                    </div>

                    <div class="col-10 ">
                        <div class="m-10">
                            <div class="row category">
                                <div class="col-12">
                                    <sort-and-filter/>
                                </div>
                            </div>
                            <div class="row category mt-10">
                                <div class="col-12">
                                    <div>
                                        <div class="row">
                                            <product
                                                    v-for="currentProduct in filteredList"
                                                    :key="currentProduct.id"
                                                    :product="currentProduct"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row bg-secondary mt-10">
                                <div class="col-12">
                                    <pagination-component>
                                    </pagination-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </public-page-layout>

</template>

<script>
    // @ is an alias to /src

    import ToolbarComponent from 'components/UI-kit/Toolbar/ToolbarComponent'
    import AppSideBar from 'pages/public/productsList/components/AppSideBar'
    import AppFooter from 'components/UI-kit/AppFooter'
    import SortAndFilter from 'pages/public/productsList/components/SortAndFilter'
    import Product from 'pages/public/productsList/components/Product'
    import PaginationComponent from 'pages/public/productsList/components/PaginationComponent.vue'
    import pageGetters from 'pages/public/productsList/store/getters'
    import pageActions from 'pages/public/productsList/store/actions'
    import PublicPageLayout from "../../../layouts/PublicPageLayout";

    export default {
        name: 'ProductsList',
        components: {
            PublicPageLayout,
            ToolbarComponent,
            SortAndFilter,
            Product,
            AppFooter,
            AppSideBar,
            PaginationComponent
        },
        data: function () {
            return {}
        },
        mounted() {
            this.$store.dispatch(pageActions.FETCH_PAGE_DETAILS)
        },
        computed: {

            sortBy() {
                return this.$store.getters[pageGetters.GET_SORTBY]
            },
            pageSize() {
                return this.$store.getters[pageGetters.GET_PAGESIZE]
            },

            filteredList() {
                return this.$store.getters[pageGetters.GET_PAGINATED_PROCESSED_PRODUCTS_LIST]
            }
        },

        methods: {}

    }
</script>

<style scoped>
    .page-container {
        position: relative;
        min-height: 100vh;
    }

    .content-wrap {
        padding-bottom: 2.5rem; /* Footer height */
    }
</style>
