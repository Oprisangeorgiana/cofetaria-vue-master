<template>
    <div>
        <div class="row bar">

            <div class="col-12 to_the_right">
                <page-button
                        class=" buttonstyle"
                        v-for="number in pageNumbers"
                        @on-pressed="onCategoryPressed"
                        :text="number"
                        :is-active="currentPage===number"
                />
            </div>
        </div>

    </div>
</template>

<script>


  import PageButton from './PageButton'
  import homeGetters from 'pages/public/productsList/store/getters'
  import homeMutations from 'pages/public/productsList/store/mutations'

  export default {

    name: 'pagination-component',
    components: { PageButton },
    //================================================================================
    layout: 'PublicPortal',

    //================================================================================

    //================================================================================

    props: {},
    computed: {
      pageNumbers () {
        return this.$store.getters[homeGetters.GET_PAGE_NUMBER]
      },
      currentPage () {
        return this.$store.getters[homeGetters.GET_CURRENT_PAGE]
      }
    },
    //================================================================================
    watch: {},
    //================================================================================
    methods: {
      onCategoryPressed (currentPage) {
        this.$store.commit(homeMutations.SET_CURRENT_PAGE, currentPage)

      }
    },

  }
</script>

<style scoped>

    .bar {
        height: 40px;
        background-color: #DCDCDC;
        padding: 0px 1px;

    }

    .to_the_right {
        display: flex;
        justify-content: flex-end;
        height: 100%;
    }

    .buttonstyle{
        border-radius: 8px;
        color: black;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        background-color:#FDF5E6;
    }
</style>
