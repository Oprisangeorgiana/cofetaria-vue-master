<template>
    <div class="container-fluid">

        <div>
            <toolbar-component/>
        </div>
        <div class="">
            <one-order v-for="currentOrder in filteredOrderList"
                       :order="currentOrder"
            />
        </div>

        <div class="row categoryTitle mt-10">
            <div class="col-12">
                <AppFooter></AppFooter>
            </div>
        </div>

    </div>
</template>

<script>

    import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
    import AppFooter from '@/components/UI-kit/AppFooter'
    import historyActions from './store/actions'
    import OneOrder from 'pages/public/history/components/OneOrder'
    import historyGetters from 'pages/public/history/store/getters'
    import loginGetters from 'pages/public/login/store/getters'
    import globalGetters from "../../../store/global/getters";


    export default {
        //  ================================================================================
        //  ========================   GLOBAL AWARENESS   ==================================
        //  ================================================================================
        name: 'history',
        parent: {},
        //  ================================================================================
        //  ========================   CUSTOM MIDDLEWARE   =================================
        //  ================================================================================
        layout: 'PublicPortal',
        //  ================================================================================
        //  ==========================   DEPENDENCIES   ====================================
        //  ================================================================================
        components: {
            AppFooter,
            ToolbarComponent,
            OneOrder
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
        props: {},
        //  ================================================================================
        //  ============================   LOCAL STATE   ===================================
        //  ================================================================================
        data: function () {
            return {}
        },
        computed: {

            orders() {
                return this.$store.getters[historyGetters.GET_ORDERS]
            },
            currentUser() {
                return this.$store.getters[globalGetters.GET_USER]
            },
            filteredOrderList() {
                console.log('current User',this.currentUser)
                return this.orders.filter(currentOrder=>this.currentUser.id === currentOrder.user_id)

            },

        },
        //  ================================================================================
        //  ==============================   EVENTS   ======================================
        //  ================================================================================
        watch: {},
        mounted() {
            this.$store.dispatch(historyActions.FETCH_ORDERS)
        },
        //  ================================================================================
        //  ========================   NON-REACTIVE PROPERTIES   ===========================
        //  ================================================================================
        methods: {},
        //  ================================================================================
        //  ==========================   CUSTOM PROPERTIES   ===============================
        //  ================================================================================
        metaInfo() {
            return {}
        }

    }
</script>

<style>

</style>
