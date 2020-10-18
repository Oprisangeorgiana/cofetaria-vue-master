<template>
    <div class="container-fluid">

        <div class="row ">
            <div class="col-12">
                <toolbar-component>
                </toolbar-component>
            </div>
        </div>

        <div>
            <h3>ID ingredient : {{this.$route.params.id}}</h3>
        </div>

        <div class="row">
            <input class="col-3  mr-5"
                   v-model="editedName"
                   placeholder="ex: ceva"
            >
            <input class="col-3  mr-5"
                   v-model="editedExpDate"
                   placeholder="ex: 01.01.2031"
            >
                <button class="col-4 btn btn-danger" @click="editIngredient">Edit</button>

        </div>


        <div class="row categoryTitle mt-10">
            <div class="col-12">
                <AppFooter></AppFooter>
            </div>
        </div>

    </div>

</template>

<script>
  // @ is an alias to /src

  import ToolbarComponent from '@/components/UI-kit/Toolbar/ToolbarComponent'
  import AppFooter from '@/components/UI-kit/AppFooter'
  import axios from 'axios'
  import RouterContants from '../../../../router/RouterContants'

  export default {
    name: 'ingredientsManagement',
    components: {
      ToolbarComponent,
      AppFooter,

    },
    props: {

    },
    data: function () {
      return {
        editedName: '',
        editedExpDate: '',
        ingredientID: this.$route.params.id
      }
    },
    mounted () {

    },

    computed: {},

    methods: {

      async editIngredient () {
        await axios.patch(`http://localhost:3000/ingredients/${this.ingredientID}`,
          {
            name: this.editedName,
            expDate: this.editedExpDate
          })
        this.$router.push(RouterContants.INGREDIENTS_ADMIN)
      }

    }

  }
</script>

<style scoped>
</style>
