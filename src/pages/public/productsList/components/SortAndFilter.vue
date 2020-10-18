<template>
    <div>
        <div class="row sort">

            <div class="col-6 to_the_left">
                <p><select class="custom-select mt-15"
                           v-model="sortBy"
                >
                    <option selected>Sort</option>
                    <option>Pret Asc</option>
                    <option>Pret Desc</option>
                    <option>Nume</option>
                </select>
                </p>
            </div>
            <div class="col-6 to_the_right">
                <p><select class="custom-select mt-15"
                           v-model="pageSize"
                >
                    <option value=-1>Show all</option>
                    <option value=3>3</option>
                    <option value=6>6</option>
                    <option value=9>9</option>
                </select>
                </p>
            </div>
        </div>

    </div>
</template>

<script>


  import homeGetters from 'pages/public/productsList/store/getters'
  import homeMutations from 'pages/public/productsList/store/mutations'

  export default {

    name: 'sort-filter',
//================================================================================
    layout: 'PublicPortal',
//================================================================================
    props: {},
//================================================================================
    data: function () {
      return {}
    },
    //================================================================================
    computed: {
      sortBy: {
        get () {
          return this.$store.getters[homeGetters.GET_SORTBY]
        },
        set (value) {
          this.$store.commit(homeMutations.SET_SORTBY, value)
        }
      },
      pageSize : {
        get () {
          return this.$store.getters[homeGetters.GET_PAGESIZE]
        },
        set (value) {
          this.$store.commit(homeMutations.SET_PAGESIZE, value)
        }
      }

    },

//================================================================================
    watch: {},

    mounted () {

    },
    //================================================================================

    methods: {},

  }
</script>

<style scoped>



    .to_the_left {
        display: flex;
        justify-content: flex-start;
        height: 100%;
    }

    .to_the_right {
        display: flex;
        justify-content: flex-end;
        height: 100%;
    }

</style>
