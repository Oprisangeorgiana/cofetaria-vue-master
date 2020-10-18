<template>
  <div>
    <admin-page-layout>
    <p>Admin Page</p>
    </admin-page-layout>
  </div>
</template>

<script>
  import AdminPageLayout from '../../../layouts/AdminPageLayout'
  import ingredientsManagement from '../../public/ingredientsManagement/ingredientsManagement'

  export default {


    name: 'AdminHome',
    components: {
      AdminPageLayout,
      ingredientsManagement,
    },
    data: function () {
      return {

      }
    }

  }
</script>

<style scoped>

</style>
