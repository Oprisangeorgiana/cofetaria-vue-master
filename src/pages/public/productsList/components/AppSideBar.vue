<template>
  <div>
    <h4>Categorii</h4>
    <div v-if="isFetchingCategories">
      <div class="spinner-border"></div>
    </div>
    <div v-else
         class="row">
      <div class="col category">
        <app-button
          v-for="currentCategory in categoriesList"
          @on-pressed="onCategoryPressed(currentCategory)"
          :key="currentCategory.id"
          :text="currentCategory.name"
          :is-active="currentCategory.name===activeCategory"

        />
      </div>
    </div>
    <div>
      <h4>Ingrediente</h4>
      <div class="row">
        <div class="col category">
          <app-button
            v-for="currentIngredient in ingredientsList"
            @on-pressed="onIngredientPressed(currentIngredient)"
            :text="currentIngredient.name"
            :key="currentIngredient.id"
            :is-active="getIngredientisActive(currentIngredient)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import AppButton from '@/components/AppButton'
  import homeGetters from 'pages/public/productsList/store/getters'
  import homeActions from 'pages/public/productsList/store/actions'
  import homeMutations from 'pages/public/productsList/store/mutations'

  export default {

    name: 'app-side-bar',

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
      categoriesList () {
        return this.$store.getters[homeGetters.GET_CATEGORIES_LIST]
      },
      activeCategory () {
        return this.$store.getters[homeGetters.GET_ACTIVE_CATEGORY]
      },
      isFetchingCategories () {
        return this.$store.getters[homeGetters.GET_IS_FETCHING_CATEGORIES]
      },
      //dan
      ingredientsList () {
        return this.$store.getters[homeGetters.GET_INGREDIENTS_LIST]
      },
      activeIngredient () {
        return this.$store.getters[homeGetters.GET_ACTIVE_INGREDIENT]
      },
      isFetchingIngredients () {
        return this.$store.getters[homeGetters.GET_IS_FETCHING_INGREDIENTS]
      }
    },

    async mounted () {

    },
    //================================================================================
    methods: {
      onCategoryPressed (category) {
        this.$store.commit(homeMutations.SET_ACTIVE_CATEGORY, category)
        this.$store.commit(homeMutations.SET_CURRENT_PAGE, 1)
        this.$store.commit(homeMutations.SET_SORTBY, 'Sort')
        this.$store.commit(homeMutations.SET_PAGESIZE, '63')
      },
      onIngredientPressed (ingredient) {
        this.$store.commit(homeMutations.SET_ACTIVE_INGREDIENT, ingredient)
        this.$store.commit(homeMutations.SET_CURRENT_PAGE, 1)
        this.$store.commit(homeMutations.SET_SORTBY, 'Sort')
        this.$store.commit(homeMutations.SET_PAGESIZE, '63')
      },
      getIngredientisActive (currentIngredient) {
        if (!currentIngredient)
          return false
        if (!this.activeIngredient) {
          return false
        }

        return currentIngredient.id === this.activeIngredient.id
      }
    }

  }
</script>

<style scoped>

</style>
