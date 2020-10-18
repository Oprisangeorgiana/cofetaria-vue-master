<template>
    <div>
        <div class="row">
            <div class="col-3">
                {{this.ingredient.name}}
            </div>
            <div class="col-3">
               Data expirare: {{this.ingredient.expDate}}
            </div>
            <form class="col-3">
                <button class="btn btn-secondary" @click="removeIngredient">Sterge ingredient</button>
            </form>
            <div class="col-3">
                <div class="btn btn-secondary" @click="editIngredient">Editeaza ingredient</div>
            </div>
        </div>
        <br>
        <hr>
    </div>
</template>

<script>
  // @ is an alias to /src

  import axios from 'axios'
  import RouterConstants from 'router/RouterContants'


  export default {
    name: 'ingredientsManagement',

    props: {
      ingredient: Object,
    },

    components: {

    },
    data: function () {
      return {

      }
    },
    mounted () {
    },
    computed: {},

    methods: {
      async removeIngredient () {
        let id = this.ingredient.id
        await axios.delete(`http://localhost:3000/ingredients/${id}`)
      },
      editIngredient () {
        let newRoute = RouterConstants.EDIT_INGREDIENTS
        newRoute = newRoute.replace(/:[a-zA-Z]+/, this.ingredient.id)
        this.$router.push(newRoute)
      },
    },

  }
</script>

<style scoped>
</style>
