<template>
  <div>
    <h4>EDIT:</h4>

    <app-button
      class="col"
      v-for="currentCategory in editCategories"
      :key="currentCategory"
      :text="currentCategory"
      :is-active="currentCategory===activeCategory"
      @on-pressed="onCategoryPressed(currentCategory)"
    />
  </div>
</template>


<script>

  import AppButton from '@/components/AppButton'
  import pageGetters from '@/layouts/componentsAdmin/store/getters'
  import pageMutations from '@/layouts/componentsAdmin/store/mutations'
  import RouterConstants from '../../router/RouterContants'

  export default {
    name: 'AdminSideBar',

    //================================================================================
    layout: 'PublicPortal',

    //================================================================================
    components: {
      AppButton
    },

    //================================================================================

    props: {},

    //================================================================================
    data: function () {
      return {}
    },
    //================================================================================
    computed: {

      editCategories () {
        return this.$store.getters[pageGetters.GET_EDIT_CATEGORIES_LIST]
      },

      activeCategory () {
        return this.$store.getters[pageGetters.GET_ADMIN_ACTIVE_CATEGORY]
      }

    },

    async mounted () {

    },
    //================================================================================
    methods: {

      onCategoryPressed (category) {
        this.$store.commit(pageMutations.SET_ADMIN_ACTIVE_CATEGORY, category)

        // if (category === this.editCategories[2]){
          this.$router.push(RouterConstants.INGREDIENTS_ADMIN)
        }
        if (category === this.editCategories[1]){
          this.$router.push(RouterConstants.PRODUCTS_LIST_EDIT)
        }
          }

    }

  }
</script>

<style scoped>

</style>
