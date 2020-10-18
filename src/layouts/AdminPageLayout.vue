<template>
  <div class="container-fluid">
    <div class="row ">
      <div class="col-12">
        <toolbar-component/>
      </div>
    </div>
    <div class="row">

      <div class="col-2 category ">
        <admin-sidebar/>
      </div>

      <div class="col-10 category ">
        <div class="m-10">
          <div class="row category">
            <div class="col-12">
              <slot/>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div class="row categoryTitle mt-10">
      <div class="col-12">
        <app-footer/>
      </div>
    </div>

  </div>

</template>

<script>
  // @ is an alias to /src

  import ToolbarComponent from '../components/UI-kit/Toolbar/ToolbarComponent'
  import AppFooter from '../components/UI-kit/AppFooter'
  import AdminSidebar from './componentsAdmin/AdminSideBar'

  export default {
    name: 'AdminPageLayout',
    components: {
      AppFooter,
      ToolbarComponent,
      AdminSidebar
    },
    data: function () {
      return {}
    },
    mounted () {

    },
    computed: {},

    methods: {}

  }
</script>

<style scoped>
</style>
