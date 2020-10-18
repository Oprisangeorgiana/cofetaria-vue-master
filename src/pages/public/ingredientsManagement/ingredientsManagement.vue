<template>
  <div class="container-fluid">


    <admin-page-layout>
      <h3> Edit ingredients:</h3>
      <br>
      <div>
        <one-ingredient v-for="ingredient in ingredientsList"
                        :key="ingredient.id"
                        :ingredient="ingredient"/>
      </div>
      <form>
        <div class="row">
          <label class="col-2">Adauga un ingredient nou</label>
          <input class="col-3  mr-5"
                 v-model="newIngredient"
                 placeholder="ex: capsuni"
          >
          <input class="col-3  mr-5"
                 v-model="newExpDate"
                 placeholder="ex: 01.01.2030"
          >
          <button class="col-3 btn btn-primary" @click="addIngredient">Add</button>
        </div>

      </form>


    </admin-page-layout>
  </div>

</template>

<script>
  // @ is an alias to /src

  import OneIngredient from 'pages/public/ingredientsManagement/components/OneIngredient'
  import ingredientsGetter from 'pages/public/ingredientsManagement/store/getters'
  import ingredientsActions from 'pages/public/ingredientsManagement/store/actions'
  import axios from 'axios'
  import adminPageLayout from '../../../layouts/AdminPageLayout'

  export default {
    name: 'ingredientsManagement',
    components: {

      OneIngredient,
      adminPageLayout

    },
    data: function () {
      return {
        newIngredient: '',
        newExpDate: ''
      }
    },
    mounted () {
      this.$store.dispatch(ingredientsActions.INGREDIENTS_REPO)
    },

    computed: {

      ingredientsList () {
        return this.$store.getters[ingredientsGetter.GET_INGREDIENTS]
      }
    },

    methods: {
      async addIngredient () {
        //adauga un nou ingredient
        await axios.post('http://localhost:3000/ingredients',
          {
            name: this.newIngredient,
            expDate: this.newExpDate
          })
      }
    }

  }
</script>

<style scoped>
</style>
